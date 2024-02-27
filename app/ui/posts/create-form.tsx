"use client";

import { Loading, Post, User } from "@/app/lib/definitions";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { SuccessToast, ErrorToast } from "@/app/ui/Toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import TextArea from "../TextArea";
import LoadingScreen from "../Loading";
import SkeletonForm from "./loading-screens/SkeletonForm";
export default function Form({ users }) {
  let [user, setUser] = useState<number>(null);
  let [title, setTitle] = useState<string>("");
  let [body, setBody] = useState<string>("");
  let [isLoading, setIsLoading] = useState<Loading>({ loadingWindo: true, loadingSubmit: false });

  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading({ ...isLoading, loadingSubmit: true });
    try {
      const data = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        body: JSON.stringify({
          title: title,
          body: body,
          userId: user,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (data.status === 201) {
        SuccessToast({ title: "Post is created, Now will navigate to Post Page" });
        router.push("/posts");
      }
    } catch (err) {
      ErrorToast({ title: err });
      setIsLoading({ ...isLoading, loadingSubmit: false });
    }
  }

  useEffect(() => {
    setIsLoading({ ...isLoading, loadingWindo: false });
  }, []);
  if (isLoading.loadingWindo) return <SkeletonForm />;
  if (isLoading.loadingSubmit) return <LoadingScreen />;

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-2 border-gray-200 p-5 rounded-lg shadow-lg flex flex-col gap-y-10">
        <div className="input grid grid-cols-12">
          <span className="flex items-center">User</span>
          <select
            className="col-span-11 border-2 border-gray-300 rounded-lg shadow-lg min-w-10 inline-block px-3 py-2 dark:bg-gray-800 dark:border-0"
            onChange={(e) => setUser(Number(e.target.value))}
          >
            <option defaultChecked={true} hidden={true}>
              select user
            </option>
            {users.map((user: User, key: React.Key) => (
              <option key={key} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input grid grid-cols-12">
          <label htmlFor="title" className="flex items-center">
            Title
          </label>
          <TextArea value={title} onChange={setTitle} disabled={false} />
        </div>
        <div className="input grid grid-cols-12">
          <label htmlFor="body" className="flex items-center">
            Body
          </label>
          <TextArea id="body" value={body} onChange={setBody} disabled={false} />
        </div>
        <div className="flex justify-between">
          <Button>Save Post</Button>
          <Link
            href={"/posts"}
            className="px-5 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-100 dark:hover:text-black"
          >
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
}
