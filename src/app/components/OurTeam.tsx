"use client";

import React from "react";
import Image from "next/image";
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
];

const OurTeam: React.FC = () => {
  return (
    <>
      <section className="py-16 px-5 bg-white text-gray-700">
        <div className="container mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
          <p className="text-gray-500 mt-2 mb-8">
            Duo an malis posidonium. Partem equidem mediocrem graece ceteros
            est.
          </p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Member Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192} 
                    height={192}
                    className="object-cover"
                  />
                </div>
                {/* Member Name and Position */}
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-yellow-500 font-medium mb-4">
                  {member.position}
                </p>
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
                      aria-label={`${member.name} ${i}`}
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

      <div className="flex justify-center items-center bg-black py-16">
        <div className="flex gap-12">
         
          <div className="text-white text-4xl font-bold">
            Bü<span className="tracking-tighter">ro</span>
          </div>

         
          <div className="text-white text-4xl font-bold">
            des<span className="text-red-500">!</span>9n
          </div>

          
          <div className="text-white text-4xl font-serif italic">
            Minimalism
            {/* <div className="text-sm text-gray-400">EST. 1985</div> */}
          </div>

          
          <div className="text-white text-center">
            <div className="flex justify-center items-center gap-1">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <div className="text-2xl font-bold">VIN</div>
              <div className="text-2xl font-bold">TAGE</div>
            </div>
            <div className="text-sm tracking-widest text-gray-400">
              BOOKSTORE
            </div>
          </div>

          
          <div className="text-white text-center">
            <div className="text-4xl font-bold border-t border-b border-gray-500 px-2">
              VINTAGE
            </div>
            <div className="text-sm tracking-widest text-gray-400 mt-1">
              HAIRSTORE
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
