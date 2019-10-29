const state = {
	userID: 1,
	userPreferences: {}
};

const getters = {
	getUserID: state => {
		return state.userID;
	}
};

export default {
	state,
	getters,
};
