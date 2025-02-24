import React from "react";
import NotFoundIcon from "./icons/NotFoundIcon";
import { SearchBar } from "./SearchBar";
import { useRouter } from "next/router";

export const NotFound: React.FC = () => {
  const router = useRouter();
  const username =
    typeof router.query?.username === "string" ? router.query.username : "";

  return (
    <section
      className="flex flex-col sm:items-center items-start sm:justify-center justify-start min-h-[calc(100vh-80px)] bg-white border-box"
      aria-live="polite"
    >
      <div className="flex sm:mb-4 sm:hidden w-full box-border px-8 my-8">
        <SearchBar aria-label="Buscar usuário no GitHub" />
      </div>

      <div className="text-center container mx-auto px-8 sm:px-4 max-w-3xl flex flex-col items-center">
        <h1 className="font-semibold text-[21px] text-primary break-words max-w-80 mb-1">
          {username ? `"${username}"` : "Usuário não especificado"}
        </h1>

        <h2 className="font-semibold text-[21px] text-neutral-gray mb-1">
          Nenhum usuário encontrado
        </h2>

        <p className="font-normal text-[16px] text-neutral-gray mb-8">
          Verifique se a escrita está correta ou tente novamente
        </p>

        <div className="hidden sm:flex sm:justify-center">
          <NotFoundIcon />
        </div>
      </div>
    </section>
  );
};
