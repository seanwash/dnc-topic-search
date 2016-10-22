export const searchfilters = state => state.searchfilters
export const allEpisodes = state => state.episodes.episodes

export const episodeCount = state => {
  if (state.episodes.filteredEpisodes.length) {
    return state.episodes.filteredEpisodes.length
  } else {
    return state.episodes.episodes.length
  }
}
