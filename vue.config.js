module.exports = {
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-mazel-ui/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/../packages/scss/vars";`
      }
    }
  }
}
