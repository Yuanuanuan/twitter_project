<template>
  <section>
    <header>Tweet List</header>
    <section class="tweet-wrapper">
      <BackTweetItem
        v-for="tweet in tweetList"
        :key="tweet.id"
        :tweet="tweet"
      />
    </section>
  </section>
</template>

<script setup lang="ts">
import BackTweetItem from "./BackTweetItem.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

interface ITweet {
  id: number;
  body: string;
  userId: number;
}

const tweetList = ref<ITweet[]>();

onMounted(async () => {
  const res = await axios.get("https://dummyjson.com/posts");
  tweetList.value = res.data.posts;
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
  .tweet-wrapper {
    height: calc(100% - 50px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
