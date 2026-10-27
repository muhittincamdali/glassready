// The terminal report: the verdict and impact first, then each finding with where it is and what
// it means, then each fix once, lettered, with its steps and guide. Findings name fixes by letter.
// render() has already replaced the control characters in every string of the report.
import type { FixAdvice, Finding, Report } from '../model.js';
import {
  countsLine,
  ECOSYSTEM_LABELS,
  GUIDES,
  OPT_OUT_LABELS,
  REPOSITORY_URL,
  SDKBUMP,
  toolchainLine,
  wrap,
} from './text.js';

export interface TtyOptions {
  color: boolean;
  /** Total width to wrap to (default 100, at least 60). */
  width?: number;
}

type Style = 'bold' | 'dim' | 'red' | 'yellow' | 'cyan' | 'green' | 'blue';
const CODES: Record<Style, [number, number]> = {
  bold: [1, 22],
  dim: [2, 22],
  red: [31, 39],
  yellow: [33, 39],
  green: [32, 39],
  cyan: [36, 39],
  blue: [34, 39],
};

const LABEL_WIDTH = 9;
const INDENT = ' '.repeat(LABEL_WIDTH);
const SEVERITY_STYLE = { error: 'red', warning: 'yellow', info: 'cyan' } as const;
const VERDICT_STYLE = {
  'opt-out-ignored': 'red',
  'not-known': 'yellow',
  covered: 'yellow',
  review: 'cyan',
  ready: 'green',
} as const;
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

type Paint = (style: Style, text: string) => string;

function painter(color: boolean): Paint {
  return (style, text) => {
    if (!color) return text;
    const [open, close] = CODES[style];
    return `\u001b[${open}m${text}\u001b[${close}m`;
  };
}

/** Each distinct fix of the report with its letter, in order of first appearance. */
function letterFixes(
  findings: readonly Finding[],
): Map<string, { letter: string; fix: FixAdvice }> {
  const result = new Map<string, { letter: string; fix: FixAdvice }>();
  for (const item of findings) {
    if (!item.fix || result.has(item.fix.id)) continue;
    result.set(item.fix.id, { letter: LETTERS[result.size] ?? '?', fix: item.fix });
  }
  return result;
}

function header(report: Report, paint: Paint, width: number): string[] {
  const { project, rules } = report;
  const dim = (text: string) => wrap(text, width).map((line) => paint('dim', line));
  const [name = '', ...rest] = wrap(
    `${project.name} · ${ECOSYSTEM_LABELS[project.ecosystem]} · ${project.path}`,
    width,
  );
  const nameLength = project.name.length;
  const lines = [
    ...dim(`glassready ${report.tool.version} · rules ${rules.ruleSet}@${rules.dataVersion}`),
    '',
    `${paint('bold', name.slice(0, nameLength))}${name.slice(nameLength)}`,
    ...rest,
  ];
  const toolchain = toolchainLine(report);
  if (toolchain) lines.push(...dim(toolchain));
  for (const version of project.versions) {
    lines.push(...dim(`${version.name} ${version.version ?? '(unknown)'} (${version.source})`));
  }
  for (const target of project.targets) {
    const plists = target.infoPlists.length > 0 ? ` (${target.infoPlists.join(', ')})` : '';
    lines.push(...dim(`target ${target.name}: ${OPT_OUT_LABELS[target.optOut]}${plists}`));
  }
  const style = VERDICT_STYLE[report.verdict.code];
  const { score, level } = report.impact;
  lines.push(
    '',
    ...wrap(report.verdict.text, width).map((line) => paint('bold', paint(style, line))),
    paint('dim', `Impact: ${level} (${score} of 100)`),
  );
  if (report.adopted.length > 0) {
    const labels = report.adopted.map((item) => item.label).join(', ');
    lines.push(...wrap(`Already uses: ${labels}`, width).map((line) => paint('green', line)));
  }
  lines.push('');
  return lines;
}

function fixSection(
  fixes: Map<string, { letter: string; fix: FixAdvice }>,
  paint: Paint,
  width: number,
) {
  const out = [paint('bold', 'How to fix'), ''];
  for (const { letter, fix } of fixes.values()) {
    out.push(`${paint('bold', `[${letter}]`.padEnd(LABEL_WIDTH))}${paint('bold', fix.title)}`);
    fix.steps.forEach((step, index) => {
      const marker = `${index + 1}. `;
      const [first = '', ...rest] = wrap(step, width - LABEL_WIDTH - marker.length);
      out.push(
        `${INDENT}${marker}${first}`,
        ...rest.map((line) => `${INDENT}${' '.repeat(marker.length)}${line}`),
      );
    });
    out.push(`${INDENT}${paint('dim', fix.guide)}`, '');
  }
  return out;
}

export function renderTty(report: Report, options: TtyOptions): string {
  const paint = painter(options.color);
  const width = Math.max(60, options.width ?? 100);
  const body = (text: string, style?: Style) =>
    wrap(text, width - LABEL_WIDTH).map((line) => `${INDENT}${style ? paint(style, line) : line}`);
  const fixes = letterFixes(report.findings);
  const out = header(report, paint, width);

  for (const item of report.findings) {
    const label = item.severity.toUpperCase().padEnd(LABEL_WIDTH);
    const style = SEVERITY_STYLE[item.severity];
    const [titleFirst = '', ...titleRest] = wrap(
      `${item.rule}  ${item.title}`,
      width - LABEL_WIDTH,
    );
    out.push(
      `${paint('bold', paint(style, label))}${paint('bold', titleFirst)}`,
      ...titleRest.map((line) => `${INDENT}${paint('bold', line)}`),
      `${INDENT}${paint('blue', `${item.file}${item.line ? `:${item.line}` : ''}`)}`,
      ...body(item.message),
    );
    const fix = item.fix ? fixes.get(item.fix.id) : undefined;
    if (fix) out.push(...body(`Fix: [${fix.letter}] ${fix.fix.title}`, 'bold'));
    out.push('');
  }

  if (fixes.size > 0) out.push(...fixSection(fixes, paint, width));
  for (const note of report.notes) {
    out.push(...wrap(`Note: ${note}`, width).map((line) => paint('dim', line)));
  }
  if (report.notes.length) out.push('');
  out.push(paint('bold', countsLine(report)), `Guide: ${GUIDES[report.project.ecosystem]}`);
  if (report.findings.length === 0)
    out.push(`What is checked: ${REPOSITORY_URL}#what-glassready-checks`);
  out.push(paint('dim', `Will it launch with the iOS 27 SDK? ${SDKBUMP.command} (${SDKBUMP.url})`));
  return `${out.join('\n')}\n`;
}
