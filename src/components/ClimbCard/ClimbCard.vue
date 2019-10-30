<template>
	<div class="climbCard">
		<div :class="'climbCard__icon' + colourResolver">
			<i :class="iconResolver"></i>
		</div>
		<div class="climbCard__dropdowns">
			<Dropdown
				title="climbing type"
				name="climbPerformance"
				type="text"
				:options="performanceResolver"
				:preset="this.getClimbPerformances[0].name"
				@valueChanged="performance = $event[1].replace(/\s/g, '')"
			></Dropdown>
			<Dropdown
				title="climbing type"
				name="climbGrade"
				type="text"
				:options="gradeResolver"
				:preset="climbGrade"
				@valueChanged="climbGrade = $event[1].replace(/\s/g, '')"
			></Dropdown>
		</div>
		<div class="climbCard__footer">
			<div class="climbingCard__picture">
				<i class="fas fa-camera-retro"></i>
			</div>
			<div class="climbingCard__routeName">
				<TextInput
					name="routeName"
					placeholder="Route name"
					@newContent="routeName = $event"
				></TextInput>
			</div>
			<div
				class="climbCard__icon--trash"
				@click="$emit('removeClimb', climbID)"
			>
				<i class="fas fa-trash"></i>
			</div>
		</div>
	</div>

</template>

<script>
import Dropdown from '../Dropdown/Dropdown';
import TextInput from '../TextInput/TextInput';
import { mapGetters } from 'vuex';

export default {
	components: { Dropdown, TextInput },
	props: {
		climbID: {
			type: Number,
			required: true
		},
		sessionType: {
			type: String,
			required: true
		},
		grades: {
			type: Array,
			required: true
		}
	},
	data: function() {
		return {
			routeName: '',
			climbGrade: this.grades[0].grade_name,
			performance: 'Onsight'
		};
	},
	computed: {
		...mapGetters (['getClimbPerformances']),
		selectedGradeIndex: function() {
			return this.gradeResolver.indexOf(this.climbGrade);
		},
		gradeResolver: function() {
			let selectableGrades = [];

			for (let i = 0; i < this.grades.length; i++) {
				selectableGrades.push(this.grades[i].grade_name);
			}

			return selectableGrades;
		},
		performanceResolver: function() {
			let result = [];

			for (let i = 0; i < this.getClimbPerformances.length; i++){
				result.push(this.getClimbPerformances[i].name);
			}

			return result;
		},
		iconResolver: function() {
			switch (this.performance) {
			case 'Onsight':
				return 'far fa-eye';
			case 'Flash':
				return 'fas fa-bolt';
			case 'Redpoint':
				return 'fas fa-fill';
			case 'Repeat':
				return 'fas fa-redo';
			default:
				return 'fas fa-mountain';
			}
		},
		colourResolver: function() {
			let pointsForClimb = this.grades[this.selectedGradeIndex].points;

			if (pointsForClimb < 5) {
				return '--green';
			} else if (pointsForClimb < 11) {
				return '--blue';
			} else if (pointsForClimb < 16) {
				return '--purple';
			} else if (pointsForClimb < 21) {
				return '--orange';
			} else if (pointsForClimb < 26) {
				return '--red';
			} else {
				return '--black';
			}
		},
		climbTypeID: function() {
			return this.performanceResolver.indexOf(this.performance);
		},
		climbGradeId: function() {
			return this.grades[this.selectedGradeIndex].id;
		}
	},
	watch: {
		routeName: function() {
			this.$emit('routeNameUpdated', [this.climbID, this.routeName]);
		},
		performance: function() {
			this.$emit('climbTypeUpdated', [this.climbID, this.climbTypeID]);
		},
		climbGrade: function() {
			this.$emit('climbGradeUpdated', [this.climbID, this.climbGradeId]);
		}
	}
};
</script>
