<template>
    <div class="home-special"
v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
    >
        <uiTitle title="为你推荐">
            <specialBox 
                v-for="(special,i) in specials"
                :key="i"
                :data="special"

            >
            </specialBox>
        </uiTitle>
    </div>
</template>
<script>
let aaa = document.documentElement.offsetHeight -
        document.documentElement.clientHeight -
        document.documentElement.scrollTop
import { InfiniteScroll,Indicator } from "mint-ui";
import Vue from "vue";
Vue.use(InfiniteScroll);
Vue.use(Indicator)
import UiTitle from "../../../common/Title";
import SpecialBox from "./SpecialBox";
export default {
  name: "home-special",
  data() {
    return {
      specials: [],
      pageSize: 20,
      page: 1,
      loading: false
    };
  },
  methods: {
    getSpecial() {
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
      this.$http
        .get("/meimeimobilev496/view/channelProducts/", {
          params: {
            categoryId: 4204,
            totalCount: 200,
            pageSize: 20,
            page: this.page
          }
        })
        .then(res => {
           Indicator.close();
          this.specials = this.specials.concat(res.data.data.items);
        });
    },
    loadMore() {
          console.log(this.page)
      if(this.page>=7){return false}
      this.page++;
      this.getSpecial();
    }
  },
  created() {
    this.getSpecial();
  },
  components: {
    SpecialBox,
    UiTitle
  }
};
</script>
<style lang="scss" scoped>
.home-special {
    padding-bottom: 0.5rem;
  overflow: hidden;
  background-color: #efeff4;
}
</style>
