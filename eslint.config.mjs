import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
  {
    ignores: ["dist", "docs", "example", "tutorials"],
  },
  js.configs.recommended,
  {
    files: ["test/**"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "no-console": "off",
    },
    languageOptions: {
      globals: jest.environments.globals.globals,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: "commonjs",
    },

    rules: {
      "prefer-const": "error",
      "no-var": "error",
      curly: ["error", "multi-line"],
    },
  },
  eslintPluginPrettierRecommended,
];
