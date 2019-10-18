<template>
	<div id="app">
		<Modal
			v-if="appState.modal.active"
			@toggleModal="toggleModal"
			title="New session"
		></Modal>
	</div>
</template>

<script>
import './Master.scss';
import 'izitoast/dist/css/iziToast.min.css';

import Modal from './components/Modal/Modal';

export default {
	name: 'app',
	components: { Modal },
	created: function() {
		this.getUserDetails();
		this.getUserSessions();
		this.getUserClimbs();
	},
	data: function() {
		return {
			appState: {
				modal: {
					active: true
				},
				userID: 1
			},
		};
	},
	methods: {
		toggleModal: function() {
			this.appState.modal.active = !this.appState.modal.active;
		},
		getUserDetails: function() {
			this.$http.get(''+'users?userID='+this.appState.userID).then(
				response => {
					return response.json();
				},
				error => {
					return error;
				}
			).then();
		},
		getUserSessions: function() {
			this.$http.get(''+'sessions?userID='+this.appState.userID).then(
				response => {
					return response.json();
				},
				error => {
					return error;
				}
			).then();
		},
		getUserClimbs: function() {
			this.$http.get(''+'climbs?userID='+this.appState.userID).then(
				response => {
					return response.json();
				},
				error => {
					return error;
				}
			).then();
		}
	}
};
</script>
