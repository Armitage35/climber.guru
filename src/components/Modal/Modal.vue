<template>
	<div class="modal__mask" @keydown.esc="toggleModal" tabindex="0">
		<div class="modal">
			<div class="modal__header">
				<div class="modal__title">
					<h1>{{ title }}</h1>
					<i class="fas fa-times" @click="toggleModal"></i>
				</div>
			</div>
			<NewSession
				:actions="actions"
			></NewSession>
		</div>
	</div>
</template>

<script>
import NewSession from './NewSession/NewSession';
import { mapMutations } from 'vuex';

export default {
	props: ['title'],
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
	},
	methods: {
		...mapMutations(['toggleModal'])
	}
};
</script>
