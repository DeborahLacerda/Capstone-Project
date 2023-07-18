import "./assets/main.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import store from "./store";
import router from "./router";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(store).use(Antd).use(router).mount("#app");
