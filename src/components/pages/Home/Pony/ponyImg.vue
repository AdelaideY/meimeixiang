<template>
  <div class="pony-banner">
    <a v-for = "(ponyImgs,i) in ponyImgs" :key="i">
      <img style="vertical-align: top;" width="100%" v-lazy="ponyImgs.banner_img">
    </a>
  </div>
</template>
<script>
export default {
  name: 'ponyImg',
  props:['ponyImgs']
}
</script>
<style scoped lang="scss">
.pony-banner{
  padding: .1rem .15rem;
  width: 100%;
  height: 1.92rem;
  a{
    width: 100%;
    height: 100%;
  }
}
</style>
