<template>
	<div v-if="content" class="climbCard">
		<div :class="'climbCard__icon' + colourResolver">
			<i :class="iconResolver"></i>
		</div>
		<div class="climbCard__dropdowns">
			<Dropdown
				title="climbing type"
				name="climbType"
				type="text"
				:options="climbPerformance"
				:preset="climb.type"
				@valueChanged="climb.type = $event[1].replace(/\s/g, '')"
			></Dropdown>
			<Dropdown
				title="climbing type"
				name="climbGrade"
				type="text"
				:options="gradeResolver"
				:preset="climb.grade"
				@valueChanged="climb.grade = $event[1].replace(/\s/g, '')"
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
	<div v-else class="climbCard--new" @click="$emit('addClimb')">
		<div class="climbCard__addClimb">
			<div class="climbCard__icon--new">
				<i class="fas fa-plus-circle"></i>
			</div>
			<div class="climbCard__label">Add a climb</div>
		</div>
	</div>
</template>

<script>
import Dropdown from '../Dropdown/Dropdown';
import TextInput from '../TextInput/TextInput';

export default {
	components: { Dropdown, TextInput },
	props: {
		content: {
			type: Boolean,
			required: true
		},
		climb: {
			type: Object,
			required: false
		},
		climbID: {
			type: Number
		},
		grades: {
			type: Array,
			required: false
		}
	},
	data: function() {
		return {
			climbPerformance: ['Onsight', 'Flash', 'Redpoint', 'Repeat'],
			routeName: '',
		};
	},
	computed: {
		selectedGradeIndex: function() {
			return this.gradeResolver.indexOf(this.climb.grade);
		},
		gradeResolver: function() {
			let selectableGrades = [];

			for (let i = 0; i < this.grades.length; i++) {
				selectableGrades.push(this.grades[i].grade_name);
			}

			return selectableGrades;
		},
		iconResolver: function() {
			switch (this.climb.type) {
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
			if (pointsForClimb < 10) {
				return '--green';
			} else if (pointsForClimb < 14) {
				return '--blue';
			} else if (pointsForClimb < 16) {
				return '--purple';
			} else if (pointsForClimb < 19) {
				return '--orange';
			} else if (pointsForClimb < 21) {
				return '--red';
			} else {
				return '--black';
			}
		}
	},
	watch: {
		routeName: function() {
			this.$emit('routeNameUpdated', [this.climbID, this.routeName]);
		}
	}
};
</script>
