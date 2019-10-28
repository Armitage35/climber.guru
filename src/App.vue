<template>
	<div id="app">
		<Modal
			v-if="getModalState && !getAppLoadingStatus"
			title="New session"
			:userPreferences="appState.userPreferences"
			:climbPerformances="appState.climbPerformances"
		></Modal>
	</div>
</template>

<script>
import './Master.scss';
import 'izitoast/dist/css/iziToast.min.css';

import Modal from './components/Modal/Modal';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
	name: 'app',
	components: { Modal },
	created: function() {
		this.initializeApp();
	},
	data: function() {
		return {
			appState: {
				climbPerformances: [],
				userPreferences: {
				}
			},
		};
	},
	methods: {
		...mapMutations(['toggleModal', 'toggleLoadingState']),
		getUserDetails: function() {
			this.$http.get(''+'user?userID=' + this.getUserID).then(
				response => {
					return response.json();
				},
				error => {
					return error;
				}
			).then(data => {
				this.appState.userPreferences = data;
				this.toggleLoadingState();
			});
		},
		getClimbPerformance: function() {
			this.$http.get(''+'performance').then(
				response => {
					return response.json();
				},
				error => {
					return error;
				}
			).then(data => {
				this.appState.climbPerformances = data;
			});
		},
		getUserSessions: function() {
			this.$http.get(''+'sessions?userID='+this.getUserID).then(
				error => {
					return error;
				},
				response => {
					return response.json();
				}
			).then();
		},
		getUserClimbs: function() {
			this.$http.get(''+'climbs?userID='+ this.getUserID).then(
				response => {
					return response.json();
				},
				error => {
					return error;
				}
			).then();
		},
		initializeApp: function() {
			this.getUserDetails();
			this.getClimbPerformance();
		}
	},
	computed: {
		...mapGetters (['getUserID', 'getModalState', 'getAppLoadingStatus'])
	}
};
</script>
