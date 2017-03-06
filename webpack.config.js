var whous = require('./whous');

var webpack = require('webpack');

module.exports = {
    //页面入口文件的配置
    entry: whous(__dirname + '/src/pages'),
    //入口文件输出配置
    output: {
        path: 'dist/',
        publicPath: './dist_public/',
        filename: '[name].js'
    },
    //其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            commonCss: __dirname + '/src/common/css',
            commonJs: __dirname + '/src/common/js',
            imagesDir: __dirname + '/images'
        },
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ["es2015"]
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader?sourceMap'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?name=images/[name].[ext],limit=51200'
        }]
    },
    sync() {
        var ret = {};
        for (var k in this) {
            if (k == 'sync') continue;

            if (typeof k == 'function') {
                ret[k] = this[k]();
            } else {
                ret[k] = this[k];
            }
        }

        return ret;
    }
};