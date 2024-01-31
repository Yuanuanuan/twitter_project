<template>
  <section>
    <div class="title">Setting for Accounts</div>
    <section class="set-form">
      <form>
        <BaseInput
          label="Account"
          name="account"
          v-model:input="newAccountData.account"
        />
        <BaseInput
          label="Username"
          name="username"
          v-model:input="newAccountData.username"
        />
        <BaseInput
          label="email"
          mode="email"
          name="email"
          v-model:input="newAccountData.email"
        />
        <BaseInput
          label="password"
          name="password"
          v-model:input="newAccountData.password"
        />
        <BaseInput
          label="Confirm Password"
          name="confirmPassword"
          v-model:input="newAccountData.confirmPassword"
        />
        <div class="save-btn">
          <button>Save</button>
        </div>
      </form>
    </section>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import BaseInput from "../UI/BaseInput.vue";

const currentAccountData = {
  // fake data
  account: "Test123",
  username: "Test1212",
  email: "Test123@example",
  password: "test123",
  confirmPassword: "test123",
};
const newAccountData = reactive(currentAccountData);
</script>

<style scoped lang="scss">
section {
  flex: 1;
  .title {
    height: 50px;
    padding-left: 12px;
    border-bottom: 1px solid #e6ecf0;
    font-size: 24px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .set-form {
    form {
      width: 600px;
      padding: 16px 0 0 12px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .save-btn {
        align-self: flex-end;
        button {
          appearance: none;
          width: 100px;
          height: 40px;
          border-radius: 50px;
          border: none;
          background-color: #ff6600;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
