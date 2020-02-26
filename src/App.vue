<template>
  <div id="app">
    <div class="starship" v-for="starship in starships" :key="starship.url">
      <h2>{{starship.name}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      starships: []
    };
  },
  async mounted() {
    const res = await fetch("https://swapi.co/api/starships/");
    const starships = await res.json();
    this.starships = starships.results;
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

.starship {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
