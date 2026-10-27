// The source files of an app that the rules read: Swift and Objective-C under the iOS folder,
// JavaScript and TypeScript of a React Native or Expo app, Dart under a Flutter app's lib/. Each
// file is kept as written and with its comments and string contents blanked out.
import { readdir, readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { lineIndex } from '../core/lines.js';
import { blankCommentsAndStrings } from './blank.js';

export { blankCommentsAndStrings } from './blank.js';

export type Language = 'swift' | 'objc' | 'js' | 'dart';

export interface SourceFile {
  path: string;
  language: Language;
  /** The file as written. */
  text: string;
  /** The same text with comments and string contents replaced by spaces; offsets and lines match. */
  code: string;
  /** 1-based line of an offset. */
  lineAt(offset: number): number;
}

export const EXTENSIONS: Readonly<Record<string, Language>> = {
  '.swift': 'swift',
  '.m': 'objc',
  '.mm': 'objc',
  '.h': 'objc',
  '.js': 'js',
  '.jsx': 'js',
  '.ts': 'js',
  '.tsx': 'js',
  '.mjs': 'js',
  '.cjs': 'js',
  '.dart': 'dart',
};

/** Folders that hold dependencies, build output, tests or other platforms. */
const SKIPPED =
  /^(Pods|node_modules|build|DerivedData|\.build|Carthage|\.git|\.symlinks|\.expo|\.dart_tool|Flutter|android|web|windows|linux|macos|ios|.*Tests|__tests__|test|tests|e2e|.*\.xcodeproj|.*\.xcworkspace|.*\.xcassets|.*\.framework|.*\.xcframework)$/;

/** Files that are not app code: type declarations, tests, web-only variants and configs. */
const SKIPPED_FILES = /(\.d\.ts|\.(test|spec)\.[jt]sx?|\.web\.[jt]sx?|\.config\.[cm]?[jt]s)$/;

const MAX_DEPTH = 12;

/**
 * Every file with one of `languages` under `folder`, skipping dependencies, builds, tests and the
 * other platforms' folders. `folder` itself may be one of those names (for example ios/).
 */
export async function listSourceFiles(
  folder: string,
  languages: ReadonlySet<Language>,
): Promise<string[]> {
  const found: string[] = [];
  const walk = async (dir: string, depth: number) => {
    if (depth > MAX_DEPTH) return;
    const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!SKIPPED.test(entry.name)) await walk(join(dir, entry.name), depth + 1);
        continue;
      }
      const language = EXTENSIONS[extname(entry.name)];
      if (
        entry.isFile() &&
        language &&
        languages.has(language) &&
        !SKIPPED_FILES.test(entry.name)
      ) {
        found.push(join(dir, entry.name));
      }
    }
  };
  await walk(folder, 0);
  return found.sort();
}

export function sourceFile(path: string, text: string): SourceFile {
  const language = EXTENSIONS[extname(path)] ?? 'swift';
  return {
    path,
    language,
    text,
    code: blankCommentsAndStrings(text, language),
    lineAt: lineIndex(text),
  };
}

/** Where to look for sources, and in which languages. */
export interface SourceRoot {
  folder: string;
  languages: ReadonlySet<Language>;
}

/** Reads every source file under the given roots, each file once, sorted by path. */
export async function readSources(roots: readonly SourceRoot[]): Promise<SourceFile[]> {
  const lists = await Promise.all(
    roots.map((root) => listSourceFiles(root.folder, root.languages)),
  );
  const paths = [...new Set(lists.flat())].sort();
  return Promise.all(paths.map(async (path) => sourceFile(path, await readFile(path, 'utf8'))));
}
