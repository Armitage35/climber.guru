<template>
	<input
		type="text"
		:name="name"
		:placeholder="placeholder"
		v-model="content"
	/>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: false
		},
		placeholder: {
			type: String,
			required: false
		}
	},
	data: function() {
		return {
			content: ''
		};
	},
	watch: {
		content: function() {
			this.$emit('newContent', this.content);
		}
	}
};
</script>
