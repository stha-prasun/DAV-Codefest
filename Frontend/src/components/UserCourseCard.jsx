import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourse } from "../redux/courseSlice";
import { useNavigate } from "react-router-dom";

export default function UserCourseCard({ title, description, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Courses = useSelector((store) => store.Courses.Courses);

  const handleView = () => {
    const selectedCourse = Courses.find((course) => course._id === id);
    if (selectedCourse) {
      dispatch(setCourse(selectedCourse));
      navigate(`/course/${selectedCourse?._id}`)
    }
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
