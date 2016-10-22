<template>
  <div id="app">
    <search-bar></search-bar>

    <episode-list></episode-list>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import EpisodeList from './components/EpisodeList'

export default {
  name: 'app',

  components: {
    SearchBar,
    EpisodeList
  },

  mounted () {
    this.$store.dispatch('requestEpisodeData')
  }
}
</script>
