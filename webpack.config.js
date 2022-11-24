const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output : {
    path: path.resolve(__dirname, 'docs'),
    filename : 'appbundle.js',
    clean : true
  },
  module : {
    rules : [
      {
        test : /\.(js|jsx|json)$/,
        exclude : /node_modules/,
        use : {
          loader : 'babel-loader',
        }
      },
      {
        test : /\.css/,
        exclude: /node_modules/,
        use : ['style-loader', 'css-loader']
      },
      {
        test : /\.(png|ico|svg|jpg)$/i,
        exclude : /node_modules/,
        use : {
          loader : 'file-loader',
          options : '[name].[ext]'
        }
      }
    ]
  },
  plugins : [new HtmlWebpackPlugin({template : path.resolve(__dirname, "public", "index.html"), favicon : "./public/favicon.ico"})]
}