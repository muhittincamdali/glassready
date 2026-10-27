import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { ruleSchemaJson } from '../../scripts/rule-schema.ts';
import { parseRuleData, RULE_DATA, RULE_IDS, ruleById } from '../../src/rules/data.js';

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const raw = () => JSON.parse(readFileSync(`${ROOT}rules/liquid-glass.json`, 'utf8'));

describe('rules/liquid-glass.json', () => {
  it('has every rule once, in order', () => {
    expect(RULE_DATA.rules.map((rule) => rule.id)).toEqual([...RULE_IDS]);
  });

  it('cites a primary source over HTTPS for every rule', () => {
    const primary =
      /^https:\/\/(developer\.apple\.com|reactnavigation\.org|docs\.expo\.dev|docs\.flutter\.dev|github\.com\/flutter\/flutter|pub\.dev\/packages\/cupertino_ui)\//;
    for (const rule of RULE_DATA.rules) {
      expect(rule.sources.length, rule.id).toBeGreaterThan(0);
      for (const source of rule.sources) expect(source.url, rule.id).toMatch(primary);
    }
  });

  it('links every fix to a guide that exists', () => {
    for (const rule of RULE_DATA.rules) {
      for (const fix of Object.values(rule.fixes)) {
        expect(existsSync(`${ROOT}${fix.guide}`), `${rule.id} ${fix.guide}`).toBe(true);
      }
    }
  });

  it('has a fix for every variant a check uses', () => {
    const used: Record<string, string[]> = {
      GLS001: ['info-plist', 'build-setting', 'expo-config'],
      GLS002: ['uikit'],
      GLS003: ['uikit'],
      GLS004: ['swiftui'],
      GLS005: ['uikit', 'swiftui'],
      GLS006: ['uikit'],
      GLS007: ['uikit', 'swiftui'],
      GLS008: ['uikit', 'swiftui', 'react-native'],
      GLS009: ['swiftui'],
      GLS101: ['react-native'],
      GLS102: ['react-native', 'expo'],
      GLS103: ['react-native'],
      GLS104: ['react-native'],
      GLS201: ['flutter'],
      GLS202: ['flutter'],
    };
    for (const id of RULE_IDS) {
      expect(Object.keys(ruleById(id).fixes).sort(), id).toEqual([...(used[id] ?? [])].sort());
    }
  });

  it('has adoption patterns that compile', () => {
    for (const item of RULE_DATA.adoption) expect(() => new RegExp(item.pattern)).not.toThrow();
  });

  it('has the error severity only for the ignored opt-out', () => {
    expect(
      RULE_DATA.rules.filter((rule) => rule.severity === 'error').map((rule) => rule.id),
    ).toEqual(['GLS001']);
  });

  it('matches the JSON Schema shipped for editors', () => {
    const committed = readFileSync(`${ROOT}rules/schema.json`, 'utf8');
    expect(committed, 'run node scripts/rule-schema.ts').toBe(ruleSchemaJson());
    expect(JSON.parse(committed).properties.rules.items.properties.id.enum).toEqual([...RULE_IDS]);
  });
});

describe('parseRuleData', () => {
  it('rejects a missing or repeated rule, an http source and an unknown variant', () => {
    const data = raw();
    expect(() => parseRuleData({ ...data, rules: data.rules.slice(1) })).toThrow(
      /no entry for GLS001/,
    );
    expect(() => parseRuleData({ ...data, rules: [...data.rules, data.rules[0]] })).toThrow(
      /repeats GLS001/,
    );
    const http = structuredClone(data);
    http.rules[0].sources[0].url = 'http://developer.apple.com/x';
    expect(() => parseRuleData(http)).toThrow();
    const variant = structuredClone(data);
    variant.rules[0].fixes.android = variant.rules[0].fixes['info-plist'];
    expect(() => parseRuleData(variant)).toThrow();
  });

  it('throws for an unknown rule id', () => {
    expect(() => ruleById('GLS999' as never)).toThrow(/Unknown rule/);
  });
});
