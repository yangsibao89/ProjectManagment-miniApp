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
    // 强制使用一致的缩进
    indent: [
      'error', 2
    ],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [
      'error', 'single'
    ],
    // 强制使用一致的换行风格
    'linebreak-style': [
      'error', 'unix'
    ],
    // 要求或禁止使用分号代替 ASI ["always","never"]
    semi: [
      'error', 'always'
    ],
    // 禁止调用console对象方法,一般在生产环境中使用
    'no-console': [
      'off', {
        allow:
        ['log', 'warn', 'error', 'info']
      }
    ]

  }
};
