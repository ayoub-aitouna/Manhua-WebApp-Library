"use client";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

type MenuListType = {
  title: string;
  link: string;
};

const MenuList: MenuListType[] = [
  {
    title: "Home",
    link: "/Home",
  },
  {
    title: "Series",
    link: "/Series",
  },
  {
    title: "Bookmarks",
    link: "/Bookmarks",
  },
];
const NavMenu = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <menu className="flex flex-row gap-4">
      {MenuList.map((link) => (
        <li
          className={clsx("hover:text-gray-400", {
            "text-white font-normal": pathname !== link.link,
            "text-blue-700 font-bold": pathname === link.link,
          })}
        >
          <Link href={link.link}>
            <h4>{link.title}</h4>
          </Link>
        </li>
      ))}
    </menu>
  );
};

export default NavMenu;
