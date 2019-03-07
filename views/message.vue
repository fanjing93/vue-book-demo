<template>
    <div>
        {{ message }}
        <button @click="handleChange">change word</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                message: 'hello world'
            }
        },
        methods: {
            handleChange(){
                this.message = 'hello vue!'
            }
        }
    }
</script>