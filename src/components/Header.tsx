import React from "react";
import { SearchBar } from "./SearchBar";
import { FavoritesButton } from "./FavoritesButton";

export const Header: React.FC = () => {
  return (
    <header
      className="w-full h-20 bg-white border-b border-[#E3E6E9] flex items-center justify-between hidden sm:flex"
      aria-label="Cabeçalho com barra de pesquisa e botão de favoritos"
    >
      <SearchBar />
      <FavoritesButton />
    </header>
  );
};
