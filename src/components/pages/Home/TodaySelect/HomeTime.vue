<template>
  <div class="times"  v-if = "this.offset != ''">
    <div class="time">
      <span class="time-span"></span>
      <div class="show">
        距离结束时间还有:
        <span>
          <i>{{Times.hours}}</i>时
        </span>
        <span>
          <i>{{Times.min}}</i>分
        </span>
        <span>
          <i>{{Times.scr}}</i>秒
        </span>
      </div>
    </div>
    
    <common-item :big="big"></common-item>
  </div>
</template>
<script>
import HomeClassify from './HomeClassify.vue'
import CommonItem from '../../../common/common-item'
import Vue from 'vue'
export default {
  name: 'HomeTime',
  components:{
    HomeClassify,
    CommonItem
  },
  props:['big'],
  data () {
    return {
      offset:'',
      Times:{scr:'', min:'',hours:'',day:''},
      big: [],
      Notime:function(){}
    }
  },
  methods: {
    getTime () {
      //由于没有数据，所以没有往后台访问数据
      this.$http.get('/meimei/h5/customer/info').then(res => {
        // console.log(res.data.data.registerTime);
        // console.log(res.data.data.serverTime);
        if(res.status === 200){
          // let Time =  res.data.data.serverTime - res.data.data.registerTime;
          // console.log(Time)
        }

      })
    },
    getBigcls(){
                this.$http.get('/meimei/h5/view/channel?id=1').then((res)=>{
                   this.big = res.data.data.components[4];
                   console.log(this.big)
                })
            },
    showTime () {
      this.offset = Math.round((Date.parse(this.end) - Date.now())/1000);
      //判断为0的时候清除时间
      if(this.offset < 0){
        clearInterval(this.Notime);
        this.offset = '';
      }
      this.Times.scr = this.offset % 60; // 秒
      this.Times.min = Math.round(this.offset/60)%60;
      this.Times.hours = Math.round(this.offset/60/60)%24;
      this.Times.day = Math.round(this.offset/60/60/24);
    }
  },
  beforeCreate() {
    this.end = '2018-8-8 00:35:00';  //设置过期时间
  },
  created() {
    this.Notime = setInterval(this.showTime,1000);
    this.getTime()
    this.getBigcls()
  }
}
</script>
<style scoped lang="scss">
  .time{
    height: 0.23rem;
    display: flex;
    justify-content:space-between;
    .time-span{
      width: 0.9rem;
      height: 0.2rem;
      display: inline-block;
      background: url(http://m.cn.memebox.com/images/app/home/include/discount-title.png?t=20177261458) no-repeat center center;
      background-size: contain;
    }
    .show{
      // width: 1.91rem;
      line-height: 0.2rem;
      i{
        color: #333;
        font-weight: 700;
        display: inline-block;
        border: 1px solid #666;
        border-radius: 3px;
        width: 0.18rem;
        height: 0.18rem;
        line-height: 0.18rem;
        text-align: center;
        margin-right: 2px;
        font-size: 11px;
      }
    }

  }
</style>


