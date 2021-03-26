module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  globals: {
    App: true,
    wx: true,
    Compoenent: true,
    Behavior: true,
    Page: true,
    getApp: true,
    getCurrentPages: true
  },
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
  }
}
