<template>
    <div class="app-header">
        <span @click = "$router.go(-1)">
            <icon name = "angle-left"></icon>
        </span>
        <p @click="aaa">{{middle}}</p>
        <router-link :to="fangshi" >{{right}}</router-link>
    </div>
</template>
<script>
export default {
    name: 'AppHeader',
    props:['middle','right','fangshi'],
    methods:{
         aaa(params) {
            console.log(this.middle)
        }
    }
}
</script>
<style lang="scss" scoped>
    .app-header {
        width: 100%;
        padding: 0px 0.15rem;
        height: 0.5rem;
        line-height: 0.5rem;   
        background: #ff5073; 
        display: flex;
        justify-content: space-between; 
        color: #fff;
        font-size: 0.16rem;  
        a {
            width: 15%;
            font-size: 0.24rem;
            color: #fff;
        }
        a:last-child{
            font-size: 0.14rem;
        }
        p{
            flex: 1;
            text-align: center;
        }
    }
</style>
