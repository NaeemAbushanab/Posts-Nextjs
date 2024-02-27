import axios from "axios";
import Form from "@/app/ui/posts/edit-form";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function page({ params }: { params: { id: number } }) {
  const { id } = params;
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return (
    <div className="dark:text-white">
      <div className="flex justify-center items-center mb-10 mt-20">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Post", href: "/posts" },
            { label: "Edit Post", href: `/posts/edit/${id}`, active: true },
          ]}
        />
      </div>
      <Form post={data} />
    </div>
  );
}
