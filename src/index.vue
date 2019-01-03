<template>
  <component
    :is="tag"
    style="outline: none"
    tabindex="0"
    @focus="onFocus"
    @blur="onBlur"
  >
    <slot />
  </component>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {
    onBlur () {
      this.$emit('on-click-away')
    },
    onFocus () {
      this.$emit('on-click')
    }
  }
}
</script>
