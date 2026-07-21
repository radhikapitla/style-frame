import axios from "axios";

const API = axios.create({
  baseURL: "https://style-frame-1i9s.onrender.com/api",
});

export interface LoginData {
  username: string;
  password: string;
}

export async function login(data: LoginData) {
  const response = await API.post("/auth/login", data);
  return response.data;
}

export default API;
