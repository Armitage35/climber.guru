import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.config.productionTip = false;

// eslint-disable-next-line
Vue.http.options.root = process.env.VUE_APP_SERVER_ADRESS;

import { store } from './store/store';

new Vue({
	store,
	render: h => h(App)
}).$mount('#app');
