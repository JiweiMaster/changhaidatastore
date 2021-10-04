module.exports = {
  // devServer: {
  //   proxy: 'http://duolingo.cmitnb.top:8003'
  // },
  devServer: {
    open: false,
    // 跨域
    proxy: {
      '/': {
        target: 'http://duolingo.cmitnb.top:8003/',
        changeOrigin: true
      }
    }
  }

    // devServer: {
    //     proxyTable: {
    //         '/api':{            //这里的key就是axios的baseURL
    //             target: 'http://duolingo.cmitnb.top',    //访问域名
    //             changeOrigin: true,            //开启跨域
    //             pathRewrite:{  // 路径重写，
    //                 '^/api': 'api/index.php'  // 替换target中的请求地址
    //             }
    //         }
    //     }
    // }
}