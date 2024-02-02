<template>
  <section>
    <div class="title">Setting for Accounts</div>
    <section class="set-form">
      <AccountForm @handleSubmit="handleSubmit" :formData="newAccountData">
        <div class="save-btn">
          <button>Save</button>
        </div>
      </AccountForm>
    </section>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import AccountForm from "../form/AccountForm.vue";
import { IRegistData } from "../../types";

const currentAccountData = {
  // 看能不能讀快取
  // fake data
  account: "Test123",
  username: "Test1212",
  email: "Test123@example",
  password: "test123",
  confirmPassword: "test123",
};

const newAccountData = reactive(currentAccountData);

function handleSubmit(data: IRegistData) {
  console.log(data);
}
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
    padding: 12px;
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
</style>
