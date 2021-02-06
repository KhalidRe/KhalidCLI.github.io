import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

//bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
import $ from "jquery";
Vue.use($);
//scss

Vue.config.productionTip = false;
var audio = new Audio(require("./assets/SkySailing.mp3"));
audio.play();

new Vue({
  router,
  store,
  mounted() {
    var audio = new Audio("src/assets/SkySailing.mp3");
    audio.play();
    let status = navigator.onLine;
    status;
  },

  render: (h) => h(App),
}).$mount("#app");
