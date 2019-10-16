<template>
	<button type="button" :class="classResolver">{{ content }}</button>
</template>

<script>
export default {
	props: ['content', 'type'],
	computed: {
		classResolver: function() {
			return 'bttn__' + this.type;
		}
	}
};
</script>
