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

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        exclude,
        include,
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Evaluated from right to left ex: styleLoader(cssLoader(input))
      },
    ],
  },
});
