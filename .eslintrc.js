module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parser: "@babel/eslint-parser",

  parserOptions: {
    ecmaFeatures: { "jsx": true },
    ecmaVersion: "latest",
    sourceType: "module"
  },

  plugins: ["react", "react-hooks"],
  settings: { "react": { "version": "detect" } },

  rules: {
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    // "no-unused-expressions": ["warn"], // if you are trying to find unsused espressions uncomment this line
    "no-unused-vars": "warn",
    quotes: ["warn", "double"],
    semi: ["error", "always"],
    indent: ["error", 2]
  }
}
