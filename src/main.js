import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.config.productionTip = false;

Vue.http.options.root = 'http://localhost:3002';
// Vue.http.interceptors.push((request, next) => {
// 	next();
// })

new Vue({
	render: h => h(App)
}).$mount('#app');
