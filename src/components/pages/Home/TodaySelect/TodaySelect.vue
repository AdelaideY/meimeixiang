<template>
    <div id = "app-container">
      <home-carousel></home-carousel>
      <home-section></home-section>
      <home-active></home-active>
      <home-time>
        
      </home-time>
      <home-big-classify></home-big-classify>
      <home-special></home-special>
    </div>
  </template>
  
  <script>
  // 引入轮播图
  
  import HomeTime from './HomeTime.vue'
  import HomeSection from '../HomeSection.vue'
  import HomeSpecial from './special.vue'
  import HomeCarousel from './HomeCarousel'
  import HomeActive from './HomeActive'
  import HomeBigClassify from './HomeBigClassify'
  export default {
    name: 'TodaySelect',
    components: {
      HomeCarousel,
      HomeActive,
      HomeBigClassify,
      HomeSpecial,
      HomeSection,
      HomeTime
    }
  }
  </script>
  <style lang="scss" scoped>
      #app-container{
        padding-top: 0.4rem;
          flex:1;
          height: 30rem;
          overflow-x: hidden;
      }
  </style>