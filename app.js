const COUNTER = {
    data(){
        return {
            counter: 0,
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++;
        }, 1000);
    }
}

Vue.createApp(COUNTER).mount("#counter");