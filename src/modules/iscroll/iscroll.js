import Vue from 'vue'
import Iscroll from '../../directive/iscroll.directive'

Vue.use(Iscroll)
var app = document.querySelector('.app')
new Vue({
  el: 'body',
  data: {
    busy: false
  },
  methods: {
    loadMore: function () {
      var self = this
      self.busy = true
      console.log('loading... ' + new Date())
      setTimeout(function () {
        var height = app.clientHeight
        app.style.height = height + 300 + 'px'
        console.log('end... ' + new Date())
        self.busy = false
      }, 1000)
    }
  }
})
