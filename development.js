import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

const jsSrc = path.resolve(__dirname, 'src' , 'js')
const jsDist = path.resolve(__dirname, 'dist', 'js')


export default {
  mode: 'development',
  entry: jsSrc + '/App.js',

  output: {
    path: jsDist,
    // output のファイル名はabsolutely pathだから上のpathで指定をしておく
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /(\.css|\.scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
        }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('style.css'),
  ]
}
