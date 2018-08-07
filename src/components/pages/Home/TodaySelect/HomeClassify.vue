<template>
    <div class="home-classify">
        <!-- { name: 'user', params: { userId: 123 }}
        query: { plan: 'private' } -->
        <router-link :to="{name:'list',query:{listid: id}}">
            <img :src="big.component_bg_url" alt="">
        </router-link>
        <common-item :big="big"></common-item>
    </div>
</template>
<script>
import CommonItem from '../../../common/common-item'
    // 引入Vue
import Vue from 'vue'
// 引入 swiper插件
import Swiper from 'swiper'
    export default { 
        name: 'HomeClassify',
        props:['big','id'],
        components:{
            CommonItem
        }
    }
</script>
<style lang="scss" scoped>
    
</style>