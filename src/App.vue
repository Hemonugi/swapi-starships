<template>
  <div id="app">
    <SearchForm />
    <hr />
    <div class="starships" v-for="starship in starshipsList" :key="starship.url">
        <h2 v-on:click="starship.show = !starship.show">{{starship.name}}</h2>
        <transition name="fade">
          <div class="list" v-if="starship.show">
            <div v-for="(value, name) in starship" v-bind:key="name">
              <template><em>{{ name }}: </em>{{ value }}</template>
            </div>
          </div>
        </transition>
    </div>
    <Pagination :previousLink="previousList" :nextLink="nextList"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import SearchForm from "./components/SearchForm";
import Pagination from "./components/Pagination";
export default {
  name: 'App',
  computed: mapGetters(["starshipsList", "previousList", "nextList"]),
  methods: mapActions(["fetchStarships"]),
  components: { SearchForm, Pagination },
  async mounted() {
    this.fetchStarships();
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
.list {
  text-align: left;
  margin: 1rem;
}
</style>
