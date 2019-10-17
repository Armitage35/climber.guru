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

import Modal from './components/Modal/Modal';

export default {
	name: 'app',
	components: { Modal },
	data: function() {
		return {
			appState: {
				modal: {
					active: true
				}
			}
		};
	},
	methods: {
		toggleModal: function() {
			this.appState.modal.active = !this.appState.modal.active;
		}
	}
};
</script>
