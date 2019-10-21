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
					@valueChanged="updateClimbType($event)"
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
					:grades="availableGrades"
					:climbPerformances="climbPerformances"
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
					@saveSession="uploadSession()"
				></Button>
			</div>
		</div>
	</div>
</template>

<script>
import Button from '../../Button/Button';
import Dropdown from '../../Dropdown/Dropdown';
import ClimbCard from '../../ClimbCard/ClimbCard';

export default {
	components: { Button, ClimbCard, Dropdown },
	props: ['actions', 'userPreferences', 'climbPerformances'],
	data: function() {
		return {
			climbTypes: ['bouldering', 'top rope', 'lead'],
			climbGym: ['Bloc shop', 'Zero gravite', 'Allez Up!'],
			session: {
				date: '',
				type: 'Bouldering',
				location: 'Bloc Shop'
			},
			climbs: [
				{
					type: 'flash',
					grade: 'V3'
				}
			]
		};
	},
	computed: {
		availableGrades: function() {
			if (this.session.type === 'Bouldering' || this.session.type === ' bouldering ') {
				return this.userPreferences.grades.boulderGrades;
			} else {
				return this.userPreferences.grades.routeGrades;
			}
		}
	},
	methods: {
		uploadSession: function() {
			let finalSession = {
				userID: 1,
				session: {
					date: new Date(),
					type: 'Bouldering',
					location: 2,
				},
				climbs: [{
					grade: 125,
					quality: 1
				},
				{
					grade: 123,
					quality: 2
				}]
			};

			this.$http.post(''+'sessions', finalSession, 'POST').then(
				response => {
					return response.json();
				},
				error => {
					return error;
				}
			).then();
		},
		updateClimbType(event) {
			this.session.type = event[1];
			this.climbs = [];
		}
	}
};
</script>
