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
					:key="index"
					:climbID="index"
					:climb="climb"
					:grades="availableGrades"
					:climbPerformances="climbPerformances"
					@removeClimb="climbs.splice($event, 1)"
					@routeNameUpdated="climbs[$event[0]].routeName = $event[1]"
					@climbTypeUpdated="climbs[$event[0]].type = $event[1]"
					@climbGradeUpdated="climbs[$event[0]].grade = $event[1]"
				></ClimbCard>
				<EmptyClimbCard @addClimb="
						climbs.push({})
					"></EmptyClimbCard>
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
import EmptyClimbCard from '../../ClimbCard/EmptyClimbCard';

// Importing external modules
import iziToast from 'izitoast';

export default {
	components: { Button, ClimbCard, Dropdown, EmptyClimbCard },
	props: ['actions', 'userPreferences', 'climbPerformances'],
	data: function() {
		return {
			climbTypes: ['bouldering', 'route'],
			climbGym: ['Bloc shop', 'Zero gravite', 'Allez Up!'],
			session: {
				date: '',
				type: 'Bouldering',
				location: 'Bloc Shop'
			},
			climbs: [{}]
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
				climbs: this.climbs,
				userID: 1,
				session: {
					date: new Date(),
					location: 2,
				},
			};

			this.$http.post(''+'sessions', finalSession, 'POST').then(
				response => {
					return response;
				},
				error => {
					return error;
				}
			).then(data => { // eslint-disable-line
				iziToast.success({
					title: 'Session saved',
					message: 'Congratulations!',
					position: 'topRight'
				});
			}
			);
		},
		updateClimbType(event) {
			this.session.type = event[1];
			this.climbs = [];
		},
		climbGradeIDResolver(grade){
			return this.availableGrades[grade].id;
		}
	}
};
</script>
