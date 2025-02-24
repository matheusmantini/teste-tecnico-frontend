import React from "react";
import UserIcon from "./icons/UserIcon";
import HeartIcon from "./icons/HeartIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import type { UrlObject } from "url";

const MenuMobile = () => {
  const router = useRouter();

  const buildHref = (path: string): UrlObject => ({
    pathname: path,
    query: { ...router.query },
  });

  const MobileMenuItem = ({
    href,
    icon,
    label,
    isActive,
  }: {
    href: string;
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
  }) => (
    <Link
      href={buildHref(href)}
      className={`h-full flex-1 flex items-center justify-center transition-colors ${
        isActive ? "bg-primary" : "bg-white"
      }`}
      aria-label={label}
    >
      <span className="text-sm font-medium text-gray-700">{icon}</span>
    </Link>
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[70px] w-full bg-white border-t border-gray-200 flex items-center justify-between sm:hidden z-10">
      <MobileMenuItem
        href="/"
        icon={
          <UserIcon fillColor={router.pathname === "/" ? "white" : "#4E4E4E"} />
        }
        label="Página Inicial"
        isActive={router.pathname === "/"}
      />
      <MobileMenuItem
        href="/favoritos"
        icon={
          <HeartIcon
            fillColor={router.pathname === "/favoritos" ? "white" : "#4E4E4E"}
          />
        }
        label="Favoritos"
        isActive={router.pathname === "/favoritos"}
      />
    </nav>
  );
};

export default MenuMobile;
