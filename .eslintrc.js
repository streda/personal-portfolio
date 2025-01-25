module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['react', '@typescript-eslint', 'prettier'], // Includes the necessary plugins
  extends: [
    'plugin:react/recommended', // React-specific linting rules
    'plugin:@typescript-eslint/recommended', // TypeScript-specific linting rules
    'plugin:prettier/recommended' // Integrates Prettier with ESLint
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for parsing modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Enables JSX parsing
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detects the React version
    }
  },
  rules: {
    // Prettier formatting rules (configured to avoid conflicts)
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // Use single quotes
        semi: true, // Require semicolons
        trailingComma: 'none', // No trailing commas
        printWidth: 80, // Line width for formatting
        tabWidth: 2, // Number of spaces per tab
        endOfLine: 'auto' // Handles line ending differences
      }
    ],
    // Example custom rules (adjust based on your preferences)
    'react/react-in-jsx-scope': 'off', // Disable for React 17+ (JSX transform)
    '@typescript-eslint/no-unused-vars': 'warn', // Warn for unused variables
    'no-console': 'warn', // Warn when console statements are used
    'react/prop-types': 'off', // Disable prop-types check since you're using TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off' // Optional: Disable enforcing return types on functions
  }
};