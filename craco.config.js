const { whenProd } = require("@craco/craco");

module.exports = {
  webpack: {
    plugins: {
      add: [
        ...whenProd(() => [
          new require('mini-css-extract-plugin')({
            ignoreOrder: true,
          })
        ], []),
      ],
    },
  },
};
