import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		userID: 1,
		modal: true,
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
		getModalState: state => {
			return state.modal;
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
			return { ...state.boulderingGrades, ...state.routeGrades };
		}
	},
	mutations: {
		toggleModal: state => {
			state.modal = !state.modal;
		},
		toggleLoadingState: state => {
			state.isLoading = !state.isLoading;
		}
	}
});
