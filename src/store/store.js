import Vue from 'vue';
import Vuex from 'vuex';

import climb from './modules/climb';
import modal from './modules/modal';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		userID: 1,
		isLoading: true,
		userPreferences: {},
	},
	getters: {
		getUserID: state => {
			return state.userID;
		},
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
		modal
	}
});
