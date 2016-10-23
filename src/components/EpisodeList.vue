<template>
  <section class="cf">
    <div class="fl w-25 pr3">
      <h2 class="f5 mv4 pt3 bt">Results</h2>
    </div>

    <div class="fl w-75 pl3">
      <loader v-if="requestingEpisodes"></loader>

      <div v-if="episodeErrors" class="pa2 tc w-100">
        <p>Looks like something broke :(</p>
      </div>

      <episode
        v-for="episode in shownEpisodes"
        :episode="episode"
      ></episode>
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
