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
	},
	getClimbPerformances: state => {
		return state.climbPerformances;
	}
};

const mutations = {
	setBoulderingGrades: (state, payload) => {
		state.boulderingGrades = payload;
	},
	setRouteGrades: (state, payload) => {
		state.routeGrades = payload;
	},
	setClimbPerformances: (state, payload) => {
		state.climbPerformances = payload;
	}
};

export default {
	state,
	getters,
	mutations
};
