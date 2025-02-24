import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "./icons/SearchIcon";

export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = inputRef.current;

    if (input) {
      router.push(`?username=${encodeURIComponent(input.value.trim())}`);
    }
  };

  return (
    <div className="md:pl-6 lg:pl-6 flex-1">
      <form
        onSubmit={handleSubmit}
        aria-labelledby="searchForm"
        className="relative"
        role="search"
      >
        <div className="relative w-full sm:w-[668px]">
          <label htmlFor="searchInput" className="sr-only">
            Buscar usuário
          </label>
          <input
            id="searchInput"
            ref={inputRef}
            type="text"
            placeholder="Buscar usuário"
            className="w-full pl-4 pr-10 py-3 border border-[#E3E6E9] rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-primary 
                     text-sm placeholder-light-gray placeholder-font-normal"
            aria-label="Buscar usuário no GitHub"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500 focus:outline-none"
            aria-label="Iniciar busca"
          >
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};
