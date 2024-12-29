import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#353434] text-gray-400">
      {/* Main Footer Sections */}
      <div className="py-10 px-5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">ABOUT THEME HERE</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Mei an pericula euripidis, hinc partem ei est. Eos ei nisl
              graecis, vix aperiri consequat an. Eius lorem tincidunt.
            </p>
          </div>

          {/* Latest Posts Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">LATEST POSTS HERE</h3>
            <ul className="text-gray-400 text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Street Inspiration
                </a>
                <p className="text-gray-500 text-xs">Dec 29, 2024</p>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Places to get lost
                </a>
                <p className="text-gray-500 text-xs">Dec 29, 2024</p>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Lewis Howes
                </a>
                <p className="text-gray-500 text-xs">Dec 29, 2024</p>
              </li>
            </ul>
          </div>

          {/* Widget Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">SOME WIDGET HERE</h3>
            <ul className="text-gray-400 text-sm">
              <li className="mb-2 hover:text-white">
                <a href="#">Discover All our Amazing Services</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Come on Over & Meet the Team</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Find Out What’s New and Interesting</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Check Out Our Awesome Projects</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Have Questions? Drop Us a Note</a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
            <p className="text-gray-400 text-sm">
              
            </p>
          </div>
        </div>
      </div>

      {/* Copyright and Social Links Section */}
      <div className="bg-black text-gray-400 py-4 px-10">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm text-yellow-500">
            © 2024 ABC, All Rights Reserved
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
