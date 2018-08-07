<template>
  <div class="detail">
    <div class="nav">
      <div @click="$router.go(-1)">
        <icon name="angle-left" class="goBack" ></icon>
      </div>
      <div @click="$router.push('/home')">
        <icon name = "home" class="goHome"></icon>
      </div>
      
    </div>
    <div class="bottom">
      <router-link to="/car" class="car">
        <icon name="cart-arrow-down" class="sc"></icon>
      </router-link>
      <button>加入购物车</button>
    </div>
    <div class="details-banner">
      <img width="100%" style="vertical-align: top;" :src="detailGood.img">
    </div>
    <div class="promotion-header" v-if = "offset != ''">
        <div class="title"><span>限时特价</span></div>
        <div class="Time">
          <p>距离结束</p>
          <p>
            <span>{{Times.day}}</span>天
            <span>{{Times.hours}}</span>时
            <span>0{{Times.min}}</span>分
            <span>{{Times.scr}}</span>秒
          </p>
        </div>
      
    </div>
    <div class="product-introduce">
      <div class="product-title">
        <h2>{{detailGood.brandName}}{{detailGood.name}}</h2>
        <span>已售{{detailGood.soldNum}}件</span>
        <span><em>{{detailGood.commentRate}}</em>好评</span>
      </div>
      <div class="box">
        <span class="label" style="color: rgb(247, 106, 125);">限时价</span>
        <span class="label" style="  color: rgb(255, 126, 40);">
          爆款
        </span>
      </div>
      <div class="brandInfo-wrap">
        <img class="brandInfo-logo" :src="detailGood.brandLogo">
        <a>
          {{detailGood.brandName}}
          <icon name="angle-right" class="go"></icon>
        </a>
      </div>
      <div class="snap">
        <span class="we"><em>限时抢</em> ￥{{detailGood.specialPrice}}<em class="em-border">￥{{detailGood.originPrice}}</em></span>
        <span class="bor">美美价{{detailGood.originPrice}}</span>
      </div>
    </div>
    <div class="product-information">
        <p class="tu">图文详情</p>
        <p class="imgurl" v-html="detailGood.detail">
        </p>
    </div>

  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      detailGood: [],
      offset: "",
      Times: { scr: "", min: "", hours: "", day: "" },
      Notime: function() {}
    };
  },
  methods: {
    getDele() {
      this.$http
        .get("/meimei/h5/product/detail?", {
          params: {
            productId: this.$router.history.current.params.id
          }
        })
        .then(res => {
          this.detailGood = res.data.data;
        });
    },
    getTime() {
      this.$http
        .get("/meimei/global/price?productIds=25438", {
          params: {
            productIds: this.$router.history.current.params.id
          }
        })
        .then(res => {
          console.log(res);
          console.log(res.data[0].serverTime);
          if (res.status === 200) {
            // let Time =  res.data.data.serverTime - res.data.data.registerTime;
            // console.log(Time)
          }
        });
    },
    showTime() {
      this.offset = Math.round((Date.parse(this.end) - Date.now()) / 1000);
      //判断为0的时候清除时间
      if (this.offset < 0) {
        clearInterval(this.Notime);
        this.offset = "";
      }
      this.Times.scr = this.offset % 60; // 秒
      this.Times.min = Math.round(this.offset / 60) % 60;
      this.Times.hours = Math.round(this.offset / 60 / 60) % 24;
      this.Times.day = Math.round(this.offset / 60 / 60 / 24);
    }
  },
  beforeCreate() {
    this.end = '2018-8-8 00:00:00';  //设置过期时间
  },
  created() {
    this.getDele();
    // this.getTime()
    this.Notime = setInterval(this.showTime,1000);
  }
};
</script>
<style scoped lang = "scss">
.detail {
  .nav {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 10;
    height: 0.44rem;
    padding: 0 0.1rem;
    line-height: 0.44rem;
    .goBack {
      position: absolute;
      top: 10px;
      border: 1px solid #ccc;
      border-radius: 50%;
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      left: 0;
      background: #999;
      color: #fff;
    }
    .goHome {
      right: 10px;
      position: absolute;
      top: 10px;
      border: 1px solid #ccc;
      border-radius: 50%;
      display: inline-block;
      width: 0.3rem;
      background: #999;
      font-size: 12px;
      height: 0.3rem;
      color: #fff;
    }
  }
  .bottom{
    background-color: #fff;
    border-top: 1px solid #ccc;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.5rem;
      z-index: 50000;
    .car{
      background-color: #fff;
      display: inline-block;
      width: 20%;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      .sc{
        width: 0.2rem;
        height: 0.2rem;
      }
    }
    button{
      height: 0.5rem;
      display: inline-block;
      width: 75%;
          background-color: #ff5073;
    color: #fff;
    border: 0;
    font-size: 0.15rem;
    border-radius: 0;
    }
  }
  .details-banner {
    img {
      width: 100%;
      height: 3.75rem;
    }
  }
  .promotion-header {
    /* overflow: hidden; */
    height: 0.45rem;
    line-height: 0.45rem;
    background: url(http://m.cn.memebox.com/images/app/promotionBg.png)
      no-repeat center center;
    background-size: cover;
    padding: 0 0.1rem;
    color: #fff;
    .title {
      display: block;
      float: left;
      width: 2.2rem;
      font-size: 0.14rem;
      span {
        display: initial-block;
        max-width: 100%;
        height: 0.25rem;
        padding: 0.03rem 0.08rem;
        background: #ff70ae;
        border-radius: 0.075rem;
        line-height: 0.25rem;
        font-style: normal;
        margin-right: 0.05rem;
        margin-top: -0.02rem;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .Time {
      float: right;
      width: 1.2rem;
      /* line-height: 0.24; */
      height: 100%;
      /* height: 0.32rem; */
      text-align: center;
      p {
        height: 0.2rem;
        text-align: center;
        line-height: 0.24rem;
      }
    }
  }
  .product-introduce {
    padding: 0.15rem;
    margin-bottom: 0.15rem;
    .product-title {
      height: 0.44rem;
      font-size: 14px;
      color: #333;
      /* line-height: 0.44rem; */
      h2 {
        float: left;
        height: 100%;
        width: 2.6rem;
        font-weight: 400;
        border-right: 1px solid #ccc;
      }
      span {
        color: #999;
        font-size: 12px;
        float: right;
        height: 50%;
        display: block;
        em {
          color: #ff70ae;
        }
      }
    }
    .box {
      margin-top: 0.1rem;
      .label {
        border: 0;
        color: inherit;
        position: relative;
        display: inline-block;
        font-size: 0.1rem;
        padding: 0 0.05rem;
        height: 0.18rem;
        line-height: 0.18rem;
        text-align: center;
        margin: 0 0.02rem;
      }
    }
    .brandInfo-wrap {
      position: relative;
      height: 0.7rem;
      padding: 0.15rem 0.5rem 0.15rem 0;
      .brandInfo-logo {
        height: 0.38rem;
        width: 0.38rem;
        display: inline-block;
        background-color: #f0f0f0;
        /* float: left; */
        left: 0;
        border: 1px #c8c7cc solid;
      }
      a {
        float: right;
        display: block;
        width: 2.4rem;
        height: 0.2rem;
        .go {
          position: absolute;
          right: 0.08rem;
          font-size: 12px;
        }
      }
    }
    .snap {
      border-top: 1px solid rgb(233, 230, 230);
      padding-top: 0.1rem;
      height: 0.47rem;
      span {
        color: #ff5073;
        margin-right: 0.04375rem;
        font-size: 0.18rem;
        font-weight: 0;
        em {
          font-size: 0.14rem;
          color: #434343;
        }
        .em-border {
          color: #999;
          font-size: 0.1rem;
          margin-left: 10px;
          text-decoration: line-through;
        }
      }
      .bor {
        display: block;
        font-size: 0.14rem;
        color: #999;
      }
      .we {
        font-weight: 400;
      }
    }
  }
  .product-information {
    .tu {
      padding-left: 0.15rem;
      height: 0.4rem;
      line-height: 0.4rem;
      color: #434343;
      font-weight: 400;
      font-size: 15px;
    }
    .imgurl {
      margin: 0.15rem;
      height: 300px;
    }
  }
}
</style>