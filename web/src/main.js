import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/scss/style.scss'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false;
import VueAwesomeSwiper from "vue-awesome-swiper";
import axios from 'axios'


// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */ );

import Card from './components/Card'
Vue.component('m-card', Card)
import ListCard from './components/ListCard'
Vue.component('m-list-card', ListCard)
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");