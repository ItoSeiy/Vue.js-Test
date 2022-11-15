const Counter = {
    data() {
        return {
            counter: 0,
        };
    },
    mounted() {
    setInterval(() => {
        this.counter++;
        }, 1000);
    },
};

const AttributeBindid = {
    data() {
        return {
            message: "あなたの地域の時間は" + new Date().toLocaleString(),
        };
    },
};

Vue.createApp(Counter).mount("#counter");
Vue.createApp(AttributeBindid).mount("#attribute-bindid");