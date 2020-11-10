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
                removeScriptTypeAttributes: true
            } : false
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            IS_PRODUCTION: isProduction
        })
    ]
}