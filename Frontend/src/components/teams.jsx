import React from "react";

const teamMembers = [
  {
    name: "Prasun Shrestha",
    role: "Lead Developer",
    desc: "Prasun is a skilled developer with 5 years of experience in full-stack development.",
    image: "src/assets/Prasun_Team.JPG",
  },
  {
    name: "Niraj Kushwaha",
    role: "Backend Engineer",
    desc: "Niraj specializes in building robust backend systems and APIs.",
    image: "src/assets/Niraj_Team.JPG",
  },
  {
    name: "Prishma Dahal",
    role: "UI/UX Designer",
    desc: "Prishma is passionate about creating user-friendly interfaces.",
    image: "src/assets/Prishma_Team.JPG",
  },
  {
    name: "Rohan Shrestha",
    role: "Full Stack Dev",
    desc: "Rohan has a diverse skill set, working on both frontend and backend technologies.",
    image: "src/assets/Rohan_Team.JPG",
  },
  {
    name: "Aarav Bhattarai",
    role: "Data Scientist",
    desc: "Aarav uses data-driven insights to solve complex problems.",
    image: "src/assets/Aarav_Team.JPG",
  },
];

const Teams = () => {
  const firstRow = teamMembers.slice(0, 3);
  const secondRow = teamMembers.slice(3);

  return (
    <section className="bg-[#FEFEFF] py-20">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h1 className="text-5xl font-medium font-serif text-[#080A16] mb-6">
          Our Teams
        </h1>
        <p className="text-lg text-gray-700 mb-15 max-w-2xl mx-auto">
          Meet the talented individuals behind <span className="font-medium">DsaBuddy</span>,
          dedicated to helping you master Data Structures and Algorithms.
        </p>

        {/* First Row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-15">
          {firstRow.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        {/* Second Row: 2 cards centered in 3-column grid */}
        <div className="grid grid-cols-3 gap-8 justify-center">
          <div className="col-start-1 col-span-3 flex gap-8 justify-center">
            {secondRow.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member }) => (
  <div className="w-full max-w-sm bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center">
    {member.image ? (
      <img
        src={member.image}
        alt={member.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 mb-4"
      />
    ) : (
      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl mb-4">
        👤
      </div>
    )}
    <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
    <p className="text-gray-600 text-center mb-2">{member.desc}</p>
    <span className="mt-2 text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
      {member.role}
    </span>
  </div>
);


export default Teams;
