import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

const routes = [
  {
    path: "/home",
    component: () => import("./components/pages/HomePage.vue"),
    children: [
      {
        path: "/setting",
        component: () => import("./components/pages/SettingPage.vue"),
      },
      {
        path: "",
        component: () => import("./components/MainWrapper.vue"),
        children: [
          {
            path: "",
            component: () => import("./components/main/Home.vue"),
          },
          {
            path: "/tweet-post",
            component: () => import("./components/main/TweetPost.vue"),
          },
          {
            path: "/profile",
            component: () => import("./components/pages/ProfilePage.vue"),
            children: [
              {
                path: "",
                component: () =>
                  import("./components/profile/ProfileTweet.vue"),
              },
              {
                path: "/profile/tweet-reply",
                component: () =>
                  import("./components/profile/ProfileReply.vue"),
              },
              {
                path: "/profile/liked",
                component: () =>
                  import("./components/profile/ProfileLiked.vue"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/regist",
    component: () => import("./components/pages/RegistPage.vue"),
  },
  {
    path: "/login",
    component: () => import("./components/pages/LoginPage.vue"),
  },
  {
    path: "/admin/login",
    component: () => import("./components/pages/BackLoginPage.vue"),
  },
  {
    path: "/admin",
    component: () => import("./components/BackMainWrapper.vue"),
    children: [
      {
        path: "",
        component: () => import("./components/backStage/BackTweetPage.vue"),
      },
      {
        path: "/admin/user",
        component: () => import("./components/backStage/BackUserPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
