<template>
  <article class="pv4">
    <div class="bt pt3 cf">

      <div class="fl w-100 w-third-ns pr2">
        <h1 class="ma0 f5 ttu lh-title">
          <a
            class="link dim black"
            target="_blank"
            :href="episodeLink">
            {{ episode.title }}
          </a>
        </h1>

        <p class="gray db pv2 f6 lh-solid">Published <time>{{ formattedDate }}</time></p>

        <a
          :href="episodeLink"
          target="_blank"
          class="link dim black f6 lh-solid fw7">
          Listen here

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="10" height="10" fill="none" stroke="currentcolor" stroke-width="3" class="ml1" style="display: inline-block; vertical-align: middle; overflow: visible;"><path d="M0 8 L14.5 8"></path><path d="M7.560660171779821 1.0606601717798212 L14.5 8 L7.560660171779821 14.939339828220179"></path></svg>
        </a>
      </div>

      <div class="fl w-100 w-two-thirds-ns pl2-ns mt4 mt0-ns">
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
      return this.episode.sharing_url
      // return `https://spec.fm/podcasts/does-not-compute/${this.episode.id}`
    }
  }
}
</script>
