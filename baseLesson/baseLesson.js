// マスタッシュ 構文
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

// v-text ディレクティブ
const AttributeBindid = {
    data() {
        return {
            message: "あなたの地域の時間は" + new Date().toLocaleString(),
        };
    },
};
Vue.createApp(AttributeBindid).mount("#attribute-bindid");

// v-on:click ディレクティブ
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

// v-on:click ディレクティブ
const TwoWayBinding = {
    data(){
        return {
            message: "hello Vue!",
        };
    }
}
Vue.createApp(TwoWayBinding).mount("#two-way-binding");

// v-if ディレクティブ
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

const ListRendering = {
    data() {
        return {
            todos: [
                { id: 1, text: "HTMLを学ぶ"},
                { id: 2, text: "CSSを学ぶ"},
                { id: 3, text: "JSを学ぶ"},
                { id: 4, text: "Vueを学ぶ"}
            ]
        };
    }
}
Vue.createApp(ListRendering).mount("#list-rendering");