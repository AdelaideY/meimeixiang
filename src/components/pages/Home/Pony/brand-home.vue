<template>
  <div class="brand-home" style="background: url(&quot;http://avatar.cn.memebox.com/avatar/2018/4/11/dae66970-fd9c-4f18-b0d9-2593f6f71a93.jpeg&quot;);">
    <div class="brand-component-home" >
      <ul>
        <li 
          v-for="(brandHomes,i) in brandHomes" 
          :key="brandHomes.category_id"
          @click="getDe(i)"
          :class="[DeClass === i ? 'groud' : '']"
        >
        {{brandHomes.cate_name }}
        </li>
      </ul>
      <brandDeta :De = "De"></brandDeta>
    </div>
  </div>
</template>
<script>
import brandDeta from './brandDeta'
import Vue from 'vue'
export default {
  name: "brand-home",
  props:['brandHomes'],
  data () {
    return {
      De: [],
      DeClass:0
    }
  },
  methods: {
    getDe (num = 0) {
      this.DeClass = num;
      if(this.brandHomes[num].position === '0' || '1' || '2' || '3' ){
          this.De = this.brandHomes[num];
      }
    }
  },
  updated () {
    if(this.De.length === 0){
      this.De = this.brandHomes[0]
    }
  },
  components: {
    brandDeta
  }
};
</script>
<style scoped lang="scss">
.brand-home{
  .brand-component-home{
    padding: .1rem;
    ul{
        height: 0.45rem;
        display: flex;
        flex-direction:row;
        background: white;
        border-radius: 5px;
        text-align: center;
        line-height: .45rem;
      li{
        width: 25%;
        color: #333;
        font-size: 16px;
      }
      .groud{
        border-radius: 5px;
        // border-top-right-radius: 0;
        // border-bottom-right-radius: 0;
        color:#fff;
        background: rgb(88, 127, 138);
      }
    }
  }
}
</style>
