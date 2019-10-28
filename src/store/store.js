import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		userID: 1,
	},
	getters: {
		getUserID: state => {
			return state.userID;
		}
	}
});
