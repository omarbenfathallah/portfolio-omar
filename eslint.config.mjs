/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  extends: ['next/core-web-vitals'],
  ignorePatterns: [
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'node_modules/**',
  ],
};

export default eslintConfig;