import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface breadcrumbs {
  label: string;
  href: string;
  active?: boolean;
}
export default function Breadcrumbs({ breadcrumbs }: { breadcrumbs: breadcrumbs[] }) {
  return (
    <ol className="mx-auto flex gap-5">
      {breadcrumbs.map((breadcrumb, i) => {
        return (
          <React.Fragment key={i}>
            <li>
              <Link
                href={breadcrumb.href}
                className={clsx(
                  "font-bold text-xl hover:text-blue-500",
                  breadcrumb.active
                    ? "text-black dark:text-white underline"
                    : "text-gray-500 dark:text-gray-400"
                )}
              >
                {breadcrumb.label}
              </Link>
            </li>
            {i + 1 == breadcrumbs.length ? "" : <span className="font-bold text-2xl">/</span>}
          </React.Fragment>
        );
      })}
    </ol>
  );
}
