// The rule data: what each rule says, its sources and its fixes, from rules/liquid-glass.json.
// The checks in this folder decide where a rule applies; the words come from the data file, so a
// rule's text and sources can be reviewed without reading code.
import { readFileSync } from 'node:fs';
import { z } from 'zod';

export const SEVERITIES = ['error', 'warning', 'info'] as const;
export type Severity = (typeof SEVERITIES)[number];

export const RULE_IDS = [
  'GLS001',
  'GLS002',
  'GLS003',
  'GLS004',
  'GLS005',
  'GLS006',
  'GLS007',
  'GLS008',
  'GLS009',
  'GLS101',
  'GLS102',
  'GLS103',
  'GLS104',
  'GLS201',
  'GLS202',
] as const;
export type RuleId = (typeof RULE_IDS)[number];

/** Which fix of a rule applies: by where the finding is, or what kind of code it is in. */
export const FIX_VARIANTS = [
  'info-plist',
  'build-setting',
  'expo-config',
  'uikit',
  'swiftui',
  'react-native',
  'expo',
  'flutter',
] as const;
export type FixVariant = (typeof FIX_VARIANTS)[number];

const source = z.object({
  title: z.string().min(1),
  url: z.url({ protocol: /^https$/ }),
});
export type RuleSource = z.infer<typeof source>;

const fix = z.object({
  title: z.string().min(1),
  steps: z.array(z.string().min(1)).min(1),
  guide: z.string().regex(/^docs\/guides\/[\w-]+\.md$/),
});
export type RuleFix = z.infer<typeof fix>;

const rule = z.object({
  id: z.enum(RULE_IDS),
  severity: z.enum(SEVERITIES),
  title: z.string().min(1),
  summary: z.string().min(1),
  sources: z.array(source).min(1),
  fixes: z.partialRecord(z.enum(FIX_VARIANTS), fix),
});
export type Rule = z.infer<typeof rule>;

/** The shape of rules/liquid-glass.json; rules/schema.json is generated from it. */
export const ruleDataSchema = z.object({
  $schema: z.string().optional(),
  ruleSet: z.literal('liquid-glass'),
  dataVersion: z.string().regex(/^\d{4}\.\d{2}\.\d{2}$/),
  sdk: z.string().min(1),
  rules: z.array(rule),
  adoption: z.array(z.object({ pattern: z.string().min(1), label: z.string().min(1) })),
});
export type RuleData = z.infer<typeof ruleDataSchema>;

/** Parses and checks rule data; every rule ID must appear exactly once. */
export function parseRuleData(json: unknown): RuleData {
  const data = ruleDataSchema.parse(json);
  const ids = data.rules.map((item) => item.id);
  const missing = RULE_IDS.filter((id) => !ids.includes(id));
  const repeated = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (missing.length > 0) throw new Error(`Rule data has no entry for ${missing.join(', ')}.`);
  if (repeated.length > 0) throw new Error(`Rule data repeats ${repeated.join(', ')}.`);
  return data;
}

// src/ and dist/ are both one level below the package root.
export const RULE_DATA: RuleData = parseRuleData(
  JSON.parse(readFileSync(new URL('../../rules/liquid-glass.json', import.meta.url), 'utf8')),
);

const BY_ID = new Map(RULE_DATA.rules.map((item) => [item.id, item]));

export function ruleById(id: RuleId): Rule {
  const found = BY_ID.get(id);
  if (!found) throw new Error(`Unknown rule ${id}`);
  return found;
}
