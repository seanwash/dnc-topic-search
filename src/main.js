// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import Tachyons from 'tachyons'

// For now just console log tachyons to avoid the
// eslint error for not using imported code
console.log(Tachyons)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
