const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html生成模版
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清楚包

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[bundle].js',
        path: path.resolve('dist')
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.(css|less)$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"], //解决文件后缀
        alias: {},
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'test',
            template: "./index.html",
        }),
    ],
}