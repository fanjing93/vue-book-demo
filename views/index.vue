<template>
    <div>
        <h1>首页</h1>
        <div>{{ count }}</div>
        <button @click="handleIncrement">+{{ num }}</button>
        <button @click="handleDecrease">-{{ num }}</button>
        <router-link to="/about">跳转到 about</router-link>
        <div>{{ list }}</div>
        <div>{{ listCount }}</div>
        <button @click="handleActionIncrement">action + 1</button>
        <button @click="handleAsyncIncrement">async + 1</button>
        <div>
            随机增加
            <Counter :number="number"></Counter>
        </div>
    </div>
</template>
<script>
    import Counter from './counter.vue';

    export default {
        components: {
            Counter
        },
        data() {
            return {
                num: 5,
                number: 0
            }
        },
        computed: {
            count() {
                return this.$store.state.count;
            },
            list() {
                return this.$store.getters.filteredList;
            },
            listCount() {
                return this.$store.getters.listCount;
            }
        },
        methods: {
            handleIncrement() {
                this.$store.commit('increment', this.num);
            },
            handleDecrease() {
                this.$store.commit('decrease', this.num);
            },
            handleActionIncrement() {
                this.$store.dispatch('increment');
            },
            handleAsyncIncrement() {
                this.$store.dispatch('asyncIncrement').then(() => {
                    console.log(this.$store.state.count);
                })
            },
            handleAddRandom(num) {
                this.number += num;
            }
        },
        created() {
            /*this.$bus.on('add',num=>{
                this.number += num;
            });*/
            this.$bus.on('add', this.handleAddRandom);
        },
        beforeDestroy() {
            this.$bus.off('add', this.handleAddRandom);
        }
    }
</script>