const path = require('path')
module.exports = {
  // 根路径
  publicPath: '/',

  // 构建输出目录，执行：npm run build后项目打包在dist文件下
  outputDir: 'dist',

  // 静态资源目录（js,css,img,fonts）
  assetsDir: 'assets',

  chainWebpack: (config) => {
    // 别名, .set(key, value)
    config.resolve.alias
      .set('components', '@/components')
      .set('assets', '@/assets')
      .set('views', '@/views')
  },

  devServer: {
    open: true, // 浏览器自动打开页面
    host: 'localhost', // 域名
    port: 8080,
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/style/var.less')],
    },
  },
}
