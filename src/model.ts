// The report glassready produces: one project, what it found and how much it is likely to change.
// The JSON output is this structure as-is (schemaVersion 0, which may change before 1.0).
import type { Ecosystem } from './detect/project.js';
import type { RuleId, RuleSource, Severity } from './rules/data.js';

export const SCHEMA_VERSION = 0;

/** The fix glassready suggests for a finding, from the rule data. */
export interface FixAdvice {
  /** The rule and the variant of its fix, e.g. "GLS002/uikit"; the same fix has the same id. */
  id: string;
  title: string;
  steps: string[];
  /** Link to the glassready guide for this kind of code. */
  guide: string;
}

export interface Finding {
  rule: RuleId;
  severity: Severity;
  title: string;
  /** What was found at this place, in one sentence. */
  message: string;
  /** Path relative to the checked folder, with forward slashes. */
  file: string;
  line: number | null;
  /** The app target the finding belongs to, when it is about one target's Info.plist. */
  target: string | null;
  fix: FixAdvice | null;
  sources: RuleSource[];
}

/** Whether a target asks for the old design, as far as its Info.plist and build settings say. */
export type OptOut = 'yes' | 'no' | 'unknown';

export interface TargetSummary {
  name: string;
  /** Info.plist paths relative to the checked folder that glassready read. */
  infoPlists: string[];
  optOut: OptOut;
  /** IPHONEOS_DEPLOYMENT_TARGET, the lowest over the target's configurations. */
  deploymentTarget: string | null;
}

export type VerdictCode = 'opt-out-ignored' | 'covered' | 'review' | 'ready';

export interface Verdict {
  code: VerdictCode;
  text: string;
}

export type ImpactLevel = 'none' | 'low' | 'medium' | 'high';

/**
 * A count of what glassready found, to sort projects by how much they are likely to change:
 * 50 for the opt-out, 6 per warning and 2 per info finding, at most 100. It is not a measure of
 * how good the app will look.
 */
export interface Impact {
  score: number;
  level: ImpactLevel;
}

export interface VersionInfo {
  name: string;
  version: string | null;
  /** installed, lockfile, declared (lowest version the range allows) or pinned (Flutter). */
  source: string;
}

export interface Report {
  schemaVersion: typeof SCHEMA_VERSION;
  tool: { name: 'glassready'; version: string };
  rules: { ruleSet: string; dataVersion: string; sdk: string };
  project: {
    /** The folder as given on the command line. */
    path: string;
    name: string;
    ecosystem: Ecosystem;
    versions: VersionInfo[];
    targets: TargetSummary[];
    /**
     * What the project says about the Xcode it is built with: .xcode-version, and the Xcode that
     * last upgraded the project file (LastUpgradeCheck).
     */
    xcode: { versionFile: string | null; lastUpgradeCheck: string | null };
  };
  verdict: Verdict;
  impact: Impact;
  findings: Finding[];
  /** Liquid Glass APIs the app already uses, with the first file that uses each. */
  adopted: { label: string; file: string }[];
  /** Things glassready could not check or that the reader should know. */
  notes: string[];
  summary: { errors: number; warnings: number; info: number };
}
