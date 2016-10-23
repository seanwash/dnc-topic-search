<template>
  <div id="app" class="mw9 center">
    <div class="w-100 w-20-ns fl center ph2 mt4 mt5-ns">
      <app-header></app-header>
    </div>

    <section class="w-100 w-80-ns fl ph2 mt5-ns">
      <search-bar></search-bar>

      <episode-list></episode-list>

      <app-footer></app-footer>
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
