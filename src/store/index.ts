import { defineStore } from "pinia";
import { IUser } from "../types";
import { api } from "../api";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userInfo: <IUser>{},
  }),
  getters: {
    token: () => {
      const token = localStorage.getItem("token");
      if (token) {
        return token;
      } else {
        return "";
      }
    },
  },
  actions: {
    setUserInfo(data: IUser) {
      this.userInfo = data;
    },
    async getUserInfo() {
      if (this.token) {
        const res = await api.get("/accountInfo", {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        });

        this.userInfo = res.data.userInfo[0];
        console.log(res.data.userInfo[0]);
        console.log(this.userInfo);
      }

      return this.userInfo;
    },
  },
});
