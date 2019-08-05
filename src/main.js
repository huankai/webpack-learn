import $ from 'jquery'

$(function () {
    $("li:odd").css('background-color', "red");
    $("li:even").css("background-color", function () {
        return '#' + "D97634"
    });
});

/*
    一、该文件 为项目入口文件



    二、导入非 js 类型的文件：

    如果导入css 文件，只需要使用 import css 文件路径即可
    1、需要安装 style-loader 与 css-loader ; npm i style-loader css-loader -D
    2、在 webpack.config.js 中添加 module/rules 属性.

    3、默认情况下，webpack 无法处理 css 中引用的 图片 或字体，如果样式 中使用了 css 或字段 ，还需要引用 url-loader 或 file-loader
        npm i url-loader -D

  */
import "./css/index.css"

/*
    三，导入 less 文件，与导入 css 文件类似
 */
import "./css/test.less"

/*
    四、导入 bootstrap 字体样式
 */
import "bootstrap/dist/css/bootstrap.min.css"


/**
 五、es 6 新语法，class 声明 类，与 java 类似
 */
class Person {

    // 声明静态变量，与java 类似，可以直接使用类名.静态变量名来调用
    static info = {

        name: "name",
        age: 10
    }

}

console.log(Person.info);
/*
 * 上面 直接 打印 ES 6 使用 class 声明 的  Person.info ，默认 webpack 是不能识别的，
 *  需要使用  Babel loader 将 ES 6以上的高级语法转换为 webpack 能识别的语法
 *
 * 5.1、在 webpack 3以前的版本(使用 babel7.x)中使用如下方式:
 *
 *  5.1.1、在 webpack 中，需要运行以下两套命令安装两套包，来完成 Babel loader 的功能
 *          npm i babel/core babel-loader babel-plugin-transform-runtime -D
 *          npm i babel-preset-env babel-preset-stage-0 -D
 *  5.1.2、 在 webpack.config.js 文件中 的 modules/rules 数组中，添加新的匹配规则：
 *          {test:/\.js$/ , use: "babel-loader" ,exclude: "/node_modules/"}
 *          上面必须要把 node_modules 目录通过 exclude 排除掉，原因有：
 *              a、如果不排除，则 Babel loader 会将所有第三方的 JS 文件都打包编译，会消耗CPU,速度非常慢
 *              b、即使 Babel 将 node_modules 中的第三方JS库都编译了，项目也可能无法运行
 *  5.1.3、 在项目根目录下，新建 .babelrc 文件，这个配置文件属于JSON格式，必须符合JSON 语法规范，如不能写注释。
 *      .babelrc 内容如下：
 *          {
 *              //指定语法，上面安装了 babel-preset-env babel-preset-stage-0 ，则语法以  babel-preset- 后面的命名
 *              "presets":["env","stage-0"],
 *              // 插件 ,上面安装了 babel-plugins-transform-runtime ，则插件名以  abel-plugins- 后面的命名
 *              "plugins":["transform-runtime"]
 *          }
 *
 *  5.2、在 wepack 4 版本(使用 babel8.x)中，使用如下方式：
 *      @see https://www.cnblogs.com/ldq678/p/10448374.html
 *
 *  5.2.1、安装相关包
 *      npm i babel-loader '@babel/core' -D
 *      npm i '@babel/plugin-proposal-class-properties' '@babel/plugin-transform-runtime' '@babel/preset-env' '@babel/runtime' -D
 *  5.2.2、在 webpack.config.js 文件中 的 modules/rules 数组中，添加新的匹配规则：
 *          {
 *               test: /\.js$/,
 *               exclude: "/node_modules/",
 *               use: {
 *                   loader: "babel-loader"
 *               }
 *
 *           }
 *
 *  5.2.3、 在项目根目录下，新建 .babelrc 文件，内容如下：
 *      {
 *          "presets": [
 *              "@babel/preset-env"
 *          ],
 *          "plugins": [
 *              "@babel/plugin-transform-runtime",
 *              "@babel/plugin-proposal-class-properties"
 *          ]
 *      }
 *
 *
 */


/*
*
* 六、webpack 使用 vue
*   6.1、先安装 vue
*       npm i vue -S ,相当于 npm i vue --save
*   6.2、使用vue
*        如下声明了 message 变量，在 index.html 中获取 message 值，
*           默认情况下，运行的时候会报错,查看浏览器控制台错误信息如下: You are using the runtime-only ...
*           表示：vue  使用的是runtime 环境，查看 node_modules/vue/package.json 中的 main 属性可知
*               vue 引用的  dist/vue.runtime.common.js  这个文件只是 vue 运行库，有些功能不全，
*               解决方式如下：
*                   a、 import Vue from "./node_modules/vue/dist/vue.js" 不推荐
*                   b、 在 webpack.config.js 配置 resolve 属性：
*                       resolve: {
*                            alias: {
*                            "vue$": "vue/dist/vue.js"
*                            }
*                        }
*
*
* */

import Vue from "vue"

new Vue({
    el: "#app",
    data: {
        message: "webpack vue"
    }
});


/*
    6.3、 Vue (export default) 与 (export)  使用
    导入 test.js ，以变量名 aaa 接收 test.js 模块中 使用 export default 导出的对象， aaa 这个变量名可以自定义
    {title ,age } 是 test.js 中导出的其它对象或属性，名称必须与 test.js 中的 export 导出的名称相同，
        如果你要定义不同，可以使用 as 别名来接受导出的对象或属性。
 */
import aaa, {title, age as haha} from "./test.js"

console.log(aaa);
console.log(title);
console.log(haha);


/*
    6.4、webpack 导入 .vue 类型的文件

      先安装 vue 编译 loader ： npm i vue-loader vue-template-compiler -D

       webpack 无法识别 .vue 结尾的 文件导入 ，需要在 webpack.config.js 中的 module/rules 添加如下
       {
            test: /\.vue$/,
            use: "vue-loader"
        }
       还需要在 webpack.config.js 中添加 const VueLoaderPlugin = require("vue-loader/lib/plugin");
       并在 plugins 中创建 实例  new VueLoaderPlugin()

 */
import login from "./login.vue"

new Vue({
    el: "#app2",

    // render: function (createElements) {
    //     return createElements(login); // render 是一个函数，函数中的参数也是一个函数，可以直接调用
    // }
    //如下，也可以使用箭头函数简写，render 函数会将 el 所在标签中的所有元素替换
    render: createElements => createElements(login)
});


/*
    七、webpack 中使用 vue-router
        7.1 npm i vue-router -S
        7.2、 导入路由：import VueRouter from "vue-router"
        7.3、 使用路由：Vue.use(VueRouter)
        7.4、定义 router 规则:
            创建  router 文件夹，并在该文件夹中创建 index.vue account.vue ,roleList.vue 三个文件
            并在此文件中写入 router 规则如下:
            const router = new VueRouter({
                routes: [
                    {path: "/account", component: account}, // 以 /account 匹配的使用 account
                    {path: "/rolelist", component: roleList}
                ]
            });
         7.5、vue 与 router 绑定:
            在 new Vue 实例的时候，指定  router: router ，当参数名与值相同时，可以简写为 router
          ---------------------------------

          7.6、子组件:
            在 account 中添加子组件:
                7.6.1、 在 router 中创建 accountLogin.vue 与 accountRegister.vue 两个文件
                7.6.2、 在 account.vue 添加如下内容:
                    <!-- 子组件 -->
                    <router-link to="/account/login">登陆</router-link>
                    <router-link to="/account/register">注册</router-link>
                    <router-view></router-view>
                7.6.3、导入子组件：
                        import accountLogin from "./router/accountLogin.vue"
                        import accountRegister from "./router/accountRegister.vue"
                7.6.4、子组件绑定:
                    children: [
                        {
                            path: "/account/login",
                            component: accountLogin,
                        },
                        {
                            path: "/account/register",
                            component: accountRegister,
                        }
                    ]

 */


import index from "./router/index.vue"


// 将 router 抽离出去
import router from "./router.js"

new Vue({
    el: "#app3",
    render: createElements => createElements(index),
    router

});





