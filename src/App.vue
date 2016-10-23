<template>
  <div id="app" class="mw9 center">
    <div class="w-20 fl center ph2">
      <app-header></app-header>
    </div>

    <section class="w-80 fl ph2">
      <search-bar></search-bar>

      <episode-list></episode-list>
    </section>
  </div>
</template>

<script>
import AppHeader from './components/Header'
import AppFooter from './components/Footer'
import SearchBar from './components/SearchBar'
import EpisodeList from './components/EpisodeList'

export default {
  name: 'app',

  components: {
    AppHeader,
    SearchBar,
    EpisodeList,
    AppFooter
  },

  mounted () {
    this.$store.dispatch('requestEpisodeData')
  }
}
</script>
