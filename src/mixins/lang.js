var mixin = {
  watch: {
    '$store.state.lang'(val) {
      if (this.$i18n.locale != val) {
        this.$i18n.locale = val
      }
    },
  },
}

export default mixin
