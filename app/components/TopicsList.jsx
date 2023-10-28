import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("https://nextjs-todo-crud.vercel.app/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed To Fetch Topics");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TopicsList = async () => {
  const topics = await getTopics();
  return (
    <div>
      {topics?.map((topic) => (
        <div
          key={topic._id}
          className="font-semibold p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="text-2xl"> {topic.title}</h2>
            <div>{topic.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicsList;
