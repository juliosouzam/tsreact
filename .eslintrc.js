module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "imports", "@typescript-eslint", "jsx-a11y"],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"]
      }
    ],
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off"
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {}
    }
  }
};
