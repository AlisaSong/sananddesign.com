const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (options) => ({
    entry: options.entry,
    output: Object.assign({
        path: path.resolve(process.cwd(), 'build'),
        publicPath: '/portfolio-sananddesign/',
    }, options.output),
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: options.babelQuery,
        }, {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: ['style-loader', 'css-loader'],
        }, {
            test: /\.css$/,
            include: /node_modules/,
            loaders: ['style-loader', 'css-loader'],
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader',
        }, {
            loader: 'url-loader',
            options: {
                limit: 8192
            },
            test: /\.(png|gif|jpg|cur)$/i
        }, {
            test: /\.html$/,
            loader: 'html-loader',
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }, {
            test: /\.(mp4|webm)$/,
            loader: 'url-loader?limit=10000',
        }],
    },
    plugins: options.plugins.concat([
        new webpack.NamedModulesPlugin(),
        new CopyWebpackPlugin([{ from: './client/static/favicon.ico', to: 'favicon.ico' }])
    ]),

    node: {
        fs: 'empty',
        path: 'empty',
        net: 'empty',
        fsevents: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },

    resolve: Object.assign({
        modules: ['app', 'node_modules'],
        extensions: ['.ts', '.tsx', '.js'],
        mainFields: [
            'browser',
            'jsnext:main',
            'main',
        ],
    }, options.resolve),

    devtool: options.devtool,

    target: 'web',
});
