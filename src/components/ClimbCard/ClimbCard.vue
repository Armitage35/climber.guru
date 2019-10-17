<template>
	<div v-if="content" class="climbCard">
		<div class="climbCard__icon">
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
				:options="boulderLevels"
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
				></TextInput>
			</div>
		</div>
	</div>
	<div v-else class="climbCard--new">
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
		}
	},
	data: function() {
		return {
			climbPerformance: ['Onsight', 'Flash', 'Redpoint', 'Repeat'],
			level: []
		};
	},
	computed: {
		boulderLevels: function() {
			let boulderLevel = [];
			for (let i = 0; i < 15; i++) {
				boulderLevel.push('V' + i);
			}
			return boulderLevel;
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
		}
	}
};
</script>
