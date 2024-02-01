<template>
  <Teleport to="body">
    <section v-if="isValid" class="user-info-dialog">
      <div class="user-info-wrapper">
        <div class="header flex">
          <div class="close-icon">
            <CloseIcon @click="isValid = false" />
          </div>
          <h1>Edit Your Profile</h1>
          <button type="submit" for="user-form">Save</button>
        </div>
        <div class="content">
          <form id="user-form" @submit.prevent="handleSubmit">
            <div class="file-input-box">
              <input id="cover-input" type="file" @change="coverImageChange" />
              <label for="cover-input">
                <UpdatePhoto />
              </label>
            </div>
            <div class="file-input-box">
              <input id="user-input" type="file" @change="userImageChange" />
              <label for="user-input">
                <UpdatePhoto />
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  </Teleport>
</template>

<script setup lang="ts">
import CloseIcon from "../icons/CloseIcon.vue";
import UpdatePhoto from "../icons/UpdatePhoto.vue";
import { ref } from "vue";

const isValid = ref(false);
const coverImageData = ref();
const userImageData = ref();

defineExpose({
  open() {
    isValid.value = true;
  },
  close() {
    isValid.value = false;
  },
});

function coverImageChange(e: any) {
  const file = e.target.files[0];
  const formData = new FormData();
  coverImageData.value = formData.append("file", file);
}

function userImageChange(e: any) {
  const file = e.target.files[0];
  const formData = new FormData();
  userImageData.value = formData.append("file", file);
}

function handleSubmit() {
  console.log("submit");
}
</script>

<style scoped lang="scss">
.user-info-dialog {
  width: 100vw;
  height: 100vh;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  .user-info-wrapper {
    width: 570px;
    height: 550px;
    margin-top: 24px;
    background-color: #fff;
    border-radius: 14px;
    .header {
      height: 50px;
      padding: 16px;
      border-bottom: 1px solid #e6ecf0;
      .close-icon {
        width: 50px;
      }
      h1 {
        flex: 1;
        font-size: 19px;
        font-weight: 700;
      }
      button {
        width: 60px;
        height: 30px;
        border-radius: 40px;
        background-color: #ff6600;
        color: #fff;
        font-size: 15px;
      }
    }
  }
}

input[type="file"] {
  display: none;
}
</style>
