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
			string: ''
		};
	},
	methods: {
		...mapActions(['fetchStarshipsByValue']),
		search() {
			this.fetchStarshipsByValue(this.string);
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