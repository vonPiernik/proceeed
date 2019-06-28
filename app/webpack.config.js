var path = require('path');
const webpack = require('webpack'); 

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../web/js/'),
        filename: 'app.js'
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
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            Redux: 'react-redux'
        })
    ]
};
