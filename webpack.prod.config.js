var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: false,
    entry: [
        './app/index'
    ],
    output: {
        path: path.join(__dirname, './static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false,
                drop_console: true,
                pure_funcs: ['console.log']
            },
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') },
            DEV: false,
            PROD: true,
            TEST: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.less$/,
                include: /node_modules\/antd/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: false } },
                    'less-loader'
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules\/antd/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true } },
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    }
}

