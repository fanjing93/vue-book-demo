<template>
    <div>
        <div>{{ $route.params.id }}</div>
        <router-link to="/message">跳转到message</router-link>
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log(this.$route);
        }
    }
</script>