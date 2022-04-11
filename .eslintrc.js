module.exports = {
  root: true,
  globals: {
    NodeJS: true,
  },
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    requireConfigFile: false,
  },
  rules: {
     // 在导出的函数和类的公共类方法上需要显式的返回值和参数类型
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
        "semi": true,
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 4,
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
