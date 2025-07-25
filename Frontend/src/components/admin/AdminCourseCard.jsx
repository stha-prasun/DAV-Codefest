import React from "react";
import {Trash} from "lucide-react";

export default function AdminCourseCard({ title, description, id }) {

  const handleDelete = async () => {
  };

  const handleEdit = async () => {
  };

  return (
    <div
      className="card bg-base-100 w-full shadow-sm"
    >
      <figure>
        <img src="/code.jpg" alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-[#080A16] opacity-50">{description}</p>
        <div className="card-actions justify-end flex gap-2">
          <button onClick={handleEdit} className="btn btn-primary btn-sm w-15">
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-ghost btn-sm">
            <Trash size={20} color="#9B0003"/>
          </button>
        </div>
      </div>
    </div>
  );
}