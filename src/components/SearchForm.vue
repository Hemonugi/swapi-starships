<template>
	<div>
		<input type="search" v-on:keyup="search" v-model="string" placeholder="Enter name starship for filter">
	</div>
</template>

<script>
import { mapActions } from "vuex"
export default {
	data() {
		return {
			string: '',
			timerId: null
		};
	},
	methods: {
		...mapActions(['getByValue']),
		search() {
			var ctx = this;
			if (this.timerId !== null) {
				clearTimeout(this.timerId);
			}
			this.timerId = setTimeout(function() { return ctx.getByValue(ctx.string) }, 500);
		}
	}
}
</script>

<style scoped>
input {
	display: block;
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 2px;
	padding: 10px;
	margin-bottom: 10px;
}
</style>
