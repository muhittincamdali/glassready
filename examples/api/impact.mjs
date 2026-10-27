// Runs glassready from JavaScript and prints one line per project, highest impact first: the
// impact level and score, the verdict and the rules found.
//
//   node examples/api/impact.mjs [project ...]
//
// Without arguments it checks the fixtures in this repository. In your own code, install
// @mcamdali/glassready and pass the folders of your apps.
import { fileURLToPath } from 'node:url';
import { scan } from '@mcamdali/glassready';

const root = fileURLToPath(new URL('../../', import.meta.url));
const projects =
  process.argv.length > 2
    ? process.argv.slice(2)
    : [
        'native-uikit-optout',
        'native-uikit-glass',
        'native-swiftui',
        'flutter-cupertino',
        'rn-088-js-tabs',
        'expo-58-default',
      ].map((name) => `${root}fixtures/${name}`);

const reports = await Promise.all(projects.map((path) => scan(path)));
reports.sort((left, right) => right.impact.score - left.impact.score);
for (const report of reports) {
  const rules = [...new Set(report.findings.map((finding) => finding.rule))].join(', ') || 'none';
  const { level, score } = report.impact;
  console.log(
    `${level.padEnd(6)} ${String(score).padStart(3)}  ${report.project.name} (${report.project.ecosystem}): ${report.verdict.text}. Rules: ${rules}.`,
  );
}
