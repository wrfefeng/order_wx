<template>
  <div class="container">
    <div class="order">
      <div class="consumer clearfloat">
        <div class="fl">A23/6</div>
        <div class="fr"></div>
      </div>
      <div class="notice">注：先上冷菜</div>
    </div>
    <div class="list-label clearfloat">
      <div class="fl">菜品清单</div>
      <div class="fr"></div>
    </div>
    <div class="table">
      <div class="table-header clearfloat">
        <div class="fl dish-name">菜名</div>
        <div class="fl dish-price">单价</div>
        <div class="fr dish-count">数量</div>
      </div>
      <div class="table-body">
        <div class="item clearfloat" v-for="val in list" :key="val.id">
          <div class="dish-name fl">{{val.name}}</div>
          <div class="dish-price fl">¥ {{val.price}}</div>
          <div class="dish-count fr">×1</div>
        </div>
      </div>
    </div>
    <div class="footer clearable">
      <div class="fl price">
        共27.09
        &nbsp;
        &nbsp;
        合计¥279.00
      </div>
      <div class="btn fr" @click="route">下单</div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
      list: [
        {id: 0, name: '重庆炒料麻辣大锅', price: 69.00},
        {id: 1, name: '香菇', price: 8.00},
        {id: 2, name: '青菜', price: 7.00},
        {id: 3, name: '油条', price: 12.08},
        {id: 4, name: '水煮鱼', price: 40.00}
      ]
    }
  },
  methods: {
    route () {
      this.$router.push({
        path: '/settle'
      })
    }
  }
}
</script>

<style scoped lang='scss' rel='stylesheet/scss'>
  .container {
    background-color: #fff;
    min-height: 667px;
  }

  .order {
    padding: 10px;
  }

  .consumer {
    font-size: 18px;
  }

  .notice {
    font-size: 14px;
    margin-top: 10px;
    color: #666;
  }

  .list-label {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    border-top: 1px solid #ccc;
    background-color: #f2f2f2;
  }

  .table {
    padding-left: 20px;
    /*margin-right: 20px;*/
    .table-header {
      height: 50px;
      line-height: 50px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      .dish-name {
        width: 200px;
        padding-left: 10px;
      }
      .dish-price {
        width: 60px;
      }
      .dish-count {
        margin-right: 20px;
      }
    }
  }

  .table-body {
    .item {
      padding: 7px 0;
      color: #666666;
    }
    padding: 0 10px;
    .dish-name {
      width: 200px;
    }
    .dish-count {
      margin-right: 20px;
    }

    .dish-price {
      width: 60px;
    }
  }

  .footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    border-top: 1px solid #ccc;
    background-color: #fafafa;
    .btn {
      width: 94px;
      background-color: #ff6868;
      height: 100%;
      line-height: 50px;
      text-align: center;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 5px;
    }
  }

  .footer .price {
    padding-left: 10px;
    color: #ff6868;
    font-size: 18px;
  }
</style>
