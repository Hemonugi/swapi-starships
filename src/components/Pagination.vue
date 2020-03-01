<template>
	<div class="pagination">
		<button v-on:click="go(previousLink)">Назад</button>
		<button v-on:click="go(nextLink)">Вперед</button>
	</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
	props: ["previousLink", "nextLink"],
	methods: {
		...mapActions(['getByUrl']),
		go(url) {
			this.getByUrl(url);
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