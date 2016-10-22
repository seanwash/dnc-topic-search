<template>
  <section class="mw9 center flex flex-wrap">
    <episode
      v-for="episode in shownEpisodes"
      :episode="episode"
    ></episode>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Episode from './Episode'

export default {
  name: 'EpisodeList',

  components: {
    Episode
  },

  computed: {
    ...mapState({
      episodes: state => state.episodes.episodes,
      filteredEpisodes: state => state.episodes.filteredEpisodes
    }),

    shownEpisodes () {
      if (this.filteredEpisodes.length) {
        return this.filteredEpisodes
      } else {
        return this.episodes
      }
    }
  }
}
</script>
