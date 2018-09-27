<template>
  <div class="container">
    <div class="top">
      <div class="pay clearfloat">
        <div class="fl label">应付金额</div>
        <div class="fr text">¥370.00</div>
      </div>
      <div class="table clearfloat">
        <div class="fl label">桌台号</div>
        <div class="fr text">A23</div>
      </div>
      <div class="receive clearfloat">
        <div class="fl label">收款方</div>
        <div class="fr text">南京川玥火锅城</div>
      </div>
    </div>
    <div class="main">

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
    return {}
  },
  methods: {
    route () {}
  }
}
</script>

<style scoped lang='scss' rel='stylesheet/scss'>
  .container {
    background-color: #f2f2f2;
    min-height: 667px;
  }

  .top {
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
  }

  .pay, .table, .receive {
    height: 40px;
    line-height: 40px;
  }

  .top .pay .text {
    color: #ff6868;
  }

  .top .text {
    color: #666;
  }

  .top .label {
    font-size: 16px;
    font-weight: 600;
  }

  .main {
    padding: 20px;
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
