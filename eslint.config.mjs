import { defineConfig, globalIgnores } from 'eslint/config';
import eslint from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    plugins: importPlugin,
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          moduleDirectory: ['node_modules', 'src/'],
          extensions: ['.ts', '.tsx'],
        },
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            ['external', 'builtin'],
            ['parent', 'internal'],
            ['index', 'sibling'],
          ],
          'newlines-between': 'always',
        },
      ],
      'no-console': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
