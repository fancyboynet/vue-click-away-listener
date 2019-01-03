# vue-click-away-listener
Listen for click events that occur somewhere in the document, outside of the element itself.

## features
1. Small size(3KB).

## install
```bash
$ npm i vue-click-away-listener
```

## usage

```
import Vue from 'vue'
import VueClickAwayListener from 'vue-click-away-listener'
let vm = new Vue({
  components: {
    VueClickAwayListener
  },
  methods: {
    onAway (type) {
      console.log(type)
    },
    onClick (type) {
      console.log(type)
    }
  }
})
vm.$mount('#app')

```

### Div tag wrap default

```html
<vue-click-away-listener @on-click-away="onAway('block')" @on-click="onClick('block')">
    <div>block</div>
</vue-click-away-listener>
```

### Special tag

```html
<vue-click-away-listener tag="span" @on-click-away="onAway('inline')" @on-click="onClick('inline')">
    <span>inline</span>
</vue-click-away-listener>
```
