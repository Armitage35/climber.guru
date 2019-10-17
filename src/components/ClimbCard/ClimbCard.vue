<template>
	<div v-if="content" class="climbCard">
		<div class="climbCard__icon">
			<i class="fas fa-fill"></i>
		</div>
		<div class="climbCard__dropdowns">
			<Dropdown
				title="climbing type"
				type="text"
				:options="climbPerformance"
			></Dropdown>
			<Dropdown
				title="climbing type"
				type="text"
				:options="boulderLevels"
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
		}
	}
};
</script>
