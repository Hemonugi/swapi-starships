export default {
	actions: {
		async getAll(ctx) {
			const starships = await fetch("https://swapi.co/api/starships/");
			ctx.commit('updateStarships', await starships.json());
		},
		async getByValue(ctx, string) {
			const starships = await fetch("https://swapi.co/api/starships/?search=" + string);
			ctx.commit('updateStarships', await starships.json());
		},
		async getByUrl(ctx, url) {
			const starships = await fetch(url);
			ctx.commit('updateStarships', await starships.json());
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
