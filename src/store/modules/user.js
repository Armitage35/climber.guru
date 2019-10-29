const state = {
	userID: 1,
	userPreferences: {}
};

const getters = {
	getUserID: state => {
		return state.userID;
	}
};

const mutations = {
	setUserPreferences: (state, payload) => {
		state.userPreferences = payload;
	}
};

export default {
	state,
	getters,
	mutations
};
