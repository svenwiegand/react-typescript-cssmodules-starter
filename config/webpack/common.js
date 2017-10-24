// shared config (dev and prod)
const {resolve} = require('path');
const {CheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader');
const cssnext = require('postcss-cssnext');
const webpack = require('webpack');

function isExternalModule(module) {
    const context = module.context;

    if (typeof context !== 'string') {
        return false;
    } else {
        return context.indexOf('node_modules') !== -1;
    }
}

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
        new TsConfigPathsPlugin({
            configFilePath: resolve(__dirname, '../../tsconfig.json')
        })
    ]
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'typed-css-modules-loader',
        query: {
          noEmit: true,
          camelCase: true,
          outDir: 'generated'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
              loader: 'css-loader',
              query: {
                importLoaders: 1,
                modules: true,
                namedExport: true,
                camelCase: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-import'),
                cssnext({
                  browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
                require('postcss-flexbugs-fixes')
              ]
            }
          }
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        minChunks: isExternalModule
    }),
      new webpack.WatchIgnorePlugin([
          /css\.d\.ts$/
      ])
  ],
  performance: {
    hints: false,
  },
};
