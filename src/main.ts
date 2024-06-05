import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { initSentry } from "./utils/sentryUtils";

const app = createApp(App);

app.use(createPinia());
app.use(router);

initSentry(app);

app.mount("#app");

export default app;
