<template>
  <FormSection title="Sign up">
    <AccountForm @handleSubmit="handleSubmit" :formData="registData">
      <div class="buttons">
        <button class="regist-btn" type="submit">Regist</button>
        <button class="cancel-btn" type="button">
          <RouterLink to="/login">Cancel</RouterLink>
        </button>
      </div>
    </AccountForm>
  </FormSection>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import FormSection from "../form/FormSection.vue";
import AccountForm from "../form/AccountForm.vue";
import { IRegistData } from "../../types";

const registData = reactive<IRegistData>({
  account: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

function handleSubmit(data: IRegistData) {
  // check regist data is valid
  // submit regist data
  console.log(data);
}
</script>

<style scoped lang="scss">
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
</style>
