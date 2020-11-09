const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[chunkhash].js"
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
            }
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        runtimeChunk: {
            name: "runtime"
        },
        splitChunks: {
            cacheGroups: {
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "venders",
                    chunks: "all"
                }
            }
        }
    }
}