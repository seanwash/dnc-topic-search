import api from '../api'
import * as types from './mutation-types'

// http://vuex.vuejs.org/en/actions.html
export const requestEpisodeData = ({ commit }) => {
  commit(types.REQUEST_EPISODES)

  api.getEpisodeData(
    (response) => commit(types.REQUEST_EPISODES_SUCCESS, response),
    (response) => commit(types.REQUEST_EPISODES_FAILURE, response)
  )
}

export const filterEpisodes = ({ commit }, payload) => {
  commit(types.FILTER_EPISODES, payload)
}

export const updateSearchFilter = ({ commit }, payload) => {
  commit(types.SEARCH_FILTER_UPDATE, payload)
}
