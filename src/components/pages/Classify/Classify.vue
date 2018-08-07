<template>
  <div class="classify">
    <column></column>
    <Bottom></Bottom>
  </div>
</template>
<script>
// 引入它
import column from './column'
import Bottom from '../../common/Bottom'
export default {
  name: 'Classify',
  components:{
    column,
    Bottom
  }
}
</script>
<style scoped lang = "scss">
classify{
  height: 100%;
}
</style>
