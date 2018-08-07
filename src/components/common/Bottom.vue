<template>
    <div class="bottom">
        <router-link  :to = "navs.path" active-class = "active"
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
                id:1,title:'首页',name:'home',icon:'home',path:'/home'
            },
            {
                id:2,title:'分类',name:'classify',icon:'tablet',path:'/classify'
            },
            {
                id:3,title:'购物车',name:'car',icon:'cart-arrow-down',path:'/car'
            },
            {
                id:4,title:'我的',name:'mine',icon:'user',path:'/mine'
            }]
        }
    }
}
</script>
<style lang="scss" scoped>

    .bottom{
        z-index: 9000;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 0.5rem;
        a {
            background-color: #fff;
            float: left;
            width: 25%;
            height: 0.5rem;
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
