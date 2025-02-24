import React from "react";
import HeartIcon from "./icons/HeartIcon";
import Link from "next/link";

export const FavoritesButton = () => {
  return (
    <Link
      href="/favoritos"
      aria-label="Ir para favoritos"
      className="w-[145px] h-full bg-primary hover:bg-primary-light disabled:bgmedium-gray disabled:cursor-not-allowed transition-colors text-white font-medium text-sm flex items-center justify-center border-l border-light-gray"
    >
      <span className="mr-2" aria-hidden="true">
        <HeartIcon strokeColor={"white"} />
      </span>
      Favoritos
    </Link>
  );
};
