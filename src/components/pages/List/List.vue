<template>
    <div class="app-list">
        <img :src="info.component_bg_url" alt="">
        <specialBox
                v-for="(special,i) in specials"
                :key="i"
                :data="special"
            >
            </specialBox>
    </div>
</template>
<script>
import SpecialBox from '../Home/TodaySelect/SpecialBox'
export default {
    name:'AppList',
    data(){
        return {
            listid : this.$route.query.listid,
            info:'',
            specials:''
        }
    },
    methods: {
        getinfo(){
            this.$http.get('/meimei/h5/view/channel?id=1').then((res)=>{
                this.listid*=1
                this.info = res.data.data.components.slice(5)[this.listid]
                this.specials = this.info.detail.items
            })
        }

    },
    created(){
        this.getinfo()
    },
    components:{
        SpecialBox
    }
}
</script>
