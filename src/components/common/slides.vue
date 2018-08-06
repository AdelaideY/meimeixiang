<template>
  <div class="slides swiper-container" v-if = "datas" ref="el">
    <ul class="swiper-wrapper">
      <router-link class="swiper-slide"  
        v-for = "(value,i) in datas.items" 
        :key = "i"
        tag="li"  :to = "'/detail/' + value.productId"
        >
        <img :src="value.imgUrl"/>
        <div class="slides-box">
          <h2>{{ value.brandName }} {{ value.name }}</h2>
          <p class="slides-box-p">￥{{ value.price }}</p>
          <span  class="slides-box-span" 
            v-if = "datas.component_id == '7b30d507-7abc-5631-5385-963ec1e1c789'"
          >直降{{ value.originPrice - value.price }}</span>
          <p class="slides-box-p2" v-else>￥{{ value.originPrice }}</p>
        </div>
      </router-link >
      <li class="swiper-slide all-box">
        <a class="all">
          <span>查看全部</span>
          <br>
          See All
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
// 引入 swiper插件
import Swiper from 'swiper'

// 引入Vue
import Vue from 'vue'

export default {
  name: 'slides',
  props: ['datas'],
  methods: {
    getslides () {
        this.swiper = new Swiper(this.$refs.el, {
            slidesPerView: 'auto',
            resistanceRatio : 0
        })
    }
  },
  updated() {
    if ( this.swiper ) return false;
    this.getslides()
  },
  mounted () {
    if (this.datas.items) {
      this.getslides()
    }
  }
}
</script>
<style lang = "scss">
  .slides{
    box-sizing: border-box;
    padding:0.1rem 0 0.2rem 0.15rem;
    height: 1.89rem;
    .swiper-wrapper{
      display: flex;
      justify-content:space-between;
      /* overflow-x: auto; */
      .swiper-slide{
        width: 1.1rem;
        font-size: 12px;
        padding-right: 0.07rem;
        height: 1.73rem;
        img{
          width: 0.96rem;
          height: 0.96rem;
        }
        .slides-box{
          width: 100%;
          position: relative;
          height: 0.76rem;
          h2{
            width: 0.95rem;
            color: #333;
            white-space: normal;
            margin-top: 0;
            padding-bottom: 3px;
            height: 0.36rem;
            font-weight: 400;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          p{
            text-align: left;
          }
          .slides-box-p{
            height: 0.16rem;
            line-height: 0.16rem;
            /* color: $base-color; */
            color: #ff5959;
            i{
              font-size: 13px;
            }
          }
          .slides-box-span{
            padding: 0.02rem 0.05rem;
            background: -webkit-linear-gradient(left,#ff5073,#ff738f);
            color: #fff;
            font-size: 10px;
            line-height: 0.16rem;
          }
          .slides-box-span:before{
            position: absolute;
            top: 0.53rem;
            width: 0.06rem;
            height: 0.03rem;
            content: '';
            display: inline-block;
            background: url(http://m.cn.memebox.com/images/app/home/include/sharp.png?t=20177261458) no-repeat center center;
            background-size: contain;
          }
          .slides-box-p2{
            line-height: 0.16rem;
            /* width: ; */
            font-size: 10px;
            font-weight: 0;
            color: #aaaaaa;
            text-decoration:line-through;
          }
        }
      }
    }
    .all-box{
      .all{
        display:block;
        width: 100%;
        height: 100%;
        padding-top: 0.55rem;
        /* line-height: 1.70rem; */
        text-align: center;
        
        span{
          display: inline-block;
          border-bottom: 2px solid #aaaaaa;
          padding-bottom: 3px;
          font-size: 14px;
        }
    
      }
    }
  }
</style>
