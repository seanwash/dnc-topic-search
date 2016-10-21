import * as types from '../mutation-types'

const state = {
  location: 'San Francisco'
}

const mutations = {
  [types.SEARCH_FILTER_UPDATE] (state, payload) {
    state = {
      ...state,
      location: payload
    }
  },

  [types.SEARCH_FILTER_CLEAR] (state) {
    state = {
      ...state,
      location: ''
    }
  }
}

export default {
  state,
  mutations
}
