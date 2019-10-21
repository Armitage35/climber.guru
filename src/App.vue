<template>
	<div id="app">
		<Modal
			v-if="appState.modal.active && !appState.isLoading"
			@toggleModal="toggleModal"
			title="New session"
			:userPreferences="appState.userPreferences"
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
				isLoading: true,
				modal: {
					active: true
				},
				userID: 1,
				userPreferences: {
					preferredLocation: 'Bloc Shop'
				}
			},
		};
	},
	methods: {
		toggleModal: function() {
			this.appState.modal.active = !this.appState.modal.active;
		},
		getUserDetails: function() {

			this.$http.get(''+'user?userID='+this.appState.userID).then(
				response => {
					return response.json();
				},
				error => {
					return error;
				}
			).then(data => {
				this.appState.userPreferences = data;
				this.appState.isLoading = false;
				// this.appState.userPreferences.grades = data.grades;
			});
		},
		getUserSessions: function() {
			this.$http.get(''+'sessions?userID='+this.appState.userID).then(
				error => {
					return error;
				},
				response => {
					return response.json();
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
