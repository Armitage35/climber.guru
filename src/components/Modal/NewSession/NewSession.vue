<template>
	<div>
		<div class="modal__body">
			<div class="newSession__drpodowns">
				<Dropdown
					title="climbing type"
					type="text"
					name="sessionType"
					:options="climbTypes"
					icon="fas fa-map-marker-alt"
				></Dropdown>
				<Dropdown
					title="session date"
					type="date"
					name="sessionDate"
					icon="far fa-calendar-alt"
				></Dropdown>
				<Dropdown
					title="Climbing location"
					type="text"
					name="sessionLocation"
					icon="fas fa-mountain"
					:options="climbGym"
				></Dropdown>
			</div>
			<label>What did you climb today?</label>
			<div class="newSession_climbs">
				<ClimbCard
					:content="true"
					v-for="(climb, index) in climbs"
					:key="index"
					:climb="climb"
				></ClimbCard>
				<ClimbCard
					:content="false"
					@addClimb="
						climbs.push({
							type: 'Redpoint',
							grade: 'V5'
						})
					"
				></ClimbCard>
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
			climbGym: ['Bloc shop', 'Zero gravite', 'Allez Up!'],
			climbs: [
				{
					type: 'Redpoint',
					grade: 'V5'
				},
				{
					type: 'Flash',
					grade: 'V4'
				}
			]
		};
	}
};
</script>
