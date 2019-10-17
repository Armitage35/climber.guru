<template>
	<div class="climbCard">
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
	</div>
</template>

<script>
import Dropdown from '../Dropdown/Dropdown';

export default {
	components: { Dropdown },
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
