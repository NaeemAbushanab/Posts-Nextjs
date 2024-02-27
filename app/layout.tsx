import { Metadata } from "next";
import "@/app/ui/global.css";
import Navbar from "@/app/ui/posts/Navbar";
import Toast from "@/app/ui/Toast";
import { sql } from "@vercel/postgres";
import { getTheme } from "@/scripts/theme";
export const metadata: Metadata = {
  title: "Test Project",
};
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const isDark: boolean = await getTheme();

  return (
    <html lang="en">
      <body className={`${isDark ? "dark" : ""} dark:bg-black`}>
        <div className="flex flex-col h-lvh">
          <Navbar isDark={isDark} />
          <div className="flex-grow relative">
            <Toast />
            <div className="container h-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
