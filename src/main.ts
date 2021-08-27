import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import './styles/reset.css'
import "element-plus/lib/theme-chalk/index.css";
import i18n from "./i18n";

createApp(App).use(ElementPlus).use(i18n).use(store).use(router).mount("#app");
