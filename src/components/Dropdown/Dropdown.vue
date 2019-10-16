<template>
	<div class="dropdown">
		<label :for="title">{{ title }}</label>
		<select name="">
			<option
				v-for="(option, index) in options"
				:key="index"
				:value="option"
				>{{ option }}</option
			>
		</select>
	</div>
</template>

<script>
export default {
	props: ['title', 'options']
};
</script>
