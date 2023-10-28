"use client";

import {useRouter} from "next/navigation";
import {useState} from "react";

const EditTopicForm = ({id, title, description}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://nextjs-todo-crud.vercel.app/api/topics/${id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({newTitle, newDescription}),
        }
      );

      if (!res.ok) {
        throw new Error("Failed To Update");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
        className="border border-slate-500 px-6 py-2 rounded"
        type="text"
        defaultValue={title}
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => {
          setNewDescription(e.target.value);
        }}
        className="border border-slate-500 px-6 py-2 rounded"
        type="text"
        defaultValue={description}
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-semibold text-white py-2 px-5 w-fit rounded">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
