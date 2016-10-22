import * as types from '../mutation-types'

const state = {
  keywords: ''
}

const mutations = {
  [types.SEARCH_FILTER_UPDATE] (state, payload) {
    state.keywords = payload
  },

  [types.SEARCH_FILTER_CLEAR] (state) {
    state.keywords = ''
  }
}

export default {
  state,
  mutations
}
