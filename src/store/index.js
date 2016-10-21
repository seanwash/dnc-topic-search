import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as actions from './actions'
import * as getters from './getters'
import tides from './modules/tides'
import searchfilters from './modules/searchfilters'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    tides,
    searchfilters
  }
})
