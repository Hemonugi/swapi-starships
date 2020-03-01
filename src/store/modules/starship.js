export default {
	actions: {
		async fetchStarships(ctx) {
			const res = await fetch("https://swapi.co/api/starships/");
			const starships = await res.json();
			this.starships = starships.results;

			ctx.commit('updateStarships', starships);
		},
		async fetchStarshipsByValue(ctx, string) {
			const res = await fetch(
				"https://swapi.co/api/starships/?search=" + string
			);
			const starships = await res.json();
			this.starships = starships.results;

			ctx.commit('updateStarships', starships);
		},
		async fetchStarshipsByUrl(ctx, url) {
			const res = await fetch(url);
			const starships = await res.json();

			this.previousList = starships.previous;
			this.nextList = starships.next;
			this.starships = starships.results;

			ctx.commit('updateStarships', starships);
		}
	},
	mutations: {
		updateStarships(state, starships) {
			starships.results.map(function(starship) {
				starship['show'] = false;

				return starship;
			});

			state.previousList = starships.previous ?? null;
			state.nextList = starships.next ?? null;
			state.starships = starships.results;
		},
	},
	state: {
		starships: [],
		previousList: null,
		nextList: null,
	},
	getters: {
		starshipsList(state) {
			return state.starships;
		},
		previousList(state) {
			return state.previousList;
		},
		nextList(state) {
			return state.nextList;
		},
	},
}
