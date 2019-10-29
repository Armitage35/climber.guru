Vue.use(Vuex);

import Vue from 'vue';
import Vuex from 'vuex';

import climb from './modules/climb';
import modal from './modules/modal';
import user from './modules/user';

export const store = new Vuex.Store({
	state: {
		isLoading: true,
	},
	getters: {
		getAppLoadingStatus: state => {
			return state.isLoading;
		}
	},
	mutations: {
		toggleLoadingState: state => {
			state.isLoading = !state.isLoading;
		}
	},
	modules: {
		climb,
		modal,
		user
	}
});
