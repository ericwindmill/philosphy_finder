const path = require('path')

module.exports = {
  entry: './lib/getting-to-philosophy.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
