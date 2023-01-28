import axios from "axios";

export const instance = axios.create({
  baseURL: "https://63d32a7aa93a149755a6c40d.mockapi.io",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})