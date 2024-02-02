<template>
  <section>
    <header>User List</header>
    <section class="user-list-wrapper">
      <div class="user-list">
        <BackUserItem v-for="user in userList" :key="user.id" :user="user" />
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import BackUserItem from "./BackUserItem.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  image: string;
}

const userList = ref<IUser[]>();

onMounted(async () => {
  const res = await axios.get("https://dummyjson.com/users");
  console.log(res.data.users);
  userList.value = res.data.users;
});
</script>

<style scoped lang="scss">
section {
  flex: 1;
  header {
    width: 100%;
    height: 50px;
    padding-left: 16px;
    border-bottom: 1px solid #e6ecf0;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .user-list-wrapper {
    width: 100%;
    height: 100%;
    padding-bottom: 4rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .user-list {
      padding: 16px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-auto-flow: row;
      gap: 16px;
    }
  }
}
</style>
