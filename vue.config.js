const fs = require('fs');
const webpack = require('webpack');
let commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString();


module.exports = {
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    headers: { "Access-Control-Allow-Origin": "*" },
    // historyApiFallback: true
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' }
      ]
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        HASH: JSON.stringify(commitHash),
      })
    ]
  }
}