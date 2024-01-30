<template>
  <section>
    <div class="title">
      <h1>Sign up</h1>
    </div>
    <form @submit.prevent="handleSubmit">
      <BaseInput
        label="Account"
        name="account"
        v-model:input="registData.account"
      />
      <BaseInput
        label="Username"
        name="username"
        v-model:input="registData.username"
      />
      <BaseInput
        label="Email"
        mode="email"
        name="email"
        v-model:input="registData.email"
      />
      <BaseInput
        label="Password"
        name="password"
        v-model:input="registData.password"
      />
      <BaseInput
        label="Confirm Password"
        name="confirmPassword"
        v-model:input="registData.confirmPassword"
      />
      <div class="buttons">
        <button class="regist-btn" type="submit">Regist</button>
        <button class="cancel-btn" type="button">
          <RouterLink to="/login">Cancel</RouterLink>
        </button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import BaseInput from "../UI/BaseInput.vue";

const registData = reactive({
  account: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

function handleSubmit() {
  // check regist data is valid
  // submit regist data
  console.log(registData);
}
</script>

<style scoped lang="scss">
section {
  width: 100%;
  height: 100vh;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    margin: 2.5rem 0;
    h1 {
      font-size: 2rem;
      color: #ff4000;
    }
  }
  form {
    width: 540px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    .buttons {
      width: 100%;
      button {
        appearance: none;
        width: 100%;
        height: 46px;
        border: none;
        font-size: 16px;
        margin: 4px 0;
        cursor: pointer;
      }
      .regist-btn {
        background-color: #ff6600;
        color: #fff;
        border-radius: 50px;
      }
      .cancel-btn {
        background-color: transparent;
        a {
          color: #0099ff;
        }
      }
    }
  }
}
</style>
