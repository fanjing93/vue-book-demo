const install = function (Vue) {
    Vue.prototype.$bus = new Vue({
        methods: {
            emit(event, ...arg) {
                this.$emit(event, ...arg);
            },
            on(event, callback) {
                this.$on(event, callback);
            },
            off(event, callback) {
                this.$off(event, callback);
            }
        }
    });
};
export default install;