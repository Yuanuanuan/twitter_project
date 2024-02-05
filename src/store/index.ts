import { defineStore } from "pinia";
import { IUser } from "../types";
import { api } from "../api";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userInfo: <IUser>{},
  }),
  actions: {
    setUserInfo(data: IUser) {
      this.userInfo = data;
    },
    async getUserInfo() {
      const res = await api.get("/accountInfo", { params: this.userInfo });
      console.log(res.data);

      return this.userInfo;
    },
  },
});
