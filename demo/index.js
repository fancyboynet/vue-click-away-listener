import Vue from 'vue'
import VueClickAwayListener from '../src/index'
let vm = new Vue({
  components: {
    VueClickAwayListener
  },
  data () {
    return {
      blockAway: false,
      inlineAway: false
    }
  },
  methods: {
    onAway (type) {
      if (type === 'block') {
        this.blockAway = true
        return
      }
      this.inlineAway = true
    },
    onClick (type) {
      if (type === 'block') {
        this.blockAway = false
        return
      }
      this.inlineAway = false
    }
  }
})
vm.$mount('#app')
