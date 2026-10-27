// Scans one project: detects it, reads it, runs the rules and builds the report.
import { relative, sep } from 'node:path';
import { collectApp } from './collect/app.js';
import { detectProject, type Ecosystem } from './detect/project.js';
import {
  type Finding,
  type Impact,
  type Report,
  SCHEMA_VERSION,
  type TargetSummary,
  type Verdict,
  type VersionInfo,
} from './model.js';
import { adoptedApis, checkApp } from './rules/check.js';
import { RULE_DATA, ruleById, type Severity } from './rules/data.js';
import type { Hit } from './rules/hit.js';
import { targetOptOut } from './rules/optout.js';
import { REPOSITORY_URL } from './report/text.js';
import { VERSION } from './version.js';

const SEVERITY_ORDER: Record<Severity, number> = { error: 0, warning: 1, info: 2 };

/** Weights of the impact score; see Impact in model.ts. */
export const IMPACT_WEIGHTS = { optOut: 50, warning: 6, info: 2, max: 100 } as const;

const plural = (count: number, word: string, many = `${word}s`) =>
  `${count} ${count === 1 ? word : many}`;

function toFinding(hit: Hit, root: string): Finding {
  const rule = ruleById(hit.rule);
  const variant = rule.fixes[hit.variant] ? hit.variant : Object.keys(rule.fixes)[0];
  const fix = variant ? rule.fixes[variant as keyof typeof rule.fixes] : undefined;
  return {
    rule: hit.rule,
    severity: rule.severity,
    title: rule.title,
    message: hit.message,
    file: relative(root, hit.file).split(sep).join('/') || '.',
    line: hit.line,
    target: hit.target ?? null,
    fix: fix
      ? {
          id: `${hit.rule}/${variant}`,
          title: fix.title,
          steps: fix.steps,
          guide: `${REPOSITORY_URL}/blob/main/${fix.guide}`,
        }
      : null,
    sources: rule.sources,
  };
}

function byPlace(left: Finding, right: Finding): number {
  return (
    SEVERITY_ORDER[left.severity] - SEVERITY_ORDER[right.severity] ||
    left.rule.localeCompare(right.rule) ||
    left.file.localeCompare(right.file) ||
    (left.line ?? 0) - (right.line ?? 0)
  );
}

export function impactOf(findings: Finding[]): Impact {
  const optOut = findings.some((item) => item.rule === 'GLS001') ? IMPACT_WEIGHTS.optOut : 0;
  const warnings = findings.filter((item) => item.severity === 'warning').length;
  const info = findings.filter((item) => item.severity === 'info').length;
  const score = Math.min(
    IMPACT_WEIGHTS.max,
    optOut + warnings * IMPACT_WEIGHTS.warning + info * IMPACT_WEIGHTS.info,
  );
  const level = score >= 50 ? 'high' : score >= 20 ? 'medium' : score > 0 ? 'low' : 'none';
  return { score, level };
}

/**
 * The one-line verdict. `optOutKnown` is false when an Info.plist or Xcode project that could carry
 * the opt-out was not read: then the app is never called ready, whatever else was found.
 */
export function verdictOf(findings: Finding[], ecosystem: Ecosystem, optOutKnown = true): Verdict {
  const warnings = findings.filter((item) => item.severity === 'warning').length;
  const info = findings.filter((item) => item.severity === 'info').length;
  if (findings.some((item) => item.rule === 'GLS001')) {
    const rest = warnings > 0 ? `; ${plural(warnings, 'custom style')} to review first` : '';
    return {
      code: 'opt-out-ignored',
      text: `The Liquid Glass opt-out is ignored when built with the iOS 27 SDK${rest}`,
    };
  }
  if (!optOutKnown) {
    const places = [
      warnings > 0 ? plural(warnings, 'custom style') : '',
      info > 0 ? plural(info, 'place') : '',
    ];
    const listed = places.filter(Boolean).join(' and ');
    return {
      code: 'not-known',
      text: `Opt-out not known: an Info.plist or Xcode project that could set it was not read (see the notes)${listed ? `; ${listed} to review` : ''}`,
    };
  }
  if (warnings > 0) {
    return {
      code: 'covered',
      text: `Shows Liquid Glass, with ${plural(warnings, 'custom style')} covering or replacing it`,
    };
  }
  if (info > 0) {
    const what = ecosystem === 'flutter' ? 'Flutter draws its own bars' : 'Shows Liquid Glass';
    return { code: 'review', text: `${what}; ${plural(info, 'place')} to review` };
  }
  return {
    code: 'ready',
    text: 'Ready for Liquid Glass: no opt-out and no custom bar styles found',
  };
}

/** Scans the project at `path` (absolute) and returns the report. */
export async function scan(path: string): Promise<Report> {
  const project = await detectProject(path);
  const app = await collectApp(project);
  const findings = checkApp(app)
    .map((hit) => toFinding(hit, project.root))
    .sort(byPlace);
  const relativePath = (file: string) => relative(project.root, file).split(sep).join('/');
  const targets: TargetSummary[] = app.targets.map((target) => ({
    name: target.name,
    infoPlists: target.infoPlists.map((plist) => relativePath(plist.path)),
    optOut: targetOptOut(target),
    deploymentTarget: target.deploymentTarget,
  }));
  const versions: VersionInfo[] = [...project.packages.values()].map((item) => ({
    name: item.name,
    version: item.version,
    source: item.source,
  }));
  if (project.flutter?.version) {
    versions.push({ name: 'flutter', version: project.flutter.version, source: 'pinned' });
  }
  const notes = [...app.notes];
  if (project.expoConfig && project.expoConfig.json === null) {
    notes.push(
      `${project.expoConfig.file} is read as text, not run: an opt-out set through a variable or a config plugin is not seen.`,
    );
  }
  const unreadPlist = targets.some((target) => target.optOut === 'unknown');
  if (unreadPlist) {
    notes.push('An Info.plist could not be read, so a Liquid Glass opt-out in it is not known.');
  }
  const optOutKnown = !unreadPlist && !app.appNotChecked;
  return {
    schemaVersion: SCHEMA_VERSION,
    tool: { name: 'glassready', version: VERSION },
    rules: { ruleSet: RULE_DATA.ruleSet, dataVersion: RULE_DATA.dataVersion, sdk: RULE_DATA.sdk },
    project: {
      path,
      name: project.name,
      ecosystem: project.ecosystem,
      versions,
      targets,
      xcode: { versionFile: project.xcodeVersionFile, lastUpgradeCheck: app.lastUpgradeCheck },
    },
    verdict: verdictOf(findings, project.ecosystem, optOutKnown),
    impact: impactOf(findings),
    findings,
    adopted: adoptedApis(app.sources).map((item) => ({ ...item, file: relativePath(item.file) })),
    notes,
    summary: {
      errors: findings.filter((item) => item.severity === 'error').length,
      warnings: findings.filter((item) => item.severity === 'warning').length,
      info: findings.filter((item) => item.severity === 'info').length,
    },
  };
}
