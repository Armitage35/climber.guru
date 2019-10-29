const state = {
	modal: true
};

const getters = {
	getModalState: state => {
		return state.modal;
	}
};

const mutations = {
	toggleModal: state => {
		state.modal = !state.modal;
	}
};

export default {
	state,
	getters,
	mutations
};
