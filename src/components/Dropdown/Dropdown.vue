<template>
	<div class="dropdown" v-if="type === 'text'">
		<label :for="title">{{ title }}</label>
		<div class="dropdown__content">
			<div class="dropdown__active">
				<span>
					<i :class="icon" id="dropdown__icon" v-if="icon"></i>
					{{ active }}</span
				><i class="fas fa-chevron-down"></i>
			</div>
			<ul class="dropdown__options">
				<li
					class="dropdown__option"
					v-for="(option, index) in options"
					:key="index"
					@click="select($event)"
				>
					{{ option }}
				</li>
			</ul>
		</div>
	</div>
	<div class="dropdown" v-else-if="type === 'date'">
		<label :for="title">{{ title }}</label>
		<div class="dropdown__content">
			<div class="dropdown__active">
				<span>
					<i :class="icon" id="dropdown__icon" v-if="icon"></i>
					<input type="date"
				/></span>
			</div>
		</div>
	</div>
	<!-- <input type="date" name="bday" v-else /> -->
</template>

<script>
export default {
	props: ['type', 'icon', 'title', 'options'],
	data: function() {
		return {
			active: this.options[0]
		};
	},
	methods: {
		select: function(event) {
			this.active = event.target.innerHTML
				.replace(/\n\t\t\t/g, '')
				.replace(/\t/g, '');
		}
	}
};
</script>
