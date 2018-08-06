<template>
    <div class="pss">
        <input type="text" v-model="phone.value" placeholder="账号/手机">
        <input type="password" v-model="yanzhen.value" placeholder="验证码">
        <button @click="sendCode">发送验证码</button>
    </div>
</template>
<script>
export default {
  name: "tel",
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
  },
  mounted(){
    console.log(this.phone)
  },
  computed: {
    yzuser() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        alert("手机号码有误，请重填");
        return false;
      }
    },
    yzpass(){
        if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/.test(this.yanzhen)){
            alert('包含数字字母6到10位');
            return false;
        }
    }
  }
}
</script>
<style lang="scss" scoped>
input {
  padding-left: 0.3rem;
  display: block;
  width: 100%;
  line-height: 0.5rem;
  height: 0.5rem;
  border: none;
  outline: none;
  background: none;
  font-size: 0.16rem;
}
button {
  position: fixed;
  right: 0.1rem;
  top: 1.45rem;
  color: #ff5073;
  background: #fff;
  border: 0.02rem solid #ff5073;
  border-radius: 0.05rem;
  width: 1.1rem;
  height: 0.34rem;
  line-height: 0.26rem;
}
</style>
