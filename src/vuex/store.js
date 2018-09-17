import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    Repositories: '',
    searchData: '',
    searchStart: false,
    Pagination: '',
    input: '',
    mystar: []
  },
  mutations: {
    repositoryresults (state, rep) {
      state.Repositories = rep
    },
    searchresult (state, sea) {
      state.searchData = sea
    },
    Paginationresult (state, pag) {
      state.Pagination = pag
    },
    inputresults (state, inp) {
      state.input = inp
    },
    mystarresults (state, mys) {
      state.mystar.push(mys)
    }
  }
})
export default store
