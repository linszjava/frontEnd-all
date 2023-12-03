const path = require('path')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        // filename: 'main.js',  // 路径在dist文件夹下
        filename:'static/js/main.js', // 路径在dist/static/js文件夹下
        // path: __dirname + '/dist'
        path: path.resolve(__dirname, 'dist'),
        clean: true, //  自动清理 /dist 文件夹
    },
    module: {
        rules: [
            {
                test: /\.css$/, //正则表达式，表示.css后缀的文件
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/, //正则表达式，表示.css后缀的文件
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,  //sass、scss
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.styl$/,
                use: ["style-loader", "css-loader", "stylus-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                },
                generator: {
                    filename: "static/img/[hash:8][ext][query]"  // 将图片都放入 dist/static/img 文件夹下，[hash:8]防缓存
                }
            },
            {
                test: /\.(ttf|woff2?|map4|map3|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: ["@babel/preset-env"],
                    //     plugins: [],
                    // }
                }
            }

        ]
    },
    plugins: [
        new ESLintWebpackPlugin({
            context: path.resolve(__dirname, 'src'),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    mode: 'development',
    devServer: {
        // contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        open: true,
        port: 9999,
        hot: true,
    }
}