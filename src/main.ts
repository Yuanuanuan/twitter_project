import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import HomePage from "./components/pages/HomePage.vue";
import RegistPage from "./components/pages/RegistPage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SettingPage from "./components/pages/SettingPage.vue";
import MainWrapper from "./components/MainWrapper.vue";
import BackStagePage from "./components/pages/BackStagePage.vue";
import ProfilePage from "./components/pages/ProfilePage.vue";

import Home from "./components/main/Home.vue";
import TweetPost from "./components/main/TweetPost.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    children: [
      {
        path: "/setting",
        component: SettingPage,
      },
      {
        path: "/",
        component: MainWrapper,
        children: [
          {
            path: "/",
            component: Home,
          },
          {
            path: "/tweet-post",
            component: TweetPost,
          },
        ],
      },
      {
        path: "/profile",
        component: ProfilePage,
      },
    ],
  },
  {
    path: "/regist",
    component: RegistPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/admin",
    component: BackStagePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
