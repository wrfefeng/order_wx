<template>
  <div class="">
    <home-header></home-header>
    <div ref="main" class="main">
      <div class="left">
        <left-nav :category-list="categoryList"></left-nav>
      </div>
      <div class="right">
        <div class="item" v-for="item in dish" :key="item.category.id">
          <div class="item-label clearfloat">
            <div class="line"></div>
            <div class="label-text">{{item.category.name}}</div>
          </div>
          <div class="no-dish" v-if="!item.data.length">该分类暂无菜品</div>
          <div class="dish-item clearfloat" v-if="item.data.length" v-for="val in item.data" :key="val.id">
            <div class="dish-img ">
              <img :src="val.image" alt="">
            </div>
            <div class=" dish-info">
              <div class="dish-name">{{val.name}}</div>
              <div class="dish-price">¥{{val.price}}/{{val.unit}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="btn fr" @click="route">下单</div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import HomeHeader from '../../components/home-header'
import LeftNav from '../../components/left-nav'
export default {
  data () {
    return {
      dish: [],
      categoryList: []
    }
  },
  components: {
    HomeHeader,
    LeftNav
  },
  created () {
    // this.$message.showHandle('新增成功')
    // this.$notice.showHandle('asd')
    this.getDish()
  },
  mounted () {
    this.$refs['main'].style.height = document.body.clientHeight - 100 + 'px'
  },
  methods: {
    route () {
      this.$router.push({
        path: '/orderPreview',
        query: {
          table: 456
        }
      })
    },
    // 获取菜品列表
    getDish () {
      this.$get('/dishes/menu/')
        .then(res => {
          console.log(res)
          let obj = {}
          obj.id = 0
          obj.name = res.data[0].category
          res.data[0].category = obj
          this.dish = res.data
          this.categoryList = []
          for (let i = 0; i < this.dish.length; i++) {
            let categoryObj = {}
            categoryObj.label = this.dish[i].category.name
            categoryObj.id = this.dish[i].category.id
            this.categoryList.push(categoryObj)
          }
        })
        .catch(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped lang='scss' rel='stylesheet/scss'>
  .main {
    display: flex;
    background-color: #f2f2f2;
  }

  .left {
    width: 94px;
  }

  .right {
    flex: 1;
    overflow: auto;
    padding: 0 10px 0 10px;
    .item-label {
      box-sizing: border-box;
      padding: 10px 20px 10px 20px;
      margin-bottom: 10px;
      height: 33px;
      position: relative;
      .line {
        border-top: 1px solid #999;
        margin-top: 15px;
      }
      .label-text {
        position: absolute;
        text-align: center;
        padding: 0 10px;
        color: #999;
        background-color: #f2f2f2;
        left: 50%;
        right: 50%;
        width: 90px;
        transform: translate(-50%, -50%); /* 50%为自身尺寸的一半 */
      }
    }

    .dish-item {
      display: flex;
      height: 110px;
      padding: 10px;
      box-sizing: border-box;
      background-color: #fff;
      margin-top: 10px;
      .dish-img {
        width: 90px !important;
        height: 90px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .dish-info {
        width: calc(100% - 90px);
        margin-left: 15px;
        .dish-name {
          font-size: 14px;
          color: #666;
          overflow:hidden;
          text-overflow:ellipsis;
          display:-webkit-box;
          -webkit-line-clamp: 2;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
        }
        .dish-price {
          color: #ff6868;
          margin-top: 5px;
          font-size: 16px;
        }
      }
    }
  }

  .footer {
    height: 50px;
    background-color: #fafafa;
    border-top: 1px solid #ccc;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    z-index: 999;
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

  .no-dish {
    padding: 10px;
    text-align: center;
    color: #666;
  }
</style>
