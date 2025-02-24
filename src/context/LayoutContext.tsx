import React, { createContext, useContext, useState, useEffect } from "react";
import { iRepo } from "@/types";

interface LayoutContextProps {
  favorites: iRepo[];
  handleToggleFavorite: (repo: iRepo) => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<iRepo[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (repo: iRepo) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === repo.id)
        ? prev.filter((fav) => fav.id !== repo.id)
        : [...prev, repo]
    );
  };

  return (
    <LayoutContext.Provider
      value={{
        favorites,
        handleToggleFavorite,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
