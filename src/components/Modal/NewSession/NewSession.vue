<template>
	<div>
		<div class="modal__body">
			<div class="newSession__drpodowns">
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
				></Dropdown>
				<Dropdown
					title="Climbing location"
					type="text"
					icon="fas fa-mountain"
					:options="climbGym"
				></Dropdown>
			</div>
			<label>What did you climb today?</label>
			<div class="newSession_climbs">
				<ClimbCard :content="true"></ClimbCard>
				<ClimbCard :content="false"></ClimbCard>
			</div>
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
import ClimbCard from '../../ClimbCard/ClimbCard';

export default {
	components: { Button, ClimbCard, Dropdown },
	props: ['actions'],
	data: function() {
		return {
			climbTypes: ['bouldering', 'lead', 'top rope', 'ice'],
			climbGym: ['Bloc shop', 'Zero gravite', 'Allez Up!']
		};
	}
};
</script>
