<template>
  <UserItem :following="true" />
  <UserItem :following="false" />
  <UserItem :following="false" />
  <UserItem :following="false" />
  <UserItem :following="true" />
  <UserItem :following="false" />
  <UserItem :following="false" />
</template>

<script setup lang="ts">
import UserItem from "../aside/UserItem.vue";
</script>
