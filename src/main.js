import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import Vue2Filters from "vue2-filters";

Vue.use(Vue2Filters);

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://salty-garden-97039.herokuapp.com/";
Vue.config.productionTip = false;

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
