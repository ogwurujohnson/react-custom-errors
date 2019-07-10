var path = require('path');

module.exports = {
  //   mode: "production",
  //   entry: "./src/BoilerplateComponent.jsx",
  //   output: {
  //     path: path.resolve("lib"),
  //     filename: "BoilerplateComponent.js",
  //     libraryTarget: "commonjs2"
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.jsx?$/,
  //         exclude: /(node_modules)/,
  //         use: "babel-loader"
  //       }
  //     ]
  //   }

  mode: "development",
  entry: path.resolve(__dirname, "./src/BoilerplateComponent.jsx"),
  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".less"]
  },
  plugins: [
    // new BundleAnalyzer()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      }
    ]
  }
};