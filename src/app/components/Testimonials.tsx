"use client"
import React from "react";

const testimonials = [
  {
    title: "Beautiful Pages",
    text: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem.",
    image: "/images/user1.jpg",
    name: "Gregory Barker",
    position: "Theme User",
  },
  {
    title: "Clean & Simple",
    text: "Detraxit periculis ex, alienum phaedrum torquatos nec eu, vis nihil expetendis in mei. Mei an pericula euripidis, hinc.",
    image: "/images/user2.jpg",
    name: "Marry Wilkinson",
    position: "Theme User",
  },
  {
    title: "All I Needed",
    text: "Nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Alienum phaedrum torquatos nec a condimentum.",
    image: "/images/user3.jpg",
    name: "Howard Thomas",
    position: "Theme User",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-lg shadow-md"
          >
            {/* Card Content */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {testimonial.title}
            </h3>
            <p className="text-gray-500 italic mb-6">“{testimonial.text}”</p>

            {/* Yellow Triangle */}
            {/* <div className="absolute -bottom-6 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-yellow-500"></div> */}

            {/* User Info */}
            <div className="flex items-center mt-10">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-sm font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
