const state = {
	climbPerformances: [],
	boulderingGrades: [],
	routeGrades: []
};

const getters = {
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
};

const actions = {

};

const mutations = {

};

export default {
	state,
	getters,
	mutations,
	actions
};
