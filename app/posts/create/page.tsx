"use client";

import axios from "axios";
import Form from "@/app/ui/posts/create-form";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { User } from "@/app/lib/definitions";

export default async function page() {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return (
    <div className="dark:text-white">
      <div className="flex justify-center items-center mb-10 mt-20">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Post", href: "/posts" },
            { label: "Create Post", href: `/posts/create`, active: true },
          ]}
        />
      </div>
      <Form users={data} />
    </div>
  );
}
