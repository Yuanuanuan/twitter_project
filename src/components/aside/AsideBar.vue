<template>
  <section>
    <main>
      <div class="title">Popular</div>
      <UserList />
    </main>
  </section>
</template>

<script setup lang="ts">
import UserList from "./UserList.vue";
</script>

<style scoped lang="scss">
section {
  width: 27%;
  min-width: 250px;
  padding: 12px 16px;
  border-left: 1px solid #e6ecf0;

  display: flex;
  justify-content: center;
  main {
    width: 100%;
    height: fit-content;
    background-color: #f5f8fa;
    border-radius: 14px;
    overflow: hidden;
    .title {
      height: 36px;
      padding: 0 12px;
      border-bottom: 1px solid #e6ecf0;
      font-size: 18px;
      font-weight: 600;

      display: flex;
      align-items: center;
    }
  }
}
</style>
