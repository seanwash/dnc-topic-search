import lunr from 'lunr'
import * as types from '../mutation-types'

const state = {
  episodes: [],
  filteredEpisodes: [],
  requesting: false,
  requested: false,
  errors: null
}

const idx = lunr(function () {
  this.field('title')
  this.field('description')
  this.field('long_description')

  this.ref('id')
})

const mutations = {
  [types.REQUEST_EPISODES] (state) {
    state.requesting = true
  },

  [types.REQUEST_EPISODES_SUCCESS] (state, payload) {
    // Add all of the fetched episodes to the search index
    for (const episode of payload) {
      idx.add(episode)
    }

    state.episodes = payload
    state.requesting = false
    state.requested = true
  },

  [types.REQUEST_EPISODES_FAILURE] (state, payload) {
    state.requesting = false
    state.requested = true
    state.errors = payload.errors
  },

  [types.FILTER_EPISODES] (state, payload) {
    // Fire search query, map over results and filter all shows by
    // returned IDs from index
    const results = idx.search(payload.keywords).map((result) => {
      return state.episodes.filter((episode) => {
        return episode.id === result.ref
      })[0]
    })

    state.filteredEpisodes = results
  }
}

export default {
  state,
  mutations
}
