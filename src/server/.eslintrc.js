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
    "node/no-unsupported-features/es-syntax": 0
  },
};
