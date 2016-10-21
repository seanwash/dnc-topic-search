import api from '../api'
import * as types from './mutation-types'

// http://vuex.vuejs.org/en/actions.html
export const tideRequestData = ({ commit }) => {
  commit(types.TIDE_REQUEST)

  // getTideData takes two callbacks, success
  // and error for easy dispatching of success
  // and error handlers
  api.getTideData(
    () => commit(types.TIDE_REQUEST_SUCCESS),
    () => commit(types.TIDE_REQUEST_FAILURE)
  )
}

export const updateSearchFilter = ({ commit }, payload) => {
  commit(types.SEARCH_FILTER_UPDATE, payload)
}
