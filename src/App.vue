<template>
	<div id="app">
		<SearchForm/>
		<hr/>
		<div class="starships" v-for="starship in starshipsList" :key="starship.name">
			<ItemsList :starship="starship"/>
		</div>
		<Pagination :previousLink="previousList" :nextLink="nextList"/>
	</div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import SearchForm from "./components/SearchForm";
import ItemsList from "./components/ItemsList";
import Pagination from "./components/Pagination";

export default {
    name: 'App',
    computed: mapGetters(["starshipsList", "previousList", "nextList"]),
    methods: mapActions(["getAll"]),
    components: {ItemsList, SearchForm, Pagination},
    async mounted() {
        this.getAll();
    }
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 40px auto;
	width: 400px;
}

.starships {
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-bottom: 1rem;
}
</style>
