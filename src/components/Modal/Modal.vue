<template>
	<div class="modal__mask" @keydown.esc="$emit('toggleModal')" tabindex="0">
		<div class="modal">
			<div class="modal__header">
				<div class="modal__title">
					<h1>{{ title }}</h1>
					<i class="fas fa-times" @click="$emit('toggleModal')"></i>
				</div>
			</div>
			<NewSession
				:actions="actions"
				:userPreferences="userPreferences"
				:climbPerformances="climbPerformances"
				@toggleModal="$emit('toggleModal')"
			></NewSession>
		</div>
	</div>
</template>

<script>
import NewSession from './NewSession/NewSession';

export default {
	props: ['title', 'climbPerformances', 'userPreferences'],
	components: { NewSession },
	data: function() {
		return {
			actions: [
				{
					title: 'save',
					type: 'primary'
				}
			]
		};
	}
};
</script>
