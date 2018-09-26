import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  movieList1:[]
  },
  mutations: {
	  setMovieList(state,list){
		  console.log("inside store",list)
		  state.movieList1=list;
	  }
  },
  actions: {

  }
})
