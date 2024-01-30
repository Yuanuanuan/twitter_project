<template>
  <section>
    <LogoIcon :width="60" :height="60" />
    <h1>BackStage Log in</h1>
    <form @submit.prevent="login">
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
    <div class="foot">
      <RouterLink to="/login">FrontStage</RouterLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";
import BaseInput from "../UI/BaseInput.vue";
import LogoIcon from "../icons/LogoIcon.vue";

const router = useRouter();

const loginInfo = reactive({
  account: "",
  password: "",
});

function login() {
  console.log(loginInfo);
  router.push("/");
}
</script>

<style scoped lang="scss">
section {
  width: 100%;
  height: 100vh;
  padding-top: 4rem;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 1rem 0 2rem;
    font-size: 2rem;
    color: #ff4000;
  }
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
  .foot {
    width: 540px;
    margin: 0.5rem 0.5rem 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    a {
      margin: 0 0.4rem;
      color: #0099ff;
    }
  }
}
</style>
