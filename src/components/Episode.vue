<template>
  <article class="pv4">
    <div class="bt pt3 cf">

      <div class="fl w-third pr2">
        <h1 class="ma0 f5 ttu lh-title">
          <a
            class="link dim black"
            :href="episodeLink">
            {{ episode.title }}
          </a>
        </h1>

        <p class="gray db pv2 f6 lh-solid">Published <time>{{ formattedDate }}</time></p>

        <a
          :href="episodeLink"
          class="link dim black f6 lh-solid">
          Listen to this Episode

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="10" height="10" fill="#000" stroke="currentcolor" stroke-width="3" class="ml1" style="display: inline-block; vertical-align: middle; overflow: visible;"><path d="M3 1.5 L3 14.5 L14.258330249197702 8 z"></path></svg>
        </a>
      </div>

      <div class="fl w-two-thirds pl2">
        <p class="ma0 lh-copy">{{ episode.description }}</p>
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
      return moment(this.episode.published_at).format('MMM Do YYYY')
    },

    episodeLink () {
      return `https://spec.fm/podcasts/does-not-compute/${this.episode.id}`
    }
  }
}
</script>
