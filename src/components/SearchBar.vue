<template>
  <section class="mw9 center pt2 pb3 ph2">
    <form
      @change="updateFilter"
      @submit.prevent="submitForm"
    >
      <input
        class="db w-100 pa2 ba"
        type="text"
        placeholder="Search for topics by Keyword"
        :value="searchfilters.keywords"
      >

      <div class="cf pt2">
        <p class="f6 ma0 fl mt2">Showing {{ episodeCount }} {{ resultLabel }}</p>
        <button @click="clearFilters" class="pointer fr f6 link dim ph3 pv2 dib white bg-black bn" type="button">Clear Filters</button>
      </div>
    </form>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'SearchBar',

  computed: {
    ...mapState({
      searchfilters: state => state.searchfilters
    }),

    ...mapGetters({
      searchfilters: 'searchfilters',
      episodeCount: 'episodeCount'
    }),

    resultLabel () {
      return (this.episodeCount > 1) ? 'results' : 'result'
    }
  },

  methods: {
    clearFilters () {
      this.$store.dispatch('clearFilters')
      this.$store.dispatch('filterEpisodes', this.searchfilters)
    },

    updateFilter (e) {
      this.$store.dispatch('updateSearchFilter', e.target.value)
    },

    submitForm () {
      this.$store.dispatch('filterEpisodes', this.searchfilters)
    }
  }
}
</script>
