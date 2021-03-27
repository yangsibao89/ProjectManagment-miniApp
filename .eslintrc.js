// yangsibao 微信小程序 .eslintrc.js

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  // 全局变量
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
    indent: [
      'error', 2
    ],
    quotes: [
      'error', 'single'
    ]
  }
}
