<template>
    <div class="app-login">
      <app-header :middle="middle" :right="right"  :fangshi="fangshi"></app-header>
        <div class="login-nav">
            <p 
            v-for="(logins,i) in logins" 
            :key="i"
            :class="{ 'active' : (index === i)}"
            @click="index = i"
            >
            {{logins.contain}}
            </p>
        </div>
        <tel v-if="index" :phone="phone" :yanzhen="yanzhen"></tel>
        <password v-else ></password>

        <div class="but">
            <button @click="submit">即刻登录 坐享花样美妆</button>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
import password from "./password"
import tel from "./tel"
import AppHeader from "../../common/APPHeader"
export default {
  name: "AppLogin",
  data() {
    return {
      logins: [
        {
          contain: "账号密码登录"
        },
        {
          contain: "手机号快速登录"
        }
      ],
      middle:'登录',
      right:'注册',
      fangshi:'register',
      index: 0,
      phone: {value:''},
      yanzhen:{value:''}
    };
  },
  methods: {
    submit() {
        axios({
            url: '/meimei/h5/customer/quickLogin',
            method: 'post',
            data: {
                phone: this.phone.value*1,
                authCode: this.yanzhen.value*1
            },
            transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
          
        });
    },
    aa(){
      console.log(this.middle)
    }
  },
  mounted(){
    this.aa()
  },
  components: {
    AppHeader,
    password,
    tel
  }
};
</script>
<style lang="scss" scoped>
.app-login {
  width: 100%;
  .login-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.12rem;
    p {
      line-height: 0.39rem;
      text-align: center;
      height: 0.39rem;
      width: 50%;
    }
    .active {
      color: #ff5073;
      border-bottom: 2px solid #ff5073;
    }
  }
  .but {
  }
  button {
    width: 70%;
    display: block;
    height: 0.34rem;
    line-height: 0.34rem;
    font-size: 0.14rem;
    text-align: center;
    color: #fff;
    margin-top: 0.23rem;
    border: 0;
    margin: 0.23rem auto;
    background-color: #ff5073;
  }
}
</style>
