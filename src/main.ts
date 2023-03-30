import { createApp } from "vue";
import App from "./App.vue";

import 'amfe-flexible'

import "~/styles/index.scss";
import 'uno.css'

import "element-plus/theme-chalk/src/message.scss"

const app = createApp(App);
app.mount("#app");
