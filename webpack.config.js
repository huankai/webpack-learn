const path = require("path");
const webpack = require("webpack"); //启用热更新 第二步

const VueLoaderPlugin = require("vue-loader/lib/plugin");
/*
    此文件为 webpack 配置文件
 */
module.exports = {
    /*
        entry:指定入口，要使用 webpack 把包哪个文件
     */
    entry: path.resolve(__dirname, "./src/main.js"),
    /*
        指定输出的相关参数
            path: 指定输出目录
            filename: 指定输出文件名，注意， 此文件 并未生成，而保存在内存中。
     */
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    devServer: {
        open: true, // 自动打开浏览器
        port: 3000, // 指定端口
        contentBase: 'src', //指定托管的根目录
        hot: true //启用热更新 第一步
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(), //启用热更新还需要 new 热更新模块，第三步
        new VueLoaderPlugin()  // 创建 VueLoaderPlugin 实例
    ],
    module: { //此节点用于加载第三方模块，webpack 默认只能处理 js 类型的文件
        rules: [
            /*
                指定以 css 结尾的使用 style-loader 与 css-loader，test ：正则表达式
                @see https://www.webpackjs.com/concepts/#loader
                webpack 在调用  loader时，是从后往前调用的，
                如下配置中，在遇到以 css 结尾的文件时，会使用  css-loader ---> style-loader ----> webpack
              */
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            /*
                    limit : 限制当文件小于指定大小时，转换为 base64,超出指定大小则不转换。单位 byte
                    name: webpacke 默认会为这些文件生成唯一的新文件名，如果你不想使用新生成的文件名而想使用原来的文件名，
                        可以使用  name 参数，格式为 "[name].[ext]"
                        如果在不同目录下存在相同文件名时，webpack 后者会覆盖前者，而有两个不同的样式需要分别引入这两个文件时，
                        就会导致样式引用的图片出错，可以在 name 的值前加入 "[hash:8]" 前缀，这样，引用的样式文件就会以 8 个字符做为前缀
                        而不会出现错误样式引用问题

                        如在 index.html 中有两个 样式 box 与 box2
                            box 的样式 在 index.css 中的 box ，引用了 images/da.jpg 文件
                            box2 的样式 在 index.css 中的 box2 ，引用了 images2/da.jpg 文件
                           当使用 原来文件名时(name 属性设置为 "name].[ext]")，webpack 所引用 的文件 名都 为 da.jpg ,images2/da.jpg 会覆盖  images/da.jpg
                           样式就会出错，所以需要在 name 加入前缀，这样生成的文件名就会不一样，可以使用浏览器 F12 查看样式效果。

             */
            {
                test: /\.(jpg|jpeg|bmp|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 1024,
                        name: "[hash:8]-[name].[ext]"
                    }
                }]
            },
            // 图标字体
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: ["url-loader"]
            },
            // Babel loader 转换高级ES 语法
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader"
                }

            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            // 默认vue 引用 的的 vue.runtime.common.js ，这里使用 vue.js
            "vue$": "vue/dist/vue.js"
        }
    }
};