// Verifies the locked stack in package.json. See AGENTS.md ("LOCKED PROJECT DECISIONS").
// Do NOT edit the expected values below unless the project owner has explicitly instructed it.
import { readFile } from 'node:fs/promises';

const LOCKED = {
  dependencies: {
    next: '16.4.6',
    react: '19.3.1',
    'react-dom': '19.3.1',
  },
  devDependencies: {
    eslint: '10.15.0',
    tailwindcss: '4.3.5',
    '@tailwindcss/postcss': '4.3.5',
    '@typescript/native': 'npm:typescript@7.0.2',
    typescript: 'npm:@typescript/typescript6@6.0.2',
    prettier: null, // must be present
  },
};

const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const errors = [];

for (const [section, entries] of Object.entries(LOCKED)) {
  for (const [name, expected] of Object.entries(entries)) {
    const actual = pkg[section]?.[name] ?? pkg.dependencies?.[name] ?? pkg.devDependencies?.[name];
    if (actual === undefined) errors.push(`${name} is missing`);
    else if (expected !== null && actual !== expected)
      errors.push(`${name} is "${actual}" but is locked to "${expected}"`);
  }
}

if (pkg.packageManager && !pkg.packageManager.startsWith('pnpm@'))
  errors.push('package manager must be pnpm');

if (errors.length > 0) {
  console.error('LOCKED STACK VIOLATION (see AGENTS.md):\n - ' + errors.join('\n - '));
  process.exit(1);
}
console.log('Locked stack OK.');
