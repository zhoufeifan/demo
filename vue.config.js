module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '/demo/dist/': '/',
  devServer: {
    disableHostCheck: true,
  }
}