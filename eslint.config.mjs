import globals from "globals";

import reactXPlugin from "@eslint-react/eslint-plugin";
import jslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import prettierConfig from "eslint-config-prettier/flat";
import checkFilePlugin from "eslint-plugin-check-file";
import importPlugin from "eslint-plugin-import";
import reactA11yPlugin from "eslint-plugin-jsx-a11y";
import nodePlugin from "eslint-plugin-n";
import promisePlugin from "eslint-plugin-promise";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import unicornPlugin from "eslint-plugin-unicorn";
import tslint from "typescript-eslint";

export default tslint.config({
  files: ["**/*.{js,ts,jsx,tsx}"],
  languageOptions: {
    parser: tslint.parser,
    parserOptions: {
      projectService: true,
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  extends: [
    jslint.configs.recommended,
    tslint.configs.strict,
    importPlugin.flatConfigs.recommended,
    reactHooksPlugin.configs["recommended-latest"],
    reactXPlugin.configs["recommended-typescript"],
    promisePlugin.configs["flat/recommended"],
    reactA11yPlugin.flatConfigs.recommended,
    prettierConfig,
  ],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
  plugins: {
    "@next/next": nextPlugin,
    "@typescript-eslint": tslint.plugin,
    "check-file": checkFilePlugin,
    "promise": promisePlugin,
    "react": reactPlugin,
    "unicorn": unicornPlugin,
    "n": nodePlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,

    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowString: true,
        allowNumber: true,
        allowNullableString: true,
        allowNullableBoolean: true,
        allowNullableObject: true,
      },
    ],

    "n/no-process-env": ["error"],

    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-alert": "warn",
    "no-debugger": "warn",
    "no-promise-executor-return": "error",
    "no-unreachable-loop": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-implicit-coercion": "error",
    "no-invalid-this": "error",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-return-assign": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "multiline-comment-style": "off",
    "object-shorthand": "error",
    "eqeqeq": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "prefer-arrow-callback": "error",

    "promise/always-return": "warn",
    "promise/catch-or-return": "error",

    // "react/no-multi-comp": "warn",

    "import/no-unresolved": "error",
    "import/order": [
      "warn",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",

        "alphabetize": {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],

    "check-file/filename-naming-convention": [
      "error",
      {
        "src/**": "KEBAB_CASE",
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],

    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**": "NEXT_JS_APP_ROUTER_CASE",
      },
    ],
  },
});
