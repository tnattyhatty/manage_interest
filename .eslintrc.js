module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
    NodeJS: true,
  },

  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-nested-ternary': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-extra-boolean-cast': 'off',
    'no-unused-variable': 0,
    'no-else-return': 0,
    allowElseIf: 0,
    argsIgnorePattern: 'off',
    varsIgnorePattern: 'off',
    camelcase: 'off',
    'consistent-return': 0,
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'no-plusplus': 0,
    'no-unused-vars': 'off',
    'arrow-body-style': 0,
    'no-lonely-if': 0,

    // Import Validation
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx'],
      },
    ],
    'import/no-useless-path-segments': 0,
    'import/newline-after-import': 0,
    'import/no-anonymous-default-export': 0,

    // JSX HTML validation
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,

    // React
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-fragments': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 0,
    'react/destructuring-assignment': 0,
    'react/no-unstable-nested-components': 0,
    'react/no-unused-prop-types': 1,
    'react/self-closing-comp': 0,
    'react-hooks/exhaustive-deps': 1,

    // TypeScript
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['warn'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': [
      'off',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // Note: you must disable the base rule as it can report incorrect errors

    // Class
    'lines-between-class-members': 0,
    'class-methods-use-this': 0,
    'no-bitwise': 0,
    'no-underscore-dangle': 0,
    'no-empty': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
      extensions: ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
  },
};
