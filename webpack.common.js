const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV === "PRODUCTION";

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[chunkhash].js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        port: 9000,
        hot: true
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.hbs$/,
                use: ["handlebars-loader"]
            },
            {
                test: /\.(png|jpg|jpe?g|gif)$/i,
                use: [
                    {
                      loader: "file-loader",
                      options: {
                        //name: "[contenthash].[ext]",
                        name() {
                            return isProduction ? "[contenthash].[ext]" : "[name].[ext]";
                        },
                        publicPath: "image",
                        outputPath: "image"
                      },
                    },
                ]
            },
            {
                test: /\.(svg)$/i,
                use: [
                    {
                      loader: "url-loader",
                      options: {
                          limit: 8192
                      },
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[hash].css"
        }),
        new HtmlWebpackPlugin({
            title: "webpack",
            template: "template.hbs",
            meta: {
                viewport: "width=device-width, initial-scale=1.0",
            },
            minify: isProduction ? {
                collapseInlineTagWhitespace: true,
                useShortDoctype: true,
                removeScriptTypeAttributes: true,
                removeComments: true,
            } : {
                removeComments: true,
            }
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            IS_PRODUCTION: isProduction
        })
    ]
}