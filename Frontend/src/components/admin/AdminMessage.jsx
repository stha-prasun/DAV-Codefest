import React, { useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import MessageCard from "./MessageCard";
import useGetAllMessage from "../../hooks/useGetAllMessage";
import { useSelector } from "react-redux";

const AdminMessage = () => {
  const fetchMessage = useGetAllMessage();

  useEffect(() => {
    fetchMessage();
  }, []);

  const messages = useSelector((store) => store.Message.Message);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <h2 className="text-2xl font-semibold text-[#080A16] mb-6">
          Welcome, Admin
        </h2>

        <section id="messages">
          <div className="border border-gray-200 rounded-xl bg-white p-6 shadow-sm h-[85vh] overflow-y-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-8">
              Messages
            </h3>

            {messages.length === 0 ? (
              <p className="text-gray-500">No messages available.</p>
            ) : (
              messages.map((msg) => (
                <MessageCard key={msg._id} message={msg} />
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminMessage;
