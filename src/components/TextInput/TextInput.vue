<template>
	<input type="text" :name="name" :placeholder="placeholder" />
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
	}
};
</script>
