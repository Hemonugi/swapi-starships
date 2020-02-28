export default {
	actions: {
		async fetchStarships(ctx) {
			const res = await fetch("https://swapi.co/api/starships/");
			const starships = await res.json();
			this.starships = starships.results;

			ctx.commit('updateStarships', starships.results);
		},
		async fetchStarshipsByValue(ctx, string) {
			const res = await fetch(
				"https://swapi.co/api/starships/?search=" + string
			);
			const starships = await res.json();
			this.starships = starships.results;

			ctx.commit('updateStarships', starships.results);
		}
	},
	mutations: {
		updateStarships(state, starships) {
			state.starships = starships;
		},
	},
	state: {
		starships: [],
	},
	getters: {
		starshipsList(state) {
			return state.starships;
		}
	},
}
