var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './app/index'
    ],
    output: {
        path: path.join(__dirname, "./static"),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        contentBase: '/static',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('development') },
            DEV: true,
            PROD: false,
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
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192000',
            },
            {
                test: /\.svg/,
                use: ['file-loader']
            }
        ]
    }
}

