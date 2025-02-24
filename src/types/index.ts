import { ReactNode } from "react";

export interface iLayoutProps {
  children: ReactNode;
}

export interface iRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  updated_at: string;
}

export type GithubRepoColor = {
  color: string;
  url: string;
};

export type GithubReposColors = {
  [repo: string]: GithubRepoColor;
};

export interface iRepoListProps {
  colors: GithubReposColors;
  repos: iRepo[];
}

export interface iRepoDataProps {
  repos: iRepo[];
}

export interface iRepoItemProps {
  repo: iRepo;
  colors: GithubReposColors;
}

export interface iUserData {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
}

export interface iUserProfileProps {
  userData: iUserData;
}
