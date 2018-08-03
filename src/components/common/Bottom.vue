<template>
    <div class="bottom">
        <router-link exact :to = "{name: navs.name}" active-class = "active"
            v-for="navs in navs"
            :key="navs.id"
        >
            <icon :name = "navs.icon"></icon>
            <span>{{navs.title}}</span>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'Bottom',
    data (){
        return {
            navs: [{
                id:1,title:'首页',name:'home',icon:'home'
            },
            {
                id:2,title:'分类',name:'classify',icon:'file-text'
            },
            {
                id:3,title:'购物车',name:'car',icon:'cart-arrow-down'
            },
            {
                id:4,title:'我的',name:'mine',icon:'user-o'
            }]
        }
    }
}
</script>
<style lang="scss" scoped>

    .bottom{
        display: flex;
        justify-content: space-between;
        a {
            flex-grow: 1;
            height: 100%;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: space-around;
            &.active {
                color: red;
            }
        }
    }
</style>
