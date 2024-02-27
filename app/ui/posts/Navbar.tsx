"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { LuSunMedium } from "react-icons/lu";

const themes = {
  dark: "dark",
  light: "light",
};

export default function navbar() {
  let pathname = usePathname();
  const router = useRouter();
  const [theme, setTheme] = useState<string>(themes.dark);

  const paths = ["", "posts"];

  function _setTheme(theme: string): void {
    localStorage.setItem("theme", theme);
    setTheme(theme);
    if (theme === themes.dark) document.body.classList.add(themes.dark, "trans");
    else document.body.classList.remove(themes.dark);
  }

  useEffect(() => {
    const initialSettingTheme: string = localStorage.getItem("theme") || themes.light;
    _setTheme(initialSettingTheme);
  }, []);

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
        {theme === themes.dark ? (
          <i className="cursor-pointer" onClick={() => _setTheme(themes.light)}>
            <LuSunMedium size={25} />
          </i>
        ) : (
          <i className="cursor-pointer" onClick={() => _setTheme(themes.dark)}>
            <FaMoon size={25} />
          </i>
        )}
      </div>
    </div>
  );
}
