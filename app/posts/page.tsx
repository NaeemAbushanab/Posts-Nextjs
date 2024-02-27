import React, { Suspense } from "react";
import PostCard from "@/app/ui/posts/PostCard";
import axios from "axios";
import { Post } from "@/app/lib/definitions";
import { CiCirclePlus } from "react-icons/ci";
import Link from "next/link";

export default async function page() {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  // const posts = { data: [{ title: "qui est esse", body: "qui est esse", userId: 2, id: 2 }] };

  return (
    <>
      <div className="flex justify-between items-center mx-5 py-8">
        <h1 className="text-5xl text-center dark:text-white">Posts</h1>
        <Link
          href={"/posts/create"}
          className="dark:text-white dark:bg-blue-500 cursor-pointer rounded-full p-2"
        >
          <CiCirclePlus size={50} />
        </Link>
      </div>
      <div className="flex flex-col">
        {posts.data.slice(0, 10).map((post: Post, key: React.Key) => {
          return (
            <Suspense key={key}>
              <PostCard post={post} />;
            </Suspense>
          );
        })}
      </div>
    </>
  );
}
