import "./assets/main.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import store from "./store";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(store).use(Antd).mount("#app");
