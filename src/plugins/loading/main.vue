<template>
  <div class="loading-box"></div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
    }
  },
  props: {
    show: {
      type: Boolean
    },
    title: {
      type: String,
      default: '加载中，请稍后……'
    }
  },
  methods: {}
}
</script>

<style scoped lang='scss' rel='stylesheet/scss'>
</style>
