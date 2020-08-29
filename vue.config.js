// vue.config.js
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
                target: 'http://122.51.133.191:8080',
                changeOrigin: true
            }
        }
    }
  }