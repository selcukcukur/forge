import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import tseslint from "typescript-eslint"
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginReact from "eslint-plugin-react"
import globals from "globals"
import { config as baseConfig } from "./base.js"

/**
 * Shared ESLint configuration for React-based libraries and applications.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  // Inherit shared base configuration
  ...baseConfig,

  // Core JavaScript linting rules from ESLint
  js.configs.recommended,

  // Disables ESLint rules that conflict with Prettier formatting
  eslintConfigPrettier,

  // Recommended rules for TypeScript projects
  ...tseslint.configs.recommended,

  // Recommended rules for React projects using the flat config API
  pluginReact.configs.flat.recommended,

  {
    // Extend language options to include browser and service worker globals
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: { ...globals.serviceworker, ...globals.browser },
    },
  },
  {
    // React Hooks plugin configuration
    plugins   : { "react-hooks": pluginReactHooks },
    settings  : {
      // Automatically detect the installed React version
      react: { version: "detect" },
    },
    rules     : {
      // Include recommended rules for React Hooks
      ...pluginReactHooks.configs.recommended.rules,

      // Disable rule requiring React to be in scope for JSX
      // Not needed with the new JSX transform (React 17+)
      "react/react-in-jsx-scope": "off",
    },
  },
]
