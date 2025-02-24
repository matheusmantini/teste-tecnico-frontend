import axios from "axios";

export const getGithubColors = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
