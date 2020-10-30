module.exports = {
  env: {
    commonjs: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:node/recommended"],
  rules: {
    "node/no-unsupported-features/es-syntax": 0,
    "node/no-missing-import": "off",
    "node/no-unpublished-import": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
