<template>
  <transition>
    <div class="message-box" v-if="show">
      <div class="message-mask"></div>
      <div class="message-content">
        <div class="icon">
          456
        </div>
        <div class="text">{{text}}</div>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  },
  props: {
    show: Boolean,
    text: ''
  },
  created () {},
  methods: {
  }
}
</script>
<style scoped >
  .message-box{
    position: absolute;
    top: 20px;
    margin-left: 10%;
    display: flex;
    /*justify-content: center;*/
    align-items: center;
    z-index: 9999;
    width: 80%;
    height: 30px;
    line-height: 30px;
    border: 1px solid #000;
    background-color: rgba(255, 255, 255, 1);
  }

  .message-content {
    display: flex;
    width: 100%;
  }

  .icon {
    width: 40px;
    background-color: black;
    height: 100%;
  }

  .text {
    flex: 1;
    box-sizing: border-box;
    padding-left: 10px;
    text-align: center;
  }

  .v-leave {
    /* 定义 出场动画的 起始状态 */
    /* 只停留一帧 */
    transform: translateY(100px);
  }

  .v-leave-active {
    /* 定义 出场动画 过程 */
    transition: all 1s ease;
  }

  .v-leave-to {
    /* 定义 出场动画 结束状态（即：该动画要达到的目标状态） */
    transform: translateY(-100px);
    opacity: 0;
  }

  /* 定义  入场动画 */

  .v-enter {
    /* 定义 入场动画 的起始状态 */
    transform: translateY(-100px);
    opacity: 0;
  }

  .v-enter-active {
    /* 定义 入场动画 过程 */
    transition: all 1s ease;
  }

  .v-enter-to {
    /* 定义 入场动画 过程 */
    /* 只停留一帧 */
    transform: translateY(0px);
  }
</style>
