module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  plugins: ["@typescript-eslint", "import", "react-hooks", "@emotion"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    curly: "error",
    // interface や jsx をうまく扱えないので off にして noUnusedLocals を tsconfig で有効化
    "no-unused-vars": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "import/no-duplicates": "error",
    "@emotion/jsx-import": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  ignorePatterns: [
    "node_modules/",
    "!.eslintrc.js",
    "!.prettierrc.js",
    // 自動生成
    "src/openapi/",
    "src/grpc",
    "tmp",
    "public/",
    "submodules/",
  ],
};
