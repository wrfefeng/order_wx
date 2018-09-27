<template>
  <transition>
    <div class="notice-box" v-if="show">
      {{info}}
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    info: {
      type: String,
      default: 'wrf'
    }
  },
  methods: {}
}
</script>

<style scoped>
  .notice-box {
    position: absolute;
    top: 60px;
    right: 20px;
    width: 60px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ccc;
    background-color: #fff;
  }

  .v-leave {
    transform: translateX(0px);
  }

  .v-leave-active {
    transition: all 1s ease;
  }

  .v-leave-to {
    transform: translateY(-50px);
    height: 0;
    opacity: 0;
  }

  /* 定义  入场动画 */

  .v-enter {
    /* 定义 入场动画 的起始状态 */
    transform: translateX(100px);
    opacity: 0;
  }

  .v-enter-active {
    /* 定义 入场动画 过程 */
    transition: all 1s ease;
  }

  .v-enter-to {
    /* 定义 入场动画 过程 */
    /* 只停留一帧 */
    transform: translateX(0px);
  }

</style>
