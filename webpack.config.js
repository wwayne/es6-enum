const path = require('path')
const webpack = require('webpack')
const PrettierPlugin = require('prettier-webpack-plugin')
const readPackageJson = require('./scripts/read-package-json')

const {
  version,
  name,
  license,
  repository,
  author
} = readPackageJson('version', 'name', 'license', 'repository', 'author')

const banner = `
  ${name} v${version}
  ${repository.url}
  Copyright (c) ${author.replace(/ *<[^)]*> */g, ' ')}
  This source code is licensed under the ${license} license found in the
  LICENSE file in the root directory of this source tree.
`

module.exports = {
  mode: 'production',
  entry: './build/enum.js',
  output: {
    filename: 'enum.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Enum',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new PrettierPlugin(),
    new webpack.BannerPlugin(banner)
  ]
}
