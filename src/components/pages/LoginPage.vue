<template>
  <FormSection title="Log in">
    <LoginForm @login="login" />
    <div class="foot">
      <RouterLink to="/regist">Sign up</RouterLink>
      <RouterLink to="/admin/login">BackStage</RouterLink>
    </div>
  </FormSection>
</template>

<script lang="ts" setup>
import { RouterLink, useRouter } from "vue-router";
import LoginForm from "../form/LoginForm.vue";
import FormSection from "../form/FormSection.vue";

const router = useRouter();

function login(loginInfo: any) {
  console.log(loginInfo);
  router.push("/home");
}
</script>

<style scoped lang="scss">
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
</style>
