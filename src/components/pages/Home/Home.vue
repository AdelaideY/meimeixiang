<template>
  <div id = "app-home">
    <home-search-bar></home-search-bar>
    <home-stion></home-stion>
    <Bottom></Bottom>
  </div>
</template>

<script>
// 引入轮播图
import Bottom from '../../common/Bottom'
import HomeStion from './HomeStion'
import HomeSection from './HomeSection'
import HomeSearchBar from './HomeSearchBar'
export default {
  name: 'AppHome',
  components: {
    HomeSection,
    HomeSearchBar,
    HomeStion,
    Bottom
  }
}
</script>
<style lang="scss" scoped>
 
</style>