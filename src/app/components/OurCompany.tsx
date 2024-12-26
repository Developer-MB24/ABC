"our client"
import React from "react";
import { FaCode, FaCog, FaCamera, FaDesktop, FaUsers, FaRocket, FaGem } from "react-icons/fa";

const features = [
  {
    icon: <FaCode size={30} />,
    title: "Make it Simple",
    description: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei.",
  },
  {
    icon: <FaCog size={30} />,
    title: "New Features",
    description: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei.",
  },
  {
    icon: <FaCamera size={30} />,
    title: "Revolution Slider",
    description: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei.",
  },
  {
    icon: <FaDesktop size={30} />,
    title: "Retina Ready",
    description: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei.",
  },
  {
    icon: <FaDesktop size={30} />,
    title: "New Shortcodes",
    description: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "About Us",
    description: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei.",
  },
];



const OurCompany: React.FC = () => {
  return (
    <>
    <section className="py-16 bg-gray-50 text-gray-700">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4">Our Company</h2>
        <p className="text-lg text-gray-500 mb-12">
          Strategy Planning Lorem Ipsum sit dolor alienum phaedrum torquatos nece, vis detraxit periculais nihik dameri.
        </p>
        {/* Yellow Divider */}
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-yellow-500"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 border rounded-lg shadow-sm bg-white">
              <div className="text-yellow-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
   
   {/* Easy Imports Section  */}

   
    <section className="py-16 bg-white text-gray-700">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Easy Import</h2>
          <div className="w-16 h-1 bg-gray-300 mb-6"></div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
            expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
            Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt
            vix at, vel pertinax sensibus id, error epicurei mea et. Mea
            facilisis urbanitas moderatius id. Vis ei rationibus definiebas, eu
            qui purto zril laoreet. Ex error omnium interpretaris pro, alia
            illum ea vim pericula euripidis.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800">
            VIEW MORE
          </button>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-2 gap-6">
          {/* First Icon - Outstanding Support */}
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border-4 border-gray-200"></div>
              <div className="absolute w-full h-full rounded-full border-4 border-yellow-500" style={{ clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)" }}></div>
              <FaRocket className="text-gray-800 text-3xl" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Outstanding Support
            </h3>
          </div>

          {/* Second Icon - Web Development */}
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border-4 border-gray-200"></div>
              <div className="absolute w-full h-full rounded-full border-4 border-yellow-500" style={{ clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)" }}></div>
              <FaGem className="text-gray-800 text-3xl" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Web Development
            </h3>
          </div>
        </div>
      </div>
    </section>

   
    </>
  );
};

export default OurCompany;
