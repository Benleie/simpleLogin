// vue.config.js
const path  = require('path')
// const inlinePxtorem = require('./src/config/inline-pxtorem.js')

module.exports = {
    devServer: {
        // proxy:"http://panos.zhikuntech.com"
        // https://www.v2ex.com/api/topics/latest.json
        //http://122.51.133.191:8080
        proxy: {
            "/oauth": {
                target: 'http://panos.zhikuntech.com',  
                changeOrigin: true
                
                // pathRewrite起什么作用？
                /* pathRewrite: {
                    '^/apis': 'oauth'   
                } */
            },
            "/v2ex": {
                target: 'https://www.v2ex.com',
                changeOrigin: true
            },
            "/api": {
                target: 'http://panos.zhikuntech.com',
                changeOrigin: true
            }
        }
    },
    configureWebpack: (config) => {
        config.module.rules.push({
            // 处理jquery
            test: /\.vue$/,
            use: [{
                loader: path.resolve('./src/config/inline-pxtorem.js'),
                options: {}
            }]
        })
    },
    /*chainWebpack: config => {
        config.module
            .rule('vue')
            .use('inline-pxtorem-loader')
            .test(/\.vue$/)
            .loader(inlinePxtorem)
            .tap(options => {
                // 修改它的选项...
                return options
            })
    }*/
  }