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
}