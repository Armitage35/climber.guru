import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

// eslint-disable-next-line
console.log(process.env.VUE_APP_SERVER_ADRESS);

Vue.config.productionTip = false;

// eslint-disable-next-line
Vue.http.options.root = process.env.VUE_APP_SERVER_ADRESS;
// Vue.http.interceptors.push((request, next) => {
// 	next();
// })

new Vue({
	render: h => h(App)
}).$mount('#app');
