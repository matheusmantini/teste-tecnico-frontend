import { api } from "@/config/api";

export const getGithubUserData = async (username: string) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
