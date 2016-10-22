<template>
  <div id="app">
    <app-header></app-header>

    <search-bar></search-bar>

    <episode-list></episode-list>

    <app-footer></app-footer>
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
