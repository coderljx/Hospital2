module.exports = {
    devServer: {
        port: 1024, // 启动端口号
        open: true  // 启动后是否自动打开网页
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'sass',
            patterns: []
        }
    },

    // 配置 debug
    configureWebpack : {
        devtool : "source-map"
    }


}