const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new MiniCssExtractPlugin({
          ignoreOrder: true,
        }),
      ],
    },
  },
};
