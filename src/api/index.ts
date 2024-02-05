import axios, { AxiosInstance } from "axios";
import { ILoginData, IRegistData } from "../types";

const BASE_URL: string = "http://localhost:8081";

const token = localStorage.getItem("token") || "";

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export async function getUserInfo() {
  const res = await api.get("/accountInfo");

  return res.data;
}

export async function getAllTweets(backToken?: string | null) {
  const currentToken = backToken ? backToken : token;
  const res = await api.get("/tweets", {
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  });

  return res.data;
}

export async function getSelfTweets() {
  const res = await api.get("/selfTweets");

  return res.data;
}

export async function login(loginInfo: ILoginData) {
  const res = await api.post("/login", loginInfo);
  if (!res.data.status) {
    return;
  }
  return res.data;
}

export async function BackStageLogin(loginInfo: ILoginData) {
  return await api.post("/admin/login", loginInfo);
}

export async function getAllUsers() {
  return await api.get("/admin/users");
}

export async function regist(data: IRegistData) {
  return await api.post("regist", data);
}
