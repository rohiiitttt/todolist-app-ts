import { defineConfig } from 'eslint';
import typescript from '@typescript-eslint/parser';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig({
  languageOptions: {
    parser: typescript,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-debugger': 'error',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'prefer-const': 'warn',
    'no-var': 'error',
    'no-magic-numbers': ['warn', { ignore: [0, 1] }],
    'arrow-parens': ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      languageOptions: {
        parser: typescript,
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
        },
      },
    },
  ],
});
