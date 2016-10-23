<template>
  <section class="cf">
    <div class="fl w-100 w-25-ns pr3-ns">
      <h2 class="f5 mt4 pt3 bt">Results</h2>
    </div>

    <div class="fl w-100 w-75-ns pl3-ns">
      <loader v-if="requestingEpisodes"></loader>

      <div v-if="episodeErrors" class="pa2 tc w-100">
        <p>Looks like something broke :(</p>
      </div>

      <transition-group name="fade" tag="div">
        <episode
          v-for="episode in shownEpisodes"
          :episode="episode"
          :key="episode.id"
        ></episode>
      </transition-group>
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 240ms ease-out
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
