import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constants";

const Membership = () => {
  const loggedInUser = useSelector((store)=>store?.User.loggedInUser);

  const handleClick = async ()=>{
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/membership/buy`, {
        id: loggedInUser?._id
      });

      console.log(res);

      if (res?.data?.success) {
        toast.success(res.data.message);
        navigate("/user/home");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-white text-black flex items-center justify-center py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Free Membership Card */}
          <div className="border border-gray-300 rounded-lg p-6 shadow-md flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-center opacity-40">
              Free Plan
            </h2>
            <ul className="space-y-2 flex-1 opacity-30">
              <li>✔ Access to limited courses</li>
              <li>✔ Weekly newsletter</li>
              <li>✔ Community forum access</li>
            </ul>
            <button className="mt-auto font-semibold py-2 px-4 rounded bg-gray-200 transition opacity-30">
              Free Plan Activated
            </button>
          </div>

          {/* Premium Membership Card */}
          <div className="border border-black bg-white text-black rounded-lg p-6 shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Premium Plan
              </h2>
              <ul className="space-y-2 mb-6">
                <li>✔ Access to all courses</li>
                <li>✔ One-on-one mentorship</li>
                <li>✔ Downloadable resources</li>
                <li>✔ Priority support</li>
                <li>✔ Monthly Q&A sessions</li>
              </ul>
            </div>
            <button onClick={handleClick} className="mt-auto bg-[#080A16] text-[#FFFFF8] font-semibold py-2 px-4 rounded border border-gray-200 transition hover:bg-gray-100 hover:text-black">
              Buy Membership
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Membership;
