import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Home from "./components/pages/Home.vue";
import Regist from "./components/pages/Regist.vue";
import Login from "./components/pages/Login.vue";
import Setting from "./components/pages/Setting.vue";
import MainWrapper from "./components/MainWrapper.vue";
import BackStage from "./components/pages/BackStage.vue";

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/setting",
        component: Setting,
      },
      {
        path: "/",
        component: MainWrapper,
      },
    ],
  },
  {
    path: "/regist",
    component: Regist,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/admin",
    component: BackStage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
