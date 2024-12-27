
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebook,
  // faTumblr,
  // faVimeo,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-4 px-10">
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
          {/* <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faTumblr} />
          </a> */}
          {/* <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faVimeo} />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
