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
            <div class="cover-img-box">
              <img src="../../assets/CoverPhoto.png" />
              <div class="tools">
                <div class="file-input-box">
                  <input
                    id="cover-input"
                    type="file"
                    @change="coverImageChange"
                  />
                  <label for="cover-input">
                    <UpdatePhoto />
                  </label>
                </div>
                <div class="delete-icon">
                  <CloseIcon color="white" />
                </div>
              </div>
              <div class="user-img">
                <img
                  src="https://www.fountain.org.tw/upload/repository/74a7f73b7f18d193ddebff71c0b8afeaimage_normal.jpg"
                />
                <div class="file-input-box">
                  <input
                    id="user-input"
                    type="file"
                    @change="userImageChange"
                  />
                  <label for="user-input">
                    <UpdatePhoto />
                  </label>
                </div>
              </div>
            </div>
            <div class="info-input">
              <BaseInput
                label="Account"
                name="account"
                v-model:input="accountValue"
              />
              <textarea
                :class="bioValueIsValid ? '' : 'error'"
                name="bio"
                v-model="bioValue"
                placeholder="Introduce yourself..."
                @blur="blurTextArea"
              ></textarea>
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
import BaseInput from "../UI/BaseInput.vue";
import { ref } from "vue";

const isValid = ref(false);
const coverImageData = ref();
const userImageData = ref();
const currentUserImage = ref();
const accountValue = ref();
const bioValue = ref();
const bioValueIsValid = ref(true);

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
  currentUserImage.value = URL.createObjectURL(file);
  console.log(currentUserImage.value);
  const formData = new FormData();
  userImageData.value = formData.append("file", file);
}

function blurTextArea() {
  if (!bioValue.value) {
    bioValueIsValid.value = false;
    return;
  }
  bioValueIsValid.value = true;
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
    height: 600px;
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
    .content {
      height: calc(100% - 50px);
      #user-form {
        height: 100%;
        display: flex;
        flex-direction: column;
        .cover-img-box {
          width: 100%;
          height: 200px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #ffffff30;
            pointer-events: none;
          }
          .tools {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px;
          }
          .user-img {
            position: absolute;
            bottom: 0;
            left: 24px;
            transform: translateY(50%);
            z-index: 5;
            img {
              width: 110px;
              height: 110px;
              border: 5px solid #fff;
              border-radius: 50%;
            }
            .file-input-box {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            &::after {
              content: "";
              width: 100%;
              height: 100%;
              border-radius: 50%;
              position: absolute;
              top: 0;
              left: 0;
              background-color: #ffffff30;
              pointer-events: none;
            }
          }
        }
        .info-input {
          flex: 1;
          padding: 4rem 16px 2rem 16px;
          display: flex;
          flex-direction: column;
          textarea {
            appearance: none;
            border: none;
            outline: none;
            resize: none;
            width: 100%;
            height: 100%;
            margin-top: 1rem;
            padding: 8px;
            font-size: 18px;
            font-family: "sans-serif";
            background-color: #f5f8fa;
            border-bottom: 2px solid #222;
            &:focus,
            &:hover {
              border-bottom: 2px solid #50b5ff;
            }
            &.error {
              border-bottom: 2px solid #fc5a5a;
            }
          }
        }
      }
    }
  }
}

input[type="file"] {
  display: none;
}
</style>
