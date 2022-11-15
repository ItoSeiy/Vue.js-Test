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
Vue.createApp(Counter).mount("#counter");

const AttributeBindid = {
    data() {
        return {
            message: "あなたの地域の時間は" + new Date().toLocaleString(),
        };
    },
};
Vue.createApp(AttributeBindid).mount("#attribute-bindid");

const EventHandling = {
    data(){
        return {
            message: "Hello Vue.js",
        };
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split("").reverse().join("");
        }
    }
}
Vue.createApp(EventHandling).mount("#event-handling");

const TwoWayBinding = {
    data(){
        return {
            message: "hello Vue!",
        };
    }
}
Vue.createApp(TwoWayBinding).mount("#two-way-binding");

const ConditionalRendering = {
    data() {
        return {
            isShow: true,
        };
    },
    methods: {
        change() {
            this.isShow = !this.isShow;
        }
    }
}
Vue.createApp(ConditionalRendering).mount("#conditional-rendering");