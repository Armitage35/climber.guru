<template>
	<div class="modal__mask" @keydown.esc="$emit('toggleModal')" tabindex="0">
		<div class="modal">
			<div class="modal__header">
				<div class="modal__title">
					<h1>{{ title }}</h1>
					<i class="fas fa-times" @click="$emit('toggleModal')"></i>
				</div>
			</div>
			<div class="modal__body">
				<Dropdown
					title="climbing type"
					type="text"
					:options="dropdown"
					icon="fas fa-map-marker-alt"
				></Dropdown>
				<Dropdown
					title="session date"
					type="date"
					:options="dropdown"
					icon="far fa-calendar-alt"
				></Dropdown>
			</div>
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
import Dropdown from '../Dropdown/Dropdown';

export default {
	props: ['title', 'actions'],
	components: { Button, Dropdown },
	data: function() {
		return {
			dropdown: ['bouldering', 'lead', 'top rope', 'ice']
		};
	}
};
</script>
