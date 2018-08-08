<template>
    <div class="app-list">
        <div class="nav">
      <div @click="$router.go(-1)">
        <icon name="angle-left" class="goBack" ></icon>
      </div>
      <div @click="$router.push('/home')">
        <icon name = "home" class="goHome"></icon>
      </div>
      
    </div>
        <img :src="info.component_bg_url" alt="">
        <specialBox
                v-for="(special,i) in specials"
                :key="i"
                :data="special"
            >
            </specialBox>
    </div>
</template>
<script>
import SpecialBox from '../Home/TodaySelect/SpecialBox'
export default {
    name:'AppList',
    data(){
        return {
            listid : this.$route.query.listid,
            info:'',
            specials:''
        }
    },
    methods: {
        getinfo(){
            this.$http.get('/meimei/h5/view/channel?id=1').then((res)=>{
                this.listid*=1
                this.info = res.data.data.components.slice(5)[this.listid]
                this.specials = this.info.detail.items
            })
        }

    },
    created(){
        this.getinfo()
    },
    components:{
        SpecialBox
    }
}
</script>
<style lang="scss" scoped>
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
</style>
