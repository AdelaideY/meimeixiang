<template>
  <div class="uil-goodslist">
    <div class="Title">
      {{ title }}
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'UITgoodlist',
  props: ['title']
}
</script>
<style scoped lang = "scss">
  .uil-goodslist{
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    font-size: 15px;
    color: #ff5073;
    font-weight: bold;
  }
  slot{
    margin-bottom: 10px;
  }
</style>  

