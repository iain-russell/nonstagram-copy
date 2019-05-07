import VueRouter from "vue-router";
import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import store from "./store/index";

import GalleryList from "./components/GalleryList";
import About from "./components/About";
import TempRoute from "./components/TempRoute";
import CreateUser from "./components/CreateUser";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Buefy);

require("./assets/css/style.css");
require("./assets/main.scss");

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: TempRoute },
    { path: "/galleries", component: GalleryList },
    { path: "/temp", component: TempRoute },
    { path: "/login", component: CreateUser },
    { path: "/about", component: About }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
