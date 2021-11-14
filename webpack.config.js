const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require("path");

module.exports = (env) => {
  console.log('NODE_ENV: ', env.NODE_ENV);
  return {
    context: __dirname,
    entry: './src/index.tsx',
    output: {
      path: path.resolve( __dirname, 'build/', env.NODE_ENV ),
      filename: 'main.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [ {
            loader: "html-loader"
          }]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpg|svg|gif|docx)$/,
          use: 'file-loader'
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      }),
      new Dotenv({
        path: `.env.${env.NODE_ENV}`
      }),
      new CopyPlugin([
        { from: 'public' }
      ]),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, "src"),
        Components: path.resolve(__dirname, "src/components/"),
        Styles: path.resolve(__dirname, "src/styles/"),
        Images: path.resolve(__dirname, "src/images"),
        Lib: path.resolve(__dirname, "src/lib"),
        Models: path.resolve(__dirname, "src/models/"),
        Routes: path.resolve(__dirname, "src/routes/"),
        Services: path.resolve(__dirname, "src/services/"),
        UI: path.resolve(__dirname, "src/ui"),
        Views: path.resolve(__dirname, "src/views/"),
        Hooks: path.resolve(__dirname, "src/hooks/")
      }
    },
    devtool: 'source-map',
    node: {
      fs: 'empty'
    }
  };
}
