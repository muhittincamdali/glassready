// Records the README and guide demos as terminal SVGs (light and dark) in docs/media/:
//
// - CLI demos run the built glassready on a fixture from the repository root, as a reader would.
// - Simulator sessions replay docs/media/simulator/<name>.txt, the output that
//   scripts/simulator-compare.sh printed on a Mac; they cannot be recorded in CI.
//
// Run with `npm run demo` (builds first).
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { type Session, terminalSvg } from './terminal-svg.ts';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
export const MEDIA = `${ROOT}docs/media/`;

export interface Demo {
  name: string;
  fixture: string;
  title: string;
  comment: string;
}

export const DEMOS: Demo[] = [
  {
    name: 'uikit-optout',
    fixture: 'native-uikit-optout',
    title: 'glassready · UIKit app that opts out of Liquid Glass',
    comment: '# fixtures/native-uikit-optout: UIDesignRequiresCompatibility and opaque bars',
  },
  {
    name: 'react-native',
    fixture: 'rn-088-js-tabs',
    title: 'glassready · React Native 0.88 app',
    comment: '# fixtures/rn-088-js-tabs: native stack header colour, JavaScript bottom tabs',
  },
  {
    name: 'flutter',
    fixture: 'flutter-cupertino',
    title: 'glassready · Flutter app with Cupertino bars',
    comment: '# fixtures/flutter-cupertino: Flutter 3.47.5 template, Cupertino bars, UiKitView',
  },
  {
    name: 'swiftui',
    fixture: 'native-swiftui',
    title: 'glassready · SwiftUI app',
    comment: '# fixtures/native-swiftui: toolbarBackground, custom bottom bar, sheet background',
  },
];

/** Recorded scripts/simulator-compare.sh runs: docs/media/simulator/<name>.txt. */
export const SIMULATOR_SESSIONS = [
  { name: 'native-uikit-optout-27.0', fixture: 'native-uikit-optout', runtime: '27.0' },
  { name: 'native-uikit-optout-26.4', fixture: 'native-uikit-optout', runtime: '26.4' },
] as const;

/** Runs the CLI for one demo and returns what a terminal would have shown. */
export function record(demo: Demo): Session {
  const env: NodeJS.ProcessEnv = { ...process.env, FORCE_COLOR: '1' };
  delete env.NO_COLOR;
  let output: string;
  try {
    output = execFileSync(
      process.execPath,
      [`${ROOT}dist/cli/main.js`, `fixtures/${demo.fixture}`],
      {
        cwd: ROOT,
        env,
        encoding: 'utf8',
      },
    );
  } catch (error) {
    // Exit code 1 means findings; the report is still on stdout.
    output = (error as { stdout?: string }).stdout ?? '';
  }
  return {
    title: demo.title,
    comment: demo.comment,
    command: `npx @mcamdali/glassready fixtures/${demo.fixture}`,
    output,
  };
}

/** The recorded output of scripts/simulator-compare.sh for one fixture and runtime, as a session. */
export function simulatorSession(session: (typeof SIMULATOR_SESSIONS)[number]): Session {
  return {
    title: `iOS ${session.runtime} Simulator · ${session.fixture}`,
    comment: '# recorded on a Mac (Apple silicon) with Xcode 27.1 on 27 October 2026',
    command: `scripts/simulator-compare.sh ${session.fixture} ${session.runtime}`,
    output: readFileSync(`${MEDIA}simulator/${session.name}.txt`, 'utf8'),
  };
}

export const mediaPath = (name: string, theme: 'light' | 'dark') =>
  `${MEDIA}demo-${name}-${theme}.svg`;

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  mkdirSync(MEDIA, { recursive: true });
  const sessions: [string, Session][] = [
    ...DEMOS.map((demo): [string, Session] => [demo.name, record(demo)]),
    ...SIMULATOR_SESSIONS.map((session): [string, Session] => [
      `simulator-${session.name}`,
      simulatorSession(session),
    ]),
  ];
  for (const [name, session] of sessions) {
    for (const theme of ['light', 'dark'] as const) {
      writeFileSync(mediaPath(name, theme), terminalSvg(session, theme));
    }
    console.log(`docs/media/demo-${name}-{light,dark}.svg`);
  }
}
