<template>
  <div id="app">
    <app-header></app-header>

    <search-bar></search-bar>

    <episode-list></episode-list>
  </div>
</template>

<script>
import AppHeader from './components/Header'
import SearchBar from './components/SearchBar'
import EpisodeList from './components/EpisodeList'

export default {
  name: 'app',

  components: {
    AppHeader,
    SearchBar,
    EpisodeList
  },

  mounted () {
    this.$store.dispatch('requestEpisodeData')
  }
}
</script>
