import React from "react";
import { Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { setCourse } from "../../redux/courseSlice";
import { useDispatch } from "react-redux";
import { COURSE_API_ENDPOINT } from "../../utils/constants";
import toast from "react-hot-toast";
import axios from "axios";
import useGetAllCourses from "../../hooks/useGetAllCourses";

export default function AdminCourseCard({ course }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchCourses = useGetAllCourses();

  const handleDelete = async () => {
  try {
    const res = await axios.delete(
      `${COURSE_API_ENDPOINT}/delete`,
      {
        data: { id: course._id },
        withCredentials: true,
      }
    );

    if (res.data?.success) {
      toast.success(res.data.message);
      fetchCourses();
    }
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
};

  const handleEdit = async () => {
    dispatch(setCourse(course));
    navigate("/admin/course/edit");
  };

  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img src="/code.jpg" alt={course?.title} />
      </figure>
      <div className="card-body bg-white">
        <h2 className="card-title text-[#080A16]">{course?.title}</h2>
        <p className="text-[#080A16] opacity-50">{course?.description}</p>
        <div className="card-actions justify-end flex gap-2 ">
          <button
            onClick={handleEdit}
            className="btn bg-[#0c1756] text-white btn-sm w-15"
          >
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-ghost btn-sm">
            <Trash size={20} color="#9B0003" />
          </button>
        </div>
      </div>
    </div>
  );
}
