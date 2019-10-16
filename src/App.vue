<template>
	<div id="app">
		<Button type="primary" content="primary"></Button>
		<Button type="secondary" content="secondary"></Button>
		<Modal
			v-if="appState.modal.active"
			@toggleModal="toggleModal"
			title="test"
			:actions="modalActions"
		></Modal>
	</div>
</template>

<script>
import './Master.scss';

import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

export default {
	name: 'app',
	components: { Button, Modal },
	data: function() {
		return {
			appState: {
				modal: {
					active: true
				}
			},
			modalActions: [
				{
					title: 'save',
					type: 'primary'
				}
			]
		};
	},
	methods: {
		toggleModal: function() {
			this.appState.modal.active = !this.appState.modal.active;
		}
	}
};
</script>
