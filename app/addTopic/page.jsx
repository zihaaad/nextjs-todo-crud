import React from "react";

const AddTopicPage = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-6 py-2 rounded"
        type="text"
        placeholder="Topic Title"
      />

      <input
        className="border border-slate-500 px-6 py-2 rounded"
        type="text"
        placeholder="Topic Description"
      />

      <button className="bg-green-600 font-semibold text-white py-2 px-5 w-fit rounded">
        Add Topic
      </button>
    </form>
  );
};

export default AddTopicPage;
