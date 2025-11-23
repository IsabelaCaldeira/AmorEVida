import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: ["node_modules", "dist", "build"],
  },

  js.configs.recommended,

  {
    files: ["src/**/*.{js,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
    },

    rules: {
      ...react.configs.recommended.rules,

      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx"] },
      ],

      "no-unused-vars": "warn",
      quotes: ["warn", "double"],
      semi: ["error", "always"],
      indent: ["error", 2],
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
