<template>
  <PostItem v-for="post in postList" :key="post?.id" :post="post" />
</template>

<script setup lang="ts">
import PostItem from "./PostItem.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

interface IPost {
  id: number;
  body: string;
  userId: number;
}

const postList = ref<IPost[]>([]);

onMounted(async () => {
  const res = await axios.get("https://dummyjson.com/posts");
  postList.value = res.data.posts;
});
</script>
