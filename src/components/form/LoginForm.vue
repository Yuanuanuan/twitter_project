<!-- 用emit傳入登入時的function -->
<!-- 會回傳使用者輸入的登入資訊，在外部抓取 -->
<template>
  <form @submit.prevent="$emit('login', loginInfo)">
    <BaseInput
      label="Account"
      name="account"
      v-model:input="loginInfo.account"
    />
    <BaseInput
      label="Password"
      mode="password"
      name="password"
      v-model:input="loginInfo.password"
    />
    <button type="submit" class="login-btn">Login</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import BaseInput from "../UI/BaseInput.vue";

const loginInfo = reactive({
  account: "",
  password: "",
});
</script>

<style scoped lang="scss">
form {
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  button {
    appearance: none;
    width: 100%;
    height: 46px;
    border: none;
    font-size: 16px;
    margin: 4px 0;
    cursor: pointer;
  }
  .login-btn {
    background-color: #ff6600;
    color: #fff;
    border-radius: 50px;
  }
}
</style>
