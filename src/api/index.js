import Vue from 'vue'

export default {
  getEpisodeData (cb, errorCb) {
    Vue.http.get(process.env.API_URL).then((response) => {
      return cb(response.body)
    }, (response) => {
      return errorCb(response.body)
    })
  }
}
