export const searchfilters = state => state.searchfilters
export const allEpisodes = state => state.episodes.episodes
export const requestingEpisodes = state => state.episodes.requesting
export const episodeErrors = state => state.episodes.errors

export const shownEpisodeCount = state => {
  if (state.searchfilters.keywords !== '') {
    return state.episodes.filteredEpisodes.length
  } else {
    return state.episodes.episodes.length
  }
}
