<template>
	<div>
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
			<Dropdown
				title="Climbing location"
				type="text"
				:options="dropdown"
				icon="fas fa-mountain"
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
</template>

<script>
import Button from '../../Button/Button';
import Dropdown from '../../Dropdown/Dropdown';
export default {
	components: { Button, Dropdown },
	props: ['actions'],
	data: function() {
		return {
			dropdown: ['bouldering', 'lead', 'top rope', 'ice']
		};
	}
};
</script>
