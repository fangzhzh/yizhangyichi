const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('publish'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader'}
                
            }, { 
                test: /\.jsx$/, 
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract([{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }
                ])
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: 'index.template.html',
            filename: 'index.html', //relative to root of the application
            inject: "body"
        }),
        new ExtractTextPlugin('styles.css')
    ]
}