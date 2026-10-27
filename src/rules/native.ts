// GLS002 to GLS009: UIKit and SwiftUI code that paints, hides, replaces or measures the bars and
// sheets Liquid Glass draws. The patterns run on code whose comments and strings are blanked.
import type { SourceFile } from '../collect/sources.js';
import { appleVariant, type Hit, hitAt, matches, stringAt } from './hit.js';

const APPEARANCE_CLASSES = 'UINavigationBarAppearance|UITabBarAppearance|UIToolbarAppearance';
const BACKGROUND_MEMBERS =
  'configureWithOpaqueBackground|backgroundColor|backgroundImage|backgroundEffect|shadowColor|shadowImage';

/** Variables that hold a bar appearance object: `let x = UITabBarAppearance()` and ObjC. */
function appearanceVariables(file: SourceFile): Map<string, string> {
  const found = new Map<string, string>();
  const swift = new RegExp(
    `\\b(?:let|var)\\s+(\\w+)\\s*(?::\\s*\\w+\\s*)?=\\s*(${APPEARANCE_CLASSES})\\s*\\(`,
    'g',
  );
  const objc = new RegExp(`\\b(${APPEARANCE_CLASSES})\\s*\\*\\s*(\\w+)\\s*=`, 'g');
  for (const match of matches(file, swift)) found.set(match[1] ?? '', match[2] ?? '');
  for (const match of matches(file, objc)) found.set(match[2] ?? '', match[1] ?? '');
  found.delete('');
  return found;
}

const memberName = (member: string) =>
  member === 'configureWithOpaqueBackground' ? 'configureWithOpaqueBackground()' : member;

/** GLS002: one hit per appearance object that gets its own background, plus loose calls. */
function barAppearance(file: SourceFile): Hit[] {
  const hits: Hit[] = [];
  const claimed = new Set<number>();
  for (const [variable, type] of appearanceVariables(file)) {
    const use = new RegExp(
      `\\b${variable}\\.(${BACKGROUND_MEMBERS})\\b\\s*(?:=(?!=)|\\()|\\[\\s*${variable}\\s+(configureWithOpaqueBackground)\\s*\\]`,
      'g',
    );
    const found = [...matches(file, use)];
    if (found.length === 0) continue;
    const members = [...new Set(found.map((match) => memberName(match[1] ?? match[2] ?? '')))];
    for (const match of found) {
      claimed.add(match.index + match[0].indexOf(match[1] ?? match[2] ?? ''));
    }
    hits.push(
      hitAt(
        file,
        found[0]?.index ?? 0,
        'GLS002',
        'uikit',
        `${type} ${variable}: ${members.join(', ')}.`,
      ),
    );
  }
  // Settings made straight on a bar's appearance property, and opaque configurations of
  // appearance objects that come from elsewhere (a parameter, a property).
  const loose = new RegExp(
    `\\b(?:standard|scrollEdge|compact|compactScrollEdge)Appearance\\??\\.(${BACKGROUND_MEMBERS})\\b\\s*(?:=(?!=)|\\()|\\b(configureWithOpaqueBackground)\\b`,
    'g',
  );
  for (const match of matches(file, loose)) {
    if (claimed.has(match.index + match[0].indexOf(match[1] ?? match[2] ?? ''))) continue;
    const member = memberName(match[1] ?? match[2] ?? '');
    hits.push(hitAt(file, match.index, 'GLS002', 'uikit', `${member} on a bar appearance.`));
  }
  return hits;
}

const LEGACY_BAR: [RegExp, string][] = [
  [/\.barTintColor\s*=(?!=)|\bsetBarTintColor\s*:/g, 'barTintColor paints the bar background.'],
  [
    /\.isTranslucent\s*=\s*false\b|\.translucent\s*=\s*NO\b|\bsetTranslucent\s*:\s*NO\b/g,
    'isTranslucent = false makes the bar opaque.',
  ],
  [
    /\bsetBackgroundImage\s*\((?:[^()]|\([^()]*\))*\bbarMetrics\b|\bsetBackgroundImage\s*:[^\]]*\bbarMetrics\s*:/g,
    'A background image for the bar (setBackgroundImage with bar metrics).',
  ],
  [
    /\b(?:navigationBar|tabBar|toolbar|UINavigationBar\.appearance\(\)|UITabBar\.appearance\(\)|UIToolbar\.appearance\(\))\??\.(?:shadowImage|backgroundImage)\s*=(?!=)/g,
    'A shadow or background image set on the bar.',
  ],
];

/** GLS003: barTintColor, isTranslucent = false, bar background and shadow images. */
function legacyBar(file: SourceFile): Hit[] {
  return LEGACY_BAR.flatMap(([pattern, message]) =>
    [...matches(file, pattern)].map((match) =>
      hitAt(file, match.index, 'GLS003', 'uikit', message),
    ),
  );
}

const BAR_NAMES: Record<string, string> = {
  navigationBar: 'navigation bar',
  tabBar: 'tab bar',
  bottomBar: 'bottom bar',
  windowToolbar: 'window toolbar',
  automatic: 'bars',
};

function barsIn(argumentText: string): string {
  const names = [...argumentText.matchAll(/\.(\w+)/g)].map(
    (match) => BAR_NAMES[match[1] ?? ''] ?? match[1],
  );
  return names.length > 0 ? names.join(' and ') : 'bar';
}

/** GLS004: toolbarBackground and toolbarBackgroundVisibility, except `.automatic`. */
function swiftUIBarBackground(file: SourceFile): Hit[] {
  if (file.language !== 'swift') return [];
  const hits: Hit[] = [];
  const pattern =
    /\.(toolbarBackground|toolbarBackgroundVisibility)\s*\(\s*([^,)]*)(?:,\s*for:\s*([^)]*))?\)/g;
  for (const match of matches(file, pattern)) {
    const [, modifier = '', value = '', bars = ''] = match;
    const argument = value.trim();
    if (argument === '.automatic') continue;
    const where = barsIn(bars);
    let message = `${modifier}(${argument}) sets the ${where} background.`;
    if (argument === '.visible')
      message = `${modifier}(.visible) keeps the ${where} background visible.`;
    if (argument === '.hidden') message = `${modifier}(.hidden) hides the ${where} background.`;
    hits.push(hitAt(file, match.index, 'GLS004', 'swiftui', message));
  }
  return hits;
}

const CUSTOM_BAR: [RegExp, string][] = [
  [
    /\bclass\s+(\w+)\s*:\s*(?:UIKit\.)?(UITabBar|UIToolbar)\b|@interface\s+(\w+)\s*:\s*(UITabBar|UIToolbar)\b/g,
    'subclass',
  ],
  [/\btabBar\??\.isHidden\s*=\s*true\b|\btabBar\.hidden\s*=\s*YES\b/g, 'hidden'],
  [
    /\.(?:toolbar|toolbarVisibility)\s*\(\s*\.hidden\s*,\s*for:\s*[^)]*\.tabBar\b[^)]*\)/g,
    'swiftui-hidden',
  ],
];

/** GLS005: a UITabBar or UIToolbar subclass, or the system tab bar hidden for a custom one. */
function customBar(file: SourceFile): Hit[] {
  const hits: Hit[] = [];
  for (const [pattern, kind] of CUSTOM_BAR) {
    for (const match of matches(file, pattern)) {
      let message = 'The system tab bar is hidden (tabBar.isHidden = true).';
      if (kind === 'subclass') {
        message = `${match[1] ?? match[3]} subclasses ${match[2] ?? match[4]}.`;
      }
      if (kind === 'swiftui-hidden') {
        message = 'The system tab bar is hidden with toolbar(.hidden, for: .tabBar).';
      }
      hits.push(hitAt(file, match.index, 'GLS005', appleVariant(file), message));
    }
  }
  return hits;
}

/** GLS006: UIBlurEffect in a file that has no UIGlassEffect. */
function blurLayer(file: SourceFile): Hit[] {
  if (/\bUIGlassEffect\b/.test(file.code)) return [];
  const pattern = /\bUIBlurEffect\s*\(|\[\s*UIBlurEffect\s+effectWithStyle\b/g;
  return [...matches(file, pattern)].map((match) =>
    hitAt(file, match.index, 'GLS006', 'uikit', 'A UIBlurEffect view.'),
  );
}

/** GLS007: presentationBackground and a popover's backgroundColor. */
function sheetBackground(file: SourceFile): Hit[] {
  const hits: Hit[] = [];
  for (const match of matches(file, /\.presentationBackground\s*\(/g)) {
    hits.push(
      hitAt(
        file,
        match.index,
        'GLS007',
        'swiftui',
        'presentationBackground replaces the sheet background.',
      ),
    );
  }
  const popover = /\bpopoverPresentationController\??\.backgroundColor\s*=(?!=)/g;
  for (const match of matches(file, popover)) {
    hits.push(hitAt(file, match.index, 'GLS007', 'uikit', "The popover's backgroundColor is set."));
  }
  return hits;
}

const GEOMETRY: [RegExp, string][] = [
  [
    /\bsafeAreaInsets\.(?:bottom|top)\s*[-+]\s*\d|\b\d+(?:\.\d+)?\s*[-+]\s*[\w.?()]*\bsafeAreaInsets\.(?:bottom|top)\b/g,
    'A number added to the safe-area insets.',
  ],
  [
    /\b(?:tabBar|navigationBar|toolbar)\??\.(?:frame|bounds)\.(?:size\.)?height\b/g,
    "The bar's frame height is read for layout.",
  ],
  [
    /\bheight\s*[:=]\s*(?:49|83)\b(?!\.\d)|\bequalToConstant\s*:\s*(?:49|83)\b(?!\.\d)/g,
    'A tab bar height written as a number.',
  ],
];

/** GLS008: bar geometry written into the code. */
export function fixedGeometry(file: SourceFile, variant: Hit['variant']): Hit[] {
  return GEOMETRY.flatMap(([pattern, message]) =>
    [...matches(file, pattern)].map((match) =>
      hitAt(file, match.index, 'GLS008', variant, message),
    ),
  );
}

/** GLS009: Section("ACCOUNT") and Section(header: Text("ACCOUNT")). */
function capitalHeaders(file: SourceFile): Hit[] {
  if (file.language !== 'swift') return [];
  const hits: Hit[] = [];
  const pattern = /\bSection\s*\(\s*(?:header:\s*Text\s*\(\s*)?(")/g;
  for (const match of matches(file, pattern)) {
    const quote = match.index + match[0].length - 1;
    const title = stringAt(file, quote);
    if (!/[A-Z].*[A-Z]/.test(title) || /[a-z]/.test(title) || title.includes('\\(')) continue;
    hits.push(
      hitAt(
        file,
        match.index,
        'GLS009',
        'swiftui',
        `Section header "${title}" is written in capitals.`,
      ),
    );
  }
  return hits;
}

/** Every native rule on one Swift or Objective-C file. */
export function checkNativeFile(file: SourceFile): Hit[] {
  if (file.language !== 'swift' && file.language !== 'objc') return [];
  return [
    ...barAppearance(file),
    ...legacyBar(file),
    ...swiftUIBarBackground(file),
    ...customBar(file),
    ...blurLayer(file),
    ...sheetBackground(file),
    ...fixedGeometry(file, appleVariant(file)),
    ...capitalHeaders(file),
  ];
}
