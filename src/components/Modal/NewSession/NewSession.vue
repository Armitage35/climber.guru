<template>
	<div>
		<div class="modal__body">
			<Dropdown
				title="climbing type"
				type="text"
				:options="climbTypes"
				icon="fas fa-map-marker-alt"
			></Dropdown>
			<Dropdown
				title="session date"
				type="date"
				icon="far fa-calendar-alt"
				:options="dropdown"
			></Dropdown>
			<Dropdown
				title="Climbing location"
				type="text"
				icon="fas fa-mountain"
				:options="climbGym"
			></Dropdown>
			<label>What did you climb today?</label>
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
			climbTypes: ['bouldering', 'lead', 'top rope', 'ice'],
			climbGym: ['Bloc shop', 'Zero gravite', 'Allez Up!']
		};
	}
};
</script>
