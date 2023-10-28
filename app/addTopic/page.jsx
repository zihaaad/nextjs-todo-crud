"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

const AddTopicPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description Are Required");
    }

    try {
      const res = await fetch(
        "https://nextjs-todo-crud.vercel.app/api/topics",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({title, description}),
        }
      );
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed To Create a Topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-6 py-2 rounded"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Topic Title"
      />

      <input
        className="border border-slate-500 px-6 py-2 rounded"
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-semibold text-white py-2 px-5 w-fit rounded">
        Add Topic
      </button>
    </form>
  );
};

export default AddTopicPage;
