exports.lintJS = ({ include, exclude, options }) => ({
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude,
        include,
        loader: 'eslint-loader',
        options,
        test: /\.js$/,
      },
    ],
  },
});
