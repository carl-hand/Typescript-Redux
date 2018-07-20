const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    // entry point must be specified last
    './src/index.tsx',
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.LoaderOptionsPlugin({
    //   debug: true,
    //   // setting it to false means webpack will display a list of all the files that it is bundling
    //   noInfo: false,
    // }),
    // // new web pack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    hot: true,
    compress: true,
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, use: ['babel-loader', 'awesome-typescript-loader'], exclude: '/node_modules/' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};