import axios from "axios";

export const Api = axios.create({
  baseURL: "http://192.168.1.102:1000/api/",
});
