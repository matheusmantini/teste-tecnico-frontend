import React from "react";
import { RepoItem } from "./RepoItem";
import { iRepoListProps } from "@/types";

export const RepoList: React.FC<iRepoListProps> = ({ colors, repos }) => {
  const noReposMessage = "Nenhum repositório encontrado.";

  if (repos.length === 0) {
    return (
      <section
        className="lg:col-span-1 px-4 sm:mr-6 sm:mt-6 text-left text-gray-500"
        aria-live="polite"
      >
        <p>{noReposMessage}</p>
      </section>
    );
  }

  return (
    <section className="lg:col-span-1 mb-[100px] px-4 pt-4 sm:pt-0 sm:mb-1 sm:mr-6 sm:mt-6">
      <h1
        className="text-primary font-semibold text-[21px] text-left mb-3"
        aria-label="Lista de repositórios"
      >
        Repositórios
      </h1>
      <div role="list">
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} colors={colors} />
        ))}
      </div>
    </section>
  );
};
