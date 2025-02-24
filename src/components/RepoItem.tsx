import { iRepoItemProps } from "@/types";
import React from "react";
import { format } from "date-fns";
import FavoriteBtn from "./icons/FavoriteBtnIcon";
import { useLayout } from "@/context/LayoutContext";

export const RepoItem: React.FC<iRepoItemProps> = ({ repo, colors }) => {
  const { favorites, handleToggleFavorite } = useLayout();

  const formattedDate = format(new Date(repo?.updated_at), "d MMM yyyy");
  const languageColor = colors[repo?.language];

  return (
    <article
      className="p-4 mb-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
      role="article"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-gray hover:underline"
              aria-label={`Visite o repositório ${repo.name}`}
            >
              {repo.name}
            </a>
          </h3>
          <p className="text-light-gray my-3">{repo.description}</p>
          <div className="mt-2 flex items-center">
            <div
              className={`grid items-center text-[12px] text-neutral-gray gap-2 ${
                repo.language
                  ? "sm:grid-cols-[150px_1fr] grid-cols-1"
                  : "grid-cols-1"
              }`}
            >
              {repo.language && (
                <div
                  className="flex items-center gap-2"
                  aria-label={`Linguagem: ${repo.language}`}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: languageColor?.color || "#ccc" }}
                  ></div>
                  <span>{repo.language}</span>
                </div>
              )}
              <span className="text-[12px] text-neutral-gray">
                Updated on {formattedDate}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleToggleFavorite(repo)}
          className={`text-white rounded-lg transition-colors`}
          aria-label={`Favoritar repositório ${repo.name}`}
        >
          <FavoriteBtn
            isFavorite={favorites.some((fav) => fav.id === repo.id)}
          />
        </button>
      </div>
    </article>
  );
};
