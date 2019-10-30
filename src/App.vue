<template>
	<div id="app">
		<Modal
			v-if="getModalState && !getAppLoadingStatus"
			title="New session"
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
	methods: {
		...mapMutations(['toggleModal', 'toggleLoadingState', 'setBoulderingGrades', 'setRouteGrades', 'setUserPreferences', 'setClimbPerformances']),
		getUserDetails: function() {
			this.$http.get(''+'user?userID=' + this.getUserID).then(
				response => {
					return response.json();
				},
				error => {
					return error;
				}
			).then(data => {
				this.setUserPreferences(data.details);
				this.setBoulderingGrades(data.grades.boulderGrades);
				this.setRouteGrades(data.grades.routeGrades);
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
				this.setClimbPerformances(data);
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
			);
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
