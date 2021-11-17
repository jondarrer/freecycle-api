module.exports = {
  parser: "babel-eslint",
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-unused-vars": ["warn"],
    "no-console": 0
  }
};
