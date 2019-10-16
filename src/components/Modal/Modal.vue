<template>
	<div class="modal__mask" @keydown.esc="$emit('toggleModal')" tabindex="0">
		<div class="modal">
			<div class="modal__header">
				<div class="modal__title">
					<h1>{{ title }}</h1>
					<i class="fas fa-times" @click="$emit('toggleModal')"></i>
				</div>
			</div>
			<div class="modal__body"></div>
			<div class="modal__footer">
				<Button
					v-for="(action, index) in actions"
					:key="index"
					:type="action.type"
					:content="action.title"
				></Button>
			</div>
		</div>
	</div>
</template>

<script>
import Button from '../Button/Button';

export default {
	props: ['title', 'actions'],
	components: { Button }
};
</script>
