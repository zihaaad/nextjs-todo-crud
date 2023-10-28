import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";

const TopicsList = () => {
  return (
    <div className="font-semibold p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
      <div>
        <h2 className="text-2xl"> Topic Title</h2>
        <div>Topic Description</div>
      </div>
      <div className="flex gap-2">
        <RemoveBtn />
        <Link href={"/editTopic/1"}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
};

export default TopicsList;
