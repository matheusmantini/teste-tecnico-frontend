import React from "react";
import { RepoItem } from "@/components/RepoItem";
import { useLayout } from "@/context/LayoutContext";
import { GetServerSideProps } from "next";
import { GithubReposColors } from "@/types";
import axios from "axios";

interface FavoritesProps {
  colors: GithubReposColors;
}

const Favorites: React.FC<FavoritesProps> = ({ colors }) => {
  const { favorites } = useLayout();

  return (
    <main
      className="space-y-4 flex flex-col items-start sm:items-center px-4 sm:px-6"
      aria-labelledby="favorites-title"
    >
      <h1
        id="favorites-title"
        className="font-semibold text-[21px] text-neutral-gray sm:text-primary mt-6 mb-1"
      >
        Meus Favoritos
      </h1>

      <div className="w-full max-w-[896px]" role="list">
        {favorites?.length > 0 ? (
          favorites.map((repo) => (
            <RepoItem key={repo.id} repo={repo} colors={colors} />
          ))
        ) : (
          <div className="px-4 text-center text-gray-500" aria-live="polite">
            Nenhum favorito encontrado.
          </div>
        )}
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<
  FavoritesProps
> = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
    );

    return {
      props: {
        colors: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        colors: [],
      },
    };
  }
};

export default Favorites;
