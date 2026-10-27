/**
 * glassready shows what Liquid Glass changes in a native iOS, Flutter or React Native/Expo app
 * built with the iOS 27 SDK, which ignores the `UIDesignRequiresCompatibility` opt-out.
 *
 * ```js
 * import { render, scan } from '@mcamdali/glassready';
 *
 * const report = await scan('path/to/app');
 * console.log(report.verdict.text, report.impact.level);
 * console.log(render(report, 'markdown'));
 * ```
 *
 * The command-line tool is `glassready`; this module is the same scan for scripts.
 *
 * @packageDocumentation
 */
export { type CliEnvironment, EXIT, FAIL_ON, failsOn, PACKAGE_NAME, run } from './cli/run.js';
export { type Ecosystem, ProjectError } from './detect/project.js';
export type {
  Finding,
  FixAdvice,
  Impact,
  ImpactLevel,
  OptOut,
  Report,
  TargetSummary,
  Verdict,
  VerdictCode,
  VersionInfo,
} from './model.js';
export { SCHEMA_VERSION } from './model.js';
export { FORMATS, type Format, render, type TtyOptions } from './report/index.js';
export {
  FIX_VARIANTS,
  type FixVariant,
  RULE_DATA,
  RULE_IDS,
  type Rule,
  type RuleData,
  type RuleFix,
  type RuleId,
  type RuleSource,
  SEVERITIES,
  type Severity,
} from './rules/data.js';
export { IMPACT_WEIGHTS, impactOf, scan, verdictOf } from './scan.js';
export { VERSION } from './version.js';
