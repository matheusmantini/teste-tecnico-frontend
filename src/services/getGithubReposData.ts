import { api } from "@/config/api";

export const getGithubReposData = async (username: string) => {
  try {
    const response = await api.get(`/users/${username}/repos`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
