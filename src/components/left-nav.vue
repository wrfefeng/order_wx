<template>
    <div class="container">
      <div @click="switchCategory(val)" class="item" v-for="val in categoryList" :class="{'active': currentCategory.id === val.id}" :key="val.id">
        <span class="name">{{val.label}}</span>
      </div>
      <div @click="per">个人中心</div>
    </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
      list: [
        {id: 0, name: '新品推荐'},
        {id: 1, name: '鲜香锅底'},
        {id: 2, name: '优选丸子啊'},
        {id: 3, name: '爽口冷菜'},
        {id: 4, name: '养生菌菇'}
      ],
      currentCategory: {
        id: 2
      }
    }
  },
  props: {
    categoryList: ''
  },
  methods: {
    switchCategory (param) {
      this.currentCategory = param
    },
    per () {
      this.$router.push('/personal')
    }
  }
}
</script>

<style scoped lang='scss' rel='stylesheet/scss'>
  .container {
    width: 94px;
    background-color: #fff;
    height: 100%;
  }

  .item {
    .name {
      padding: 3px 10px;
      color: #666666;
      height: 25px;
      width: 100%;
      box-sizing: border-box;
      display: inline-block;
      border-left: 2px solid transparent;
      margin: 10px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .active {
    background-color: #f2f2f2;
    .name {
      color: #FF6868 ;
      border-left-color: #FF6868;
    }
  }
</style>
