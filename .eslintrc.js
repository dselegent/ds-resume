module.exports = {
  root: true,
  extends: [
    'eslint:recommended', // Eslint recommended configuration by eslint.
    'plugin:react/recommended', // Recommended react linting configs.
    'plugin:react-hooks/recommended', // Recommended react hooks linting configs.
    'plugin:jsx-a11y/recommended', // Turns on a11y rules for JSX.
    'plugin:@typescript-eslint/recommended', // Turns on rules from TypeScript-specific plugin.
    '@unocss',
    './types/.eslintrc-auto-import.json',
    'prettier',
    'plugin:prettier/recommended', // Turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'simple-import-sort', // Plugin for sorting imports in file.
  ],
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
    'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们
    'prefer-const': 'off', // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    'no-irregular-whitespace': 'off', // 禁止不规则的空白
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$',
      },
    ],
    'space-before-function-paren': 'off',
    quotes: ['error', 'single'],
    'react/jsx-no-undef': 'off', // 禁止没有定义的组件名

    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/no-inferrable-types': 'off', // 可以轻松推断的显式类型可能会增加不必要的冗长
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/ban-ts-ignore': 'off', // 禁止使用 @ts-ignore
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    '@typescript-eslint/explicit-function-return-type': 'off', // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    '@typescript-eslint/no-var-requires': 'off', // 不允许在 import 语句中使用 require 语句
    '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
    '@typescript-eslint/no-use-before-define': 'off', // 禁止在变量定义之前使用它们
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
    '@typescript-eslint/no-non-null-assertion': 'off', // 不允许使用后缀运算符的非空断言(!)
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和类的公共类方法的显式返回和参数类型

    // react (https://github.com/jsx-eslint/eslint-plugin-react)
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
  },
  env: {
    es6: true, // enable ES2015 features.
    browser: true, // enable use of global browser variables like `windows`.
    node: true, // enable use of global node variables like `process`.
  },
  parser: '@typescript-eslint/parser', // Allows Eslint to understand TypeScript syntax.
  parserOptions: {
    ecmaVersion: 2021, // ECMAScript version supported in the project.
    sourceType: 'module', // set to `module` because we ue ECMAScript modules.
    ecmaFeatures: {
      jsx: true, // enable jsx for React.
    },
  },
  settings: {
    react: {
      version: 'detect', // auto-detect React version from package.json.
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'], // use typescript-eslint parser for .ts|tsx files.
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
      },
    },
  },
}
