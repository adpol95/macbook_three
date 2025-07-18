import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      "eslint:recommended",
      "react-app",
      "plugin:react/jsx-runtime",
      "prettier"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "tsconfigRootDir": "./"
    },
    plugins: ["@typescript-eslint"],
    root: true,
    ignorePatterns: [
      ".eslintrc.cjs",
      "vite.config.ts",
      "public/**",
      "build/**",
      "dist/**"
  ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/consistent-type-imports": [
        2,
        { fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/no-restricted-imports": [
        2,
        {
          paths: [
            {
              name: "react-redux",
              importNames: ["useSelector", "useStore", "useDispatch"],
              message:
                "Please use pre-typed versions from `src/app/hooks.ts` instead.",
            },
          ],
        },
      ],
      "keyword-spacing": ["error", { after: true }],
      "eol-last": "error",
      "prefer-promise-reject-errors": "error",
      curly: "off",
      "comma-dangle": ["error", "never"],
      "comma-spacing": "error",
      "comma-style": "error",
      "quote-props": ["error", "consistent"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "space-before-blocks": ["error", "always"],
      "spaced-comment": ["error", "always"],
      "prefer-const": ["error", { destructuring: "all" }],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "switch-colon-spacing": "error",
      "no-unused-vars": "off", // Отключаем стандартное правило
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // Включаем правило для TypeScript
      "no-useless-call": "error",
      semi: ["error", "always"],
      "no-trailing-spaces": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-multiple-empty-lines": ["error", { max: 2 }],
      "no-return-await": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-loop-func": "off",
    },
  },
]);
