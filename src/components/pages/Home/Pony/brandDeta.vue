<template>
  <div class="brandDeta">
    <div class="brandDetaAll" >
      <a v-if = "De.cate_img">
        <img :src = "De.cate_img" >
      </a>
    </div>
    <div class="brandDeta-goods">
      <div class="goods-list  loding" v-for="(products,i) in De.products" :key= "i" >
        <img :src= "products.imgUrl">
        <p class="C-olor"><span>￥</span>{{products.price}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'brandDeta',
  props: ['De']
}
</script>

<style scoped lang="scss">
.brandDeta{
  padding-top:.05rem;
  height: 2.21rem;
  overflow: hidden;
  .brandDetaAll{
    padding-top:.05rem;
    width: 1.45rem;
    height: 100%;
    float: left;
    a{
      display:inline-block;
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }     
    }
  }
  .brandDeta-goods{
    height: 100%;
    float: right;
    width: 1.95rem;
    .goods-list{
      width: .87rem;
      height: .98rem;
      padding: .1rem;
      margin: .05rem .1rem .05rem 0;
      background: white;
      border-radius: 5px;
      float: left;
      img{
        width: .64rem;
        height: .64rem;
      }
      p{
        margin-top:.05rem; 
        span{
          font-size: 14px;
        }
      }
    }
  }
}
</style>


