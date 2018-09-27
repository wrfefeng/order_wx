<template>
  <div class="container">
    <div class="card">
      <div class="store-name">南京川玥火锅城</div>
      <div class="grade">钻石会员</div>
    </div>
    <div class="card-no">15151401910</div>
    <div class="item">
      <div class="col">我的资料</div>
      <div class="col">我的账户</div>
      <div class="col">我的消费</div>
      <div class="col">我的预定</div>
      <div class="col">会员等级说明</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default{
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.container {
  min-height: 600px;
  padding: 20px;
  background-color: #f2f2f2;
}

  .card {
    height: 140px;
    width: 100%;
    background-color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .store-name {
    font-size: 16px;
    padding: 10px;
    font-weight: 700;
  }

  .grade {
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #ff6868;
  }

  .card-no {
    height: 44px;
    line-height: 44px;
    background-color: #ff6868;
    color: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0 10px;
  }

  .item {
    margin-top: 20px;
    min-height: 364px;
    background-color: #ffffff;
    border-radius: 5px;
    padding-left: 10px;
    padding-top: 10px;

    .col {
      height: 50px;
      line-height: 50px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      padding-right: 10px;
    }
  }
</style>
