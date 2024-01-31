<template>
  <section>
    <nav>
      <div class="logo-icon">
        <LogoIcon />
      </div>
      <div
        class="tool"
        :class="menu === 'home' ? 'active' : ''"
        @click="changeTool('home', '/')"
      >
        <HomeIcon :active="menu === 'home' ? true : false" />
        <h2>Home</h2>
      </div>
      <div
        class="tool"
        :class="menu === 'profile' ? 'active' : ''"
        @click="changeTool('profile', '/profile')"
      >
        <UserIcon :active="menu === 'profile' ? true : false" />
        <h2>Profile</h2>
      </div>
      <div
        class="tool"
        :class="menu === 'setting' ? 'active' : ''"
        @click="changeTool('setting', '/setting')"
      >
        <Setting :active="menu === 'setting' ? true : false" />
        <h2>Setting</h2>
      </div>
      <div class="tweet-btn">
        <button @click="dialogRef.open()">Tweet</button>
      </div>
      <TweetDialog ref="dialogRef" />
    </nav>
    <div class="logout-btn">
      <LogoutIcon />
      <button @click="logOut">Log Out</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import HomeIcon from "./icons/HomeIcon.vue";
import Setting from "./icons/SettingIcon.vue";
import UserIcon from "./icons/UserIcon.vue";
import LogoutIcon from "./icons/LogoutIcon.vue";
import LogoIcon from "./icons/LogoIcon.vue";
import TweetDialog from "./dialog/TweetDialog.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

type Menu = "home" | "profile" | "setting";

const menu = ref<Menu>("home");

const dialogRef = ref();

function changeTool(val: Menu, path: any) {
  menu.value = val;
  router.push(path);
}

function logOut() {
  console.log("logout");
  router.push("/login");
}
</script>

<style scoped lang="scss">
section {
  width: 23%;
  min-width: 200px;
  height: 100vh;
  padding: 18px;
  border-right: 1px solid #e6ecf0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  nav {
    margin-top: 18px;
    min-width: 160px;
    .logo-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .tool {
      margin: 20px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      letter-spacing: 1px;
      cursor: pointer;
      h2 {
        margin-left: 12px;
        font-weight: 500;
        font-size: 18px;
        color: #444;
      }
      &.active h2 {
        color: #ff6600;
      }
    }
    .tweet-btn {
      cursor: pointer;
      button {
        width: 100%;
        height: 35px;
        appearance: none;
        border: none;
        background-color: #ff6600;
        color: #fff;
        border-radius: 50px;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
  .logout-btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      appearance: none;
      border: none;
      background-color: transparent;
      font-size: 16px;
      margin-left: 6px;
      cursor: pointer;
    }
  }
}
</style>
