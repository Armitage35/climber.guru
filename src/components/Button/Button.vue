<template>
	<button type="button" :class="classResolver" @click="$emit(eventName)">
		{{ content }}
	</button>
</template>

<script>
export default {
	props: {
		type: {
			validator: function(value) {
				return ['primary', 'secondary'].indexOf(value) !== -1;
			},
			required: true
		},
		content: {
			type: String,
			required: true
		},
		eventName: {
			type: String,
			required: true
		}
	},
	computed: {
		classResolver: function() {
			return 'bttn__' + this.type;
		}
	}
};
</script>
