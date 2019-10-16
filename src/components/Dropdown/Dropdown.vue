<template>
	<div class="dropdown">
		<label :for="title">{{ title }}</label>
		<div class="dropdown__content">
			<div class="dropdown__active">
				<span>{{ active }}</span
				><i class="fas fa-chevron-down"></i>
			</div>
			<ul class="dropdown__options">
				<li
					class="dropdown__option"
					v-for="(option, index) in options"
					:key="index"
				>
					{{ option }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: ['title', 'options'],
	data: function() {
		return {
			active: this.options[0]
		};
	}
};
</script>
