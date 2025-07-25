import React from 'react';
import AdminSidebar from './AdminSidebar';
import MessageCard from './MessageCard';

const dummyMessage = {
  _id: "123",
  message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa est architecto itaque laborum magni odio ipsum error fugit magnam, voluptas velit ipsa, qui, amet consequuntur hic accusantium fuga molestias laudantium eveniet? Harum alias beatae nostrum est odio incidunt. Reiciendis ex molestias necessitatibus laboriosam nemo! Praesentium sunt nesciunt laborum. Enim, non?",
  user: {
    email: "test",
    fullname: "test"
  },
  isSolved: true,
  createdAt: "2025-07-25T10:00:00Z",
};

const AdminMessage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-6">
          Welcome, Admin
        </h2>

        <section id="messages">
          <div className="border border-gray-200 rounded-xl bg-white p-6 shadow-sm h-[85vh] overflow-scroll">
            <h3 className="text-xl font-semibold text-gray-800 mb-8">
              Messages
            </h3>
            <MessageCard message={dummyMessage} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminMessage;
