import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import js from "@eslint/js";

export default [
    {
        files: [
            "**/*.ts",
            "**/*.tsx"
        ],
        plugins: {
            typescriptESLinter: typescriptPlugin
        },
        processor: "@typescript-eslint/parser"
    },
    {
        files: [
            "**/*.js",
            "**/*.ts",
            "**/*.jsx",
            "**/*.tsx",
            "**/*.css",
            "**/*.scss",
            "**/*.sass"
        ],
        languageOptions: {
            ecmaVersion: 6,
        },
        linterOptions: {
            noInlineConfig: false,
            reportUnusedDisableDirectives: "warn"
        },
        plugins: {
            typescriptESLinter: typescriptPlugin,
        },
    },
    js.configs.recommended,
];