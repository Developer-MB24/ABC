import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const services = [
  {
    title: "Retina ready",
    description:
      "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354l1.176 2.387 2.637.384-1.906 1.857.45 2.623L12 10.926l-2.357 1.239.45-2.623-1.906-1.857 2.637-.384L12 4.354z"
        />
      </svg>
    ),
  },
  {
    title: "Easy-to-Use",
    description:
      "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V5a1 1 0 00-1-1H5a1 1 0 00-1 1v6h12zM7 13v2h4v-2M3 17h16M8 21h8"
        />
      </svg>
    ),
  },
  {
    title: "Easy Import",
    description:
      "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 5h5l-1.34 1.5M7 5H3v10h4V5zm6 6h6M4 15h16m-6-6h4m0 0V5m0 6v6"
        />
      </svg>
    ),
  },
  {
    title: "Loads of Layouts",
    description:
      "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h4v12H6zM14 6h4v12h-4z"
        />
      </svg>
    ),
  },
];

const processSteps = [
  { id: "01", title: "Make It Simple", image: "/images/hero1.avif" },
  {
    id: "02",
    title: "New Shortcodes",
    image: "/images/hero1.avif",
    dark: true,
  },
  { id: "03", title: "Retina Ready", image: "/images/hero1.avif" },
  { id: "04", title: "New Features", image: "/images/hero1.avif" },
  { id: "05", title: "Revolution Slider", image: "/images/hero1.avif" },
];

const skills = [
  { title: "Design", percentage: 75 },
  { title: "Development", percentage: 83 },
  { title: "Photography", percentage: 68 },
];

const pricingPlans = [
  {
    name: "BASIC",
    price: 19,
    description:
      "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis",
    popular: false,
  },
  {
    name: "STANDARD",
    price: 49,
    description:
      "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis",
    popular: true,
  },
  {
    name: "ADVANCED",
    price: 99,
    description:
      "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis",
    popular: false,
  },
  {
    name: "PREMIUM",
    price: 199,
    description:
      "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis",
    popular: false,
  },
];

const Services: React.FC = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-black"
        style={{ backgroundImage: "url('/images/hero1.avif')" }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">Blog Standard Left Sidebar</h1>
          <p className="text-lg mt-2">Strategy Planning</p>
          <div className="mt-4 border-t-4 border-yellow-500 w-16 mx-auto"></div>
        </div>
      </div>

      {/* Our Company */}
      <section className="py-16 px-10  bg-white">
        <div className="container  mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-black mb-2">
            Our Company
          </h2>
          <p className="text-gray-500 text-lg">
            Attention to Detail
            <span className="block mx-auto w-12 h-1 bg-yellow-500 rounded-lg mt-1"></span>
          </p>
          <div className="grid grid-cols-1  lg:grid-cols-4 gap-8 mt-10 relative">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center relative flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                {index !== services.length - 1 && (
                  <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-px h-16 border-r-2 border-dashed border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 px-20 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hero1.avif')" }}
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Our Skills</h2>
            <p className="mb-6">
              Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei
              est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem
              tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.
              Mea facilisis urbanitas moderatius id. Vis ei rationibus
              definiebas, eu qui purto zril laoreet. Ex error omnium
              interpretaris pro lorem tincidunt vix at
            </p>
            <div className="border-dotted border-b-2 border-gray-500 w-1/2 mb-4"></div>
          </div>

          {/* Right Section */}
          <div>
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">{skill.title}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="relative w-full bg-gray-700 h-2 rounded">
                  <div
                    className="absolute top-0 left-0 h-2 rounded bg-yellow-500"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-black mb-2">
            Our Process
          </h2>
          <p className="text-gray-500 text-lg">
            Loads of Layouts
            <span className="block mx-auto w-12 h-1 bg-yellow-500 rounded-lg mt-1"></span>
          </p>
          <div className=" h-[40vh] flex justify-center items-center mt-10 space-x-6">
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center group">
                  <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full border-4 border-gray-300 overflow-hidden group-hover:border-black group-hover:bg-black transition-all duration-300">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:opacity-0"
                      style={{
                        backgroundImage: `url(${step.image})`,
                      }}
                    ></div>
                    <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white group-hover:text-white">
                      {step.id}
                    </span>
                  </div>
                  <p className="text-black text-sm font-medium mt-4">
                    {step.title}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <span className="text-yellow-500 text-2xl">&#8594;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Plans */}
      <section className="py-16 px-5 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-black mb-10">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md border-2 border-gray-200 hover:border-yellow-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center py-6 bg-black text-white">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-yellow-500 font-medium mt-1">
                    Most Popular
                  </p>
                </div>
                <div className="text-center py-8 bg-white">
                  <p className="text-5xl font-extrabold text-black">
                    ${plan.price}
                  </p>
                  <p className="text-gray-500 text-lg">Per Month</p>
                </div>
                <div className="px-6 py-4 bg-gray-100 text-center">
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                  <button className="mt-6 px-6 py-2 rounded-full text-white bg-yellow-500 hover:opacity-80 transition">
                    Sign Up Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
