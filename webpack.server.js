const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ReactLoadablePlugin =  require('react-loadable/webpack').ReactLoadablePlugin;

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  node: {
    __filename: true,
    __dirname: true
  },

  output: {
    path: path.join(__dirname, '/server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: '[name].[contenthash:8].[ext]',
            useRelativePath: true,
            publicPath: '/static/media'
          }
        }],
      }
    ]
  },
  // plugins: [
  //   new ReactLoadablePlugin({
  //     filename: './build/react-loadable.json',
  //   })
  // ],
};