<template>
    <!-- 只能有一个根元素-->
    <div>
        <hr>
        webpack 引入 .vue 文件 : Login.vue {{msg}}
        <button @click="show">点击我</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                "msg": "123456"
            }
        },
        methods: {
            show() {
                alert("调用 了 show 方法...")
            }
        }
    }
</script>

<style scoped>

</style>