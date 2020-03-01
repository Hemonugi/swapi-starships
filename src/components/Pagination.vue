<template>
	<div class="pagination" v-if="true">
		<button v-on:click="go(previousLink)">Назад</button>
		<button v-on:click="go(nextLink)">Вперед</button>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

export default {
	props: ["previousLink", "nextLink"],
	methods: {
		...mapActions(['fetchStarshipsByUrl']),
		go(url) {
			console.log(url);
			this.fetchStarshipsByUrl(url);
		}
	}
}
</script>

<style scoped>
.pagination button{
	display: inline-block;
	width: 50%;
	border: 1px solid #ccc;
	border-radius: 2px;
	padding: 10px;
	margin-bottom: 10px;
}
</style>