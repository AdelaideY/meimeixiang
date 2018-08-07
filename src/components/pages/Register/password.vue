<template>
    <div class="pss">
        <input type="text" v-model="phone.value" placeholder="账号/手机">
        <input type="password" v-model="yanzhen.value" placeholder="验证码">
         <button @click="sendCode">发送验证码</button>
        <input type="password" v-model="mima" placeholder="密码" >
    </div>
</template>
<script>
export default {
  name: "password",
  props:['phone','yanzhen'],
  methods:{
      sendCode(){
          this.$http.get('/meimei/h5/sms/getAuth?userName='+this.phone.value+'&type=2')
          .then(res => {
            console.log(res)
              if(res.status === 200){
                  console.log('验证码发送成功')
              }
          })
      }
  }
}
</script>
<style lang="scss" scoped>
    input{
        padding-left: 0.3rem;
        display: block;
        width: 100%;
        line-height: 0.5rem;
        height:0.5rem;
        border: none;outline:none;
            background: none;
            font-size: 0.16rem;
    }
    button {
  position: fixed;
  right: 0.1rem;
  top: 1.1rem;
  color: #ff5073;
  background: #fff;
  border: 0.02rem solid #ff5073;
  border-radius: 0.05rem;
  width: 1.1rem;
  height: 0.34rem;
  line-height: 0.26rem;
}
</style>
