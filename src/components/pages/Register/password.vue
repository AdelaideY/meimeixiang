<template>
    <div class="pss">
        <input type="text" v-model="phone" placeholder="账号/手机" @blur="yzuser">
        <input type="password" v-model="mima" placeholder="密码" @blur="yzpass">
    </div>
</template>
<script>
export default {
  name: "password",
  data() {
    return {
      phone: "",
      mima: ""
    };
  },
  computed: {
    yzuser() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        alert("手机号码有误，请重填");
        return false;
      }
    },
    yzpass(){
        if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/.test(this.mima)){
            alert('包含数字字母6到10位');
            return false;
        }
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
</style>
