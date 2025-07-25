import React from 'react'

const teams = () => {
  return (
    <div>
      <section className="bg-[#FEFEFF]">
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <h1 className="text-4xl font-medium font-serif text-[#080A16] mb-6">
            Our Teams
          </h1>
          <p className="text-lg text-gray-700 mb-12">
            Meet the talented individuals behind DsaBuddy, dedicated to helping
            you master Data Structures and Algorithms
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-200 p-6 rounded-lg shadow-lg">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Team Member 1</h2>
              <p className="text-gray-600">Role: Developer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Team Member 2</h2>
              <p className="text-gray-600">Role: Designer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Team Member 3</h2>
              <p className="text-gray-600">Role: Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default teams
