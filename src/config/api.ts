import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_1,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_2}`,
  },
});
