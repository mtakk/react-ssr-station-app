const path = require("path");
//cssだけ別ファイルで出力するプラグイン
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const server = {
  //nodeで起動するのでtergetはnodeに
  target: ["node"],
  mode: "development",
  entry: "./server/serverGh.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "serverGh.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)?$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], //import時に拡張子を省く書き方をするときに必要。これがないとファイルが見当たらないという扱いになる
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "client.css",
    }),
  ],
};

const client = {
  //クライアント側で読ませるためにtargetはwebに
  target: ["web"],
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)?$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "client.css",
    }),
  ],
};

module.exports = [server, client];
