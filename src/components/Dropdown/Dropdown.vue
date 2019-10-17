<template>
	<div class="dropdown" :id="name" v-if="type === 'text'">
		<label :for="title">{{ title }}</label>
		<div class="dropdown__content">
			<div class="dropdown__active">
				<span>
					<i :class="icon" id="dropdown__icon" v-if="icon"></i>
					{{ valueResolver }}</span
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
					<input type="date" :id="name"
				/></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		icon: {
			type: String,
			required: false
		},
		title: {
			type: String,
			required: true
		},
		options: {
			type: Array,
			required: false
		},
		preset: {
			type: String,
			required: false
		},
		type: {
			validator: function(value) {
				return ['text', 'date'].indexOf(value) !== -1;
			}
		}
	},
	data: function() {
		return {
			currentValue: '',
			componentPreset: this.presetResolver,
			hasBeenUpdated: false
		};
	},
	methods: {
		select: function(event) {
			this.currentValue = event.target.innerHTML
				.replace(/\n\t\t\t/g, '')
				.replace(/\t/g, '');

			this.hasBeenUpdated = true;
			this.$emit('valueChanged', [this.name, this.valueResolver]);
		}
	},
	computed: {
		presetResolver: function() {
			if (this.preset) {
				return this.preset;
			} else if (this.options) {
				return this.options[0];
			} else {
				return null;
			}
		},
		valueResolver: function() {
			return this.hasBeenUpdated
				? this.currentValue
				: this.presetResolver;
		}
	}
};
</script>
