<template>
  <section class="mw9 center pv4 ph2">
    <form
      @change="updateFilter"
      @submit.prevent="submitForm"
    >
      <input
        class="db w-100 pa2 ba"
        type="text"
        placeholder="Search by Keyword"
        :value="searchfilters.keywords"
      >
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
      searchfilters: 'searchfilters'
    })
  },

  methods: {
    updateFilter (e) {
      this.$store.dispatch('updateSearchFilter', e.target.value)
    },

    submitForm () {
      this.$store.dispatch('filterEpisodes', this.searchfilters)
    }
  }
}
</script>
