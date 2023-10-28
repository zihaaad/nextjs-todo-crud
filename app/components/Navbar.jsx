import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-700 px-8 py-2 rounded">
      <Link className="text-white font-semibold text-2xl" href={"/"}>
        NEXT.js TODO APP
      </Link>
      <Link className="bg-white p-2 font-semibold" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
