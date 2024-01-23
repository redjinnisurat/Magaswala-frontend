import { createApp } from "vue";
import App from "./App.vue";
import Router from "./Router.js";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import VueSweetalert2 from "vue-sweetalert2";

const app = createApp(App);

app.use(store);
app.use(Router);
app.use(VueSweetalert2);
app.mount("#app");
