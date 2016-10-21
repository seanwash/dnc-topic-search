<template>
  <section class="mw7 center pv4">
    <form @change="updateSearchFilter(searchFilters.location)" @submit.prevent="">
      <input
        class="db w-100 pa2"
        type="text"
        placeholder="Search by Location"
        v-model="searchFilters.location"
      >
    </form>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SearchBar',

  computed: {
    ...mapGetters({
      searchFilters: 'searchfilters'
    })
  },

  methods: {
    ...mapActions([
      'updateSearchFilter'
    ])
  }
}
</script>
