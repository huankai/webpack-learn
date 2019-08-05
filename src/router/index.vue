<template>
    <div>
        <hr>
        <h1>七、Vue Router</h1>
        <!-- 定义router 规则-->
        <router-link to="/account">Account</router-link>
        <router-link to="/rolelist">Role List</router-link>
        <!-- 定义router view-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>


<!--
    lang: 指定 样式语法
    scoped: 如果不配置，则该样式会对所有的生效，一般需要设置为 scoped
-->
<style lang="css" scoped>

</style>