<template>
    <div class="bottom">
<<<<<<< HEAD
        <router-link  :to = "navs.path" active-class = "active"
=======
        <router-link exact :to = "{name: navs.name}" active-class = "active"
>>>>>>> 940c98213fa7b15d4eb64189c1cabf184f6f7bd0
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 940c98213fa7b15d4eb64189c1cabf184f6f7bd0
            }]
        }
    }
}
</script>
<style lang="scss" scoped>

    .bottom{
<<<<<<< HEAD
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
=======
        display: flex;
        justify-content: space-between;
        a {
            flex-grow: 1;
            height: 100%;
>>>>>>> 940c98213fa7b15d4eb64189c1cabf184f6f7bd0
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
