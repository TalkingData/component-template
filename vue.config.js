const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    port: 8050 // 端口
  },
  lintOnSave: true, //eslint 验证,
  chainWebpack: config => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set("@", resolve("src"))
      .set("style", resolve("src/assets/style"));
  }
};
