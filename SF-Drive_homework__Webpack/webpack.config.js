const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/main.js'
    },
    module: {
        rules: [{
           test:/\.s[ac]ss$/i,
           use: [
              miniCss.loader,
              'css-loader',
              'sass-loader',
           ]
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader'
          },
        ]
     },
     plugins: [
        new miniCss({
           filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            filename: 'About.html',
            template: './About.html'
        }),
        new HtmlWebpackPlugin({
                filename: 'FAQ.html',
                template: './FAQ.html'
        })
     ]
}