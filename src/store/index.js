import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as actions from './actions'
import * as getters from './getters'
import episodes from './modules/episodes'
import searchfilters from './modules/searchfilters'

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    episodes,
    searchfilters
  },
  strict: process.env.NODE_ENV !== 'production'
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      modules: {
        episodes,
        searchfilters
      }
    })
  })
}

export default store
