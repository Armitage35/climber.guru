<template>
	<div>
		<div class="modal__body">
			<div class="newSession__drpodowns">
				<Dropdown
					title="climbing type"
					type="text"
					name="sessionType"
					:options="climbTypes"
					:preset="session.type"
					icon="fas fa-map-marker-alt"
					@valueChanged="session.type = $event[1]"
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
					:preset="session.location"
					@valueChanged="session.location = $event[1]"
				></Dropdown>
			</div>
			<label>What did you climb today?</label>
			<div class="newSession_climbs">
				<ClimbCard
					v-for="(climb, index) in climbs"
					:content="true"
					:key="index"
					:climbID="index"
					:climb="climb"
					@removeClimb="climbs.splice($event, 1)"
					@routeNameUpdated="climbs[$event[0]].routeName = $event[1]"
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
			<div>
				<Button
					v-for="(action, index) in actions"
					:key="index"
					:type="action.type"
					:content="action.title"
					eventName="saveSession"
					@saveSession="saveSession()"
				></Button>
			</div>
		</div>
	</div>
</template>

<script>
import Button from '../../Button/Button';
import Dropdown from '../../Dropdown/Dropdown';
import ClimbCard from '../../ClimbCard/ClimbCard';

// import iziToast from 'izitoast';

export default {
	components: { Button, ClimbCard, Dropdown },
	props: ['actions'],
	data: function() {
		return {
			climbTypes: ['bouldering', 'lead', 'top rope', 'ice'],
			climbGym: ['Bloc shop', 'Zero gravite', 'Allez Up!'],
			session: {
				date: '',
				type: 'Bouldering',
				location: 'Bloc Shop'
			},
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
	},
	methods: {
		saveSession: function() {
			this.session.date = document.getElementById('sessionDate').value;
			this.$emit('createNewSession', [this.session, this.climbs]);
		}
	}
};
</script>
