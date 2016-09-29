'use strict'
import Vue from 'vue'
import VueRoute from 'vue-router'
import App from './app.vue'
import App1 from './components/app1.vue'
import App2 from './components/app2.vue'

Vue.use(VueRoute)

let app = Vue.extend(App)
let router = new VueRoute()

router.map({
  '/search': {
    component: App1
  },
  '/detail': {
    component: App2
  }
})
router.redirect({
  '/': 'search'
})
router.start(app, '#app')
window.router = router
