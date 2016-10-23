<template>
  <section class="cf mb4 mt4 mt0-ns">
    <div class="fl w-100 w-25-ns pr3-ns mb4 mb0-ns">
      <h2 class="f5 ma0 pt3 bt">Search</h2>
    </div>

    <div class="fl w-100 w-75-ns pl3-ns">
      <form
        @change="updateFilter"
        @submit.prevent="submitForm"
      >
        <div class="flex-ns bt bb bg-white">
          <input
            class="db w-100 bg-transparent bn pv3 ph2"
            type="text"
            placeholder="Type here to search the archives"
            autofocus
            :value="searchfilters.keywords"
          >

          <input
            type="submit"
            value="Search Archive"
            class="black dim bn bg-transparent pointer ph2 pv3 pv0-ns fw7 w-100 w-auto-ns tl tc-ns"
          >
        </div>

        <div class="cf pt2">
          <p class="f6 ma0 fl">Showing {{ shownEpisodeCount }} {{ resultLabel }}</p>

          <button
            @click="clearFilters"
            class="pointer fr f6 dim dib black bg-transparent bn"
            type="button">
            Clear Filters
          </button>
        </div>
      </form>
    </div>
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
      shownEpisodeCount: 'shownEpisodeCount'
    }),

    resultLabel () {
      return (this.shownEpisodeCount >= 1 || this.shownEpisodeCount === 0) ? 'results' : 'result'
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
