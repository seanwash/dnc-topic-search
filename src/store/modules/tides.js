import * as types from '../mutation-types'

const state = {
  tideList: [],
  requesting: false,
  requested: false,
  errors: null
}

const mutations = {
  [types.TIDE_REQUEST] (state) {
    state = {...state, requesting: true}
  },

  [types.TIDE_REQUEST_SUCCESS] (state, payload) {
    state = {
      ...state,
      requesting: false,
      requested: true,
      tideList: payload.tides
    }
  },

  [types.TIDE_REQUEST_FAILURE] (state, payload) {
    state = {
      ...state,
      requesting: false,
      requested: true,
      errors: payload.errors
    }
  }
}

export default {
  state,
  mutations
}
