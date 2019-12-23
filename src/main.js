import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SuiVue from 'semantic-ui-vue';
import App from './App.vue'
import store from "./store";
import router from "./router";
import 'semantic-ui-css/semantic.min.css';


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(SuiVue)

new Vue({
  el:"#app",
  store,
  router,
  render: h => h(App),
}).$mount('#app')
