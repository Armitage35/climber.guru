<template>
	<div class="climbCard">
		<div :class="'climbCard__icon' + colourResolver">
			<i :class="iconResolver"></i>
		</div>
		<div class="climbCard__dropdowns">
			<Dropdown
				title="climbing type"
				name="climbType"
				type="text"
				:options="performanceResolver"
				:preset="climbType"
				@valueChanged="climbType = $event[1].replace(/\s/g, '')"
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

export default {
	components: { Dropdown, TextInput },
	props: {
		climbID: {
			type: Number,
			required: true
		},
		grades: {
			type: Array,
			required: true
		},
		climbPerformances: {
			type: Array,
			required: true
		}
	},
	data: function() {
		return {
			routeName: '',
			climbType: this.climbPerformances[0].name || undefined,
			climbGrade: this.grades[0].grade_name
		};
	},
	computed: {
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

			for (let i=0; i < this.climbPerformances.length; i++){
				result.push(this.climbPerformances[i].name);
			}

			return result;
		},
		iconResolver: function() {
			switch (this.climbType) {
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
			return this.performanceResolver.indexOf(this.climbType);
		}
	},
	watch: {
		routeName: function() {
			this.$emit('routeNameUpdated', [this.climbID, this.routeName]);
		},
		climbType: function() {
			this.$emit('climbTypeUpdated', [this.climbID, this.climbTypeID]);
		},
		climbGrade: function() {
			this.$emit('climbGradeUpdated', [this.climbID, this.selectedGradeIndex]);
		}
	}
};
</script>
