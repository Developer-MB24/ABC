import React from "react";

const OurWork: React.FC = () => {
  return (
    <div className="bg-white py-16">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">View our Work</h2>
        <p className="text-lg text-gray-500 mt-2">Strategy Planning</p>
        <div className="h-1 w-16 bg-yellow-500 mx-auto mt-2"></div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {/* Image Card 1 */}
        <div className="relative group">
          <img
            src="/images/hero1.avif"
            alt="Work Example 1"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
            <h3 className="text-white text-2xl font-semibold">
              Let’s Work Together
            </h3>
            <p className="text-yellow-500 text-lg mt-2">Business</p>
          </div>
        </div>

        {/* Image Card 2 */}
        <div className="relative group">
          <img
            src="/images/hero1.avif"
            alt="Work Example 2"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
            <h3 className="text-white text-2xl font-semibold">
              Let’s Work Together
            </h3>
            <p className="text-yellow-500 text-lg mt-2">Consulting</p>
          </div>
        </div>

        {/* Image Card 3 */}
        <div className="relative group">
          <img
            src="/images/hero1.avif"
            alt="Work Example 3"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
            <h3 className="text-white text-2xl font-semibold">
              Let’s Work Together
            </h3>
            <p className="text-yellow-500 text-lg mt-2">Technology</p>
          </div>
        </div>
        {/* Image Card 4 */}
        <div className="relative group">
          <img
            src="/images/hero1.avif"
            alt="Work Example 3"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
            <h3 className="text-white text-2xl font-semibold">
              Let’s Work Together
            </h3>
            <p className="text-yellow-500 text-lg mt-2">Technology</p>
          </div>
        </div>
        {/* Image Card 5 */}
        <div className="relative group">
          <img
            src="/images/hero1.avif"
            alt="Work Example 3"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
            <h3 className="text-white text-2xl font-semibold">
              Let’s Work Together
            </h3>
            <p className="text-yellow-500 text-lg mt-2">Technology</p>
          </div>
        </div>
        {/* Image Card 6 */}
        <div className="relative group">
          <img
            src="/images/hero1.avif"
            alt="Work Example 3"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
            <h3 className="text-white text-2xl font-semibold">
              Let’s Work Together
            </h3>
            <p className="text-yellow-500 text-lg mt-2">Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
