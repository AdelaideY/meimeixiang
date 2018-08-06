<template>
  <div class="pony">
    <pony-img :ponyImgs = "ponyImgs"></pony-img>
    <brandHome :brandHomes = "brandHomes"></brandHome>
  </div>
</template>
<script>
// 图片
import ponyImg from './ponyImg'
// 导航栏
import brandHome from './brand-home'
export default {
  name: 'pony',
  data () {
    return {
      ponyImgs: [],
      brandHomes:[]
    }
  },
  components: {
    ponyImg,
    brandHome
  },
  methods: {
    getPony () {
      this.$http.get('/meimei/h5/view/channel?',{
        params: {
          id:6
        }
      }).then(res => {
        this.ponyImgs = res.data.data.components["0"].items;

        this.brandHomes = res.data.data.components["1"].items;
        
      })
    }
  },
  created() {
    this.getPony()
  }
}
</script>
