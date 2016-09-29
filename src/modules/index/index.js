'use strict'

import './index.scss'

import Vue from 'vue'
import { Swiper } from 'components'

const imgList = [
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

new Vue({
  el: 'body',
  data: {
    demo02_list: demoList
  },
  components: {
    Swiper
  }
})
