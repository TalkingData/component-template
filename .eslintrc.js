module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      //   "off",
      {
        singleQuote: true
      }
    ],
    //eqeqeq: 2, //必须使用全等
    "id-match": 0, //命名检测
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": false
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
