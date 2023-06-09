module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        semi: [2, "always"],
        "react/display-name": "off",
        "space-before-function-paren": [
            "error",
            {
                anonymous: "ignore",
                named: "ignore",
                asyncArrow: "ignore"
            }
        ],
        "multiline-ternary": ["off"],
        // Использование двойных кавычек
        quotes: [
            "error",
            "double",
            { allowTemplateLiterals: true, avoidEscape: true }
        ]
    }
};
