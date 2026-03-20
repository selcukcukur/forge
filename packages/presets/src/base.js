import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import turboPlugin from "eslint-plugin-turbo"
import tseslint from "typescript-eslint"
import onlyWarn from "eslint-plugin-only-warn"

/**
 * Shared ESLint configuration used across multiple repositories.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  // Core JavaScript linting rules from ESLint
  js.configs.recommended,

  // Disables ESLint rules that conflict with Prettier formatting
  eslintConfigPrettier,

  // Recommended rules for TypeScript projects
  ...tseslint.configs.recommended,

  {
    // Turbo plugin configuration
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      // Warn when environment variables are used without being declared
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    // Plugin that converts all rule errors to warnings
    plugins: { onlyWarn },
  },
  {
    // Ignore linting for compiled output files
    ignores: ["dist/**"],
  },
]
