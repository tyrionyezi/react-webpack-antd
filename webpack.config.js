const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
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
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader:'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: { javascriptEnabled: true }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"], //解决文件后缀
        alias: {}
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: "./index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        // proxy: { // proxy URLs to backend development server
        //   '/api': 'http://localhost:3000'
        // },
        // contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        // ...
      },
}