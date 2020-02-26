import Vue from 'vue'
import Vuex from 'vuex'
import starship from "./modules/starship";

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		starship
	},
})
