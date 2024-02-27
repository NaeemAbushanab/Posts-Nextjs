import { ErrorToast } from "@/app/ui/Toast";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getTheme(): Promise<boolean> {
  noStore();
  try {
    const response = await sql`SELECT isdark FROM theme`;
    const isDark = response.rows[0]["isdark"];
    console.log(isDark);
    return isDark;
  } catch (error) {
    ErrorToast({ title: error });
    return null;
  }
}

export async function changeTheme(theme: boolean): Promise<void> {
  try {
    const response = await sql`UPDATE theme SET isdark = TRUE`;
    console.log(response);
  } catch (error) {
    ErrorToast({ title: error });
    console.log(error);
    return null;
  }
}
