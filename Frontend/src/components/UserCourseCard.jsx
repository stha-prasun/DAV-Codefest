import React from "react";

export default function UserCourseCard({ title, description, id }) {

  const handleView = async () => {
  };

  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img src="/code.jpg" alt={title} />
      </figure>
      <div className="card-body bg-white">
        <h2 className="card-title text-[#080A16]">{title}</h2>
        <p className="text-[#080A16] opacity-50">{description}</p>
        <div className="card-actions justify-end flex gap-2 ">
          <button
            onClick={handleView}
            className="btn bg-[#0c1756] text-white btn-sm w-25"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}