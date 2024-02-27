"use client";

import { Loading, Post } from "@/app/lib/definitions";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { SuccessToast, ErrorToast } from "@/app/ui/Toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import TextArea from "../TextArea";
import SkeletonForm from "./loading-screens/SkeletonForm";
import LoadingScreen from "../Loading";

export default function Form({ post }: { post: Post }) {
  let [body, setBody] = useState<string>(post.body);
  let [title, setTitle] = useState<string>(post.title);
  let [isLoading, setIsLoading] = useState<Loading>({ loadingWindo: true, loadingSubmit: false });
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading({ ...isLoading, loadingSubmit: true });
    try {
      const data = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        body: JSON.stringify({
          id: post.id,
          title: title,
          body: body,
          userId: post.userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (data.status === 200) {
        SuccessToast({ title: "Post is edited, Now will navigate to Post Page" });
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
          <span className="flex items-center">ID Post</span>
          <span className="col-span-11 border-2 border-gray-300 rounded-lg shadow-lg min-w-10 inline-block bg-gray-100 px-3 py-1 dark:bg-black dark:border-0">
            {post.id}
          </span>
        </div>
        <div className="input grid grid-cols-12">
          <span className="flex items-center">User ID</span>
          <span className="col-span-11 border-2 border-gray-300 rounded-lg shadow-lg min-w-10 inline-block bg-gray-100 px-3 py-1 dark:bg-black dark:border-0">
            {post.userId}
          </span>
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
