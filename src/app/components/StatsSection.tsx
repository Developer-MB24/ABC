import React from "react";

const stats = [
  { value: "264", label: "Completed Design" },
  { value: "358", label: "Current Projects" },
  { value: "1465", label: "Satisfied Clients" },
  { value: "85", label: "Created Features" },
];

const profiles = [
    {
      name: "ANNIE BULLOCK",
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an.",
      backgroundColor: "bg-white",
      textColor: "text-gray-800",
      buttonStyle: "bg-black text-white",
    },
    {
      name: "WALLACE NICHOLS",
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an.",
      backgroundColor: "bg-yellow-500",
      textColor: "text-gray-900",
      buttonStyle: "bg-transparent text-black border-2 border-black",
    },
    {
      name: "MARIE DUNCAN",
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an.",
      backgroundColor: "bg-gray-800",
      textColor: "text-white",
      buttonStyle: "bg-yellow-500 text-black",
    },
  ];

const StatsSection: React.FC = () => {
  return (
    <>
    <section className="bg-black py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-white">
            <h2 className="text-5xl font-bold">{stat.value}</h2>
            <p className="mt-2 text-lg font-medium text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
    
    <section className=" grid grid-cols-1 lg:grid-cols-3">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className={`${profile.backgroundColor}  p-8 text-center flex flex-col items-center justify-between min-h-[300px]`}
        >
          <div>
            <h2 className={`text-2xl font-bold ${profile.textColor} mb-4`}>
              {profile.name}
            </h2>
            <p className={`${profile.textColor} leading-relaxed`}>
              {profile.description}
            </p>
          </div>
          <button
            className={`${profile.buttonStyle} mt-6 px-6 py-3 rounded-full font-bold`}
          >
            VIEW MORE
          </button>
        </div>
      ))}
    </section>
    </>
  );
};

export default StatsSection;
