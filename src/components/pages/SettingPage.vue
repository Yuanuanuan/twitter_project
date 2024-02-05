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
import { useUserStore } from "../../store";

const userStore = useUserStore();

const { account, username, email } = userStore.userInfo;

const currentAccountData = {
  account,
  username,
  email,
  password: "",
  confirmPassword: "",
};

const newAccountData = reactive(currentAccountData);

function handleSubmit(data: IRegistData) {
  if (data === currentAccountData) return;

  console.log(data);
  console.log(currentAccountData);
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
