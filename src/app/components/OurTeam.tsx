import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTumblr } from "react-icons/fa";

const teamMembers = [
  {
    name: "ERIC GRIFFIN",
    position: "CEO",
    image: "/np.jpg",
    description:
      "Alienum phaedrum torquatos nec eu, vis mei detraxit periculis ex, nihil expetendis in mei an",
    socials: [
      { icon: <FaInstagram />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTumblr />, link: "#" },
    ],
  },
  {
    name: "FEDERICO HICKMAN",
    position: "Designer",
    image: "/np.jpg",
    description:
      "Alienum phaedrum torquatos nec eu, vis mei detraxit periculis ex, nihil expetendis in mei an",
    socials: [
      { icon: <FaInstagram />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTumblr />, link: "#" },
    ],
  },
  {
    name: "ANNIE BULLOCK",
    position: "IT Consultant",
    image: "/np.jpg",
    description:
      "Alienum phaedrum torquatos nec eu, vis mei detraxit periculis ex, nihil expetendis in mei an",
    socials: [
      { icon: <FaInstagram />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTumblr />, link: "#" },
    ],
  },
];

const OurTeam: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-700">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
        <p className="text-gray-500 mt-2 mb-8">
          Duo an malis posidonium. Partem equidem mediocrem graece ceteros est.
        </p>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Member Image */}
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Member Name and Position */}
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-yellow-500 font-medium mb-4">{member.position}</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {member.description}
              </p>
              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {member.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
