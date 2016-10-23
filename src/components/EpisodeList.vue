<template>
  <section class="mw9 center flex flex-wrap">
    <loader v-if="requestingEpisodes"></loader>

    <episode
      v-for="episode in shownEpisodes"
      :episode="episode"
    ></episode>

    <div v-if="episodeErrors" class="pa2 tc w-100">
      <p>Looks like something broke :(</p>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Loader from './Loader'
import Episode from './Episode'

export default {
  name: 'EpisodeList',

  components: {
    Episode,
    Loader
  },

  computed: {
    ...mapState({
      episodes: state => state.episodes.episodes,
      filteredEpisodes: state => state.episodes.filteredEpisodes
    }),

    ...mapGetters([
      'searchfilters',
      'requestingEpisodes',
      'episodeErrors'
    ]),

    shownEpisodes () {
      if (this.searchfilters.keywords !== '') {
        return this.filteredEpisodes
      } else {
        return this.episodes
      }
    }
  }
}
</script>
