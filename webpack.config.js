const HtmlWebpackPlugin = require('html-webpack-plugin');
const WatchIgnorePlugin = require('watch-ignore-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  nodeModules: path.join(__dirname, 'node_modules'),
};

const commonConfigs = {
  entry: {
    app: PATHS.app,
  },

  output: {
    path: PATHS.build,
    filename: '[name].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
  ],
};

const productionConfigs = () => merge(commonConfigs);

const developmentConfigs = () => {
  const envConfigs = {
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 8080,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
      },
    },
    plugins: [
      new WatchIgnorePlugin([
        PATHS.nodeModules,
      ]),
    ],
  };

  return merge(envConfigs, commonConfigs);
};


module.exports = (env) => {
  console.log(`Running on environment "${env}"`);

  const envConfigs = {
    development: developmentConfigs,
    production: productionConfigs,
  };

  return Object.assign({}, envConfigs[env]());
};
