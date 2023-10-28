"use client";

import {HiOutlineTrash} from "react-icons/hi";
import {useRouter} from "next/navigation";

const RemoveBtn = ({id}) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are You Sure?");
    if (confirmed) {
      const res = await fetch(
        `https://nextjs-todo-crud.vercel.app/api/topics?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
