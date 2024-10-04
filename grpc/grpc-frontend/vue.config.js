const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
        .rule('typescript')
        .test(/\.ts$/)
        .use('ts-loader')
        .loader('ts-loader')
        .end()
  }
})

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
        .rule('babel')
        .test(/\.(js|ts)$/)
        .use('babel-loader')
        .loader('babel-loader')
        .end()
  }
})