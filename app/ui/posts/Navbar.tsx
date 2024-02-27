"use client";

import { changeTheme } from "@/scripts/theme";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { LuSunMedium } from "react-icons/lu";

export default function navbar({ isDark }) {
  let pathname = usePathname();
  const router = useRouter();
  const [theme, setTheme] = useState<boolean>(isDark);
  const paths = ["", "posts"];

  function _setTheme() {
    const currTheme = !theme;
    setTheme(currTheme);
    if (currTheme) document.body.classList.add("dark", "trans");
    else document.body.classList.remove("dark");
    changeTheme(currTheme);
  }
  return (
    <div className="bg-gray-900 dark:bg-black text-white shadow-lg dark:border-b-[1px] dark:border-white font-bold text-xl">
      <div className="container flex justify-between py-7  dark:text-white rounded-t-lg ">
        <h1>POST</h1>
        <ul className="flex gap-x-10">
          {paths.map((path, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  router.push(`/${path}`);
                  // window.history.replaceState(null, "", `/${path}`);
                }}
                className={`capitalize ${clsx({
                  underline: path === pathname.split("/")[1],
                })}`}
              >
                {path === "" ? "home" : path}
              </button>
            </li>
          ))}
        </ul>
        {theme ? (
          <i className="cursor-pointer" onClick={() => _setTheme()}>
            <LuSunMedium size={25} />
          </i>
        ) : (
          <i className="cursor-pointer" onClick={() => _setTheme()}>
            <FaMoon size={25} />
          </i>
        )}
      </div>
    </div>
  );
}
