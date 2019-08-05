<template>
    <div>
        <h3>Account Vue</h3>

        <!-- 子组件 -->
        <router-link to="/account/login">登陆</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "account"
    }
</script>

<style scoped>

</style>