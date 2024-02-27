import { Metadata } from "next";
import "@/app/ui/global.css";
import Navbar from "@/app/ui/posts/Navbar";
import Toast from "@/app/ui/Toast";
export const metadata: Metadata = {
  title: "Test Project",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark dark:bg-black">
        <div className="flex flex-col h-lvh">
          <Navbar />
          <div className="flex-grow relative">
            <Toast />
            <div className="container h-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
