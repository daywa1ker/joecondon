const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/common.scss')
      ]
    }
  },
  devServer: {
    open: true
  }
}
