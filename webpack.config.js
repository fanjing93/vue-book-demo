var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
        entry: {
            main: './main'
        },
        output: {
            path: path.join(__dirname, './dist'),
            publicPath: '/dist/',
            filename: 'main.js'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: "css-loader",
                                fallback: "vue-style-loader"
                            })
                        }
                    }
                },
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        //这样使用会出现url()解析路径错误的问题
                        //use : "css-loader"
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    //用于解决url()路径解析错误
                                    url: false,
                                    minimize: true,
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                    loader: 'url-loader?limit=1024'
                }
            ]
        },
        plugins: [
            // 重命名提取后的css文件
            new ExtractTextPlugin({
                filename:'[name].css',
                allChunks: true
            })
        ]
    }
;

module.exports = config;