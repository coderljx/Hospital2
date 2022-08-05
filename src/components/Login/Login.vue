<template>

  <div class="login">
    <div class="login_content">
      <input placeholder="用户名" ref="name" class="name">
      <input placeholder="密码" ref="psd" class="psd">
      <button @click="submit"> 登陆 </button>
    </div>

  </div>

</template>

<script lang="ts" setup>
import {
  defineProps,
  defineEmits,
  getCurrentInstance,
  defineComponent,
  ref,
  nextTick,
  onMounted,
  onUpdated,
  reactive,
  toRefs
} from "vue"
import {Login} from "./LoginBase.ts";

let {proxy} : any = getCurrentInstance();
let router = proxy.$router;
let login = new Login();

let name = "";
let psd = "";


const submit = function () {
  name = document.getElementsByClassName("name")[0].value;
  psd = document.getElementsByClassName("psd")[0].value;

  if ( name != null && psd != null ) {
    let res = login.GetUserInfo({name: name, psd: psd});
    res.then(( data ) => {
      if (data.data.code == 200) {
        sessionStorage.removeItem("user");
        sessionStorage.setItem("user", JSON.stringify( data.data.data ) );
        proxy.$Store.commit("SetUserInfo", data.data.data );
        router.push("/home");
      }
    })

  }

}


</script>

<style>

</style>
