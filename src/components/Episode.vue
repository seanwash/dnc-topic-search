<template>
  <article class="fl w-third pa2 flex">
    <div class="ba b--black-10">
      <div class="pv2 ph3">
        <h1 class="f6 ttu tracked">
          <a
            class="link dim black"
            :href="`https://spec.fm/podcasts/does-not-compute/${episode.id}`"
          >
            {{ episode.title }}
          </a>
        </h1>
      </div>

      <img :src="episode.images.large" class="w-100 db">

      <div class="pa3">
        <p class="lh-title">{{ episode.description }}</p>
        <small class="tracked gray db pv2">Published <time>{{ formattedDate }}</time></small>
      </div>
    </div>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Episode',

  props: {
    episode: {
      type: Object,
      required: true
    }
  },

  computed: {
    formattedDate () {
      return moment(this.episode.published_at).format('MMM Do YY')
    }
  }
}
</script>
