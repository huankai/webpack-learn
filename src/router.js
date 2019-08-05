import Vue from "vue"
import VueRouter from "vue-router"

import account from "./router/account.vue"
import roleList from "./router/rolelist.vue"

Vue.use(VueRouter);

import accountLogin from "./router/accountLogin.vue"
import accountRegister from "./router/accountRegister.vue"

const router = new VueRouter({
    routes: [
        {
            path: "/account",
            component: account,
            children: [ // 子组件
                {
                    path: "/account/login",
                    component: accountLogin,
                },
                {
                    path: "/account/register",
                    component: accountRegister,
                }
            ]
        },
        {
            path: "/rolelist",
            component: roleList
        }
    ]
});

// 暴露 router
export default router