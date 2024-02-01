<template>
  <div class="wrapper">
    <div class="user-img">
      <img
        src="https://www.fountain.org.tw/upload/repository/74a7f73b7f18d193ddebff71c0b8afeaimage_normal.jpg"
      />
    </div>
    <div class="content">
      <h3>Apple <span>@apple・3 小時</span></h3>
      <p>{{ tweet.body }}</p>
    </div>
    <CloseIcon color="#657786" :big="20" />
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import CloseIcon from "../icons/CloseIcon.vue";

interface ITweet {
  id: number;
  body: string;
  userId: number;
}

defineProps({
  tweet: {
    type: Object as PropType<ITweet>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  height: 60px;
  padding: 8px;
  border-bottom: 1px solid #e6ecf0;
  position: relative;
  display: flex;
  justify-content: center;
  .user-img {
    margin-right: 8px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .content {
    flex: 1;
    h3 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 8px;
      span {
        color: #657786;
        font-size: 15px;
        font-weight: normal;
      }
    }
    p {
      width: 450px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
