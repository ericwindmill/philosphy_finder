const path = require('path')

module.exports = {
  entry: './lib/gettingToPhilosophy.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
