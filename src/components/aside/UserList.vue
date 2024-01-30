<template>
  <UserItem :following="true" />
  <UserItem :following="false" />
</template>

<script setup lang="ts">
import UserItem from "../aside/UserItem.vue";
</script>
