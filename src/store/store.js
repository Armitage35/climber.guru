import Vue from 'vue';
import Vuex from 'vuex';

import modal from './modules/modal';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		userID: 1,
		isLoading: true,
		climbPerformances: [],
		userPreferences: {},
		boulderingGrades: [],
		routeGrades: [],
	},
	getters: {
		getUserID: state => {
			return state.userID;
		},
		getAppLoadingStatus: state => {
			return state.isLoading;
		},
		getBoulderingGrades: state => {
			return state.boulderingGrades;
		},
		getRouteGrades: state => {
			return state.routeGrades;
		},
		getClimbingGrades: state => {
			return {
				...state.boulderingGrades,
				...state.routeGrades
			};
		}
	},
	mutations: {
		toggleLoadingState: state => {
			state.isLoading = !state.isLoading;
		}
	},
	modules: {
		modal
	}
});
