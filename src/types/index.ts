export interface IRegistData {
  [key: string]: string;
}

export interface ILoginData {
  account: string;
  password: string;
}

export interface IUser {
  id: number;
  account: string;
  username: string;
  avatarURL: string;
  coverURL: string;
}
