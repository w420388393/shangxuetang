const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //开启代理服务器(方式一)
  /* devServer:{
    proxy:'http://localhost:5000'
  }, */
   //开启代理服务器(方式二)
   devServer: {
    proxy: {
      '/hehe': {
        target: 'http://localhost:5000',
        pathRewrite:{"^/hehe":""},
        //ws: true,
        //changeOrigin: true
      },
      
    }
  }
})
