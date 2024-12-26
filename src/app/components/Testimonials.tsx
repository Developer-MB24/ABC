"use client";

import React from "react";
import Image from "next/image";

const testimonials = [
  {
    title: "Beautiful Pages",
    text: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem.",
    image: "/np.jpg",
    name: "Gregory Barker",
    position: "Theme User",
  },
  {
    title: "Clean & Simple",
    text: "Detraxit periculis ex, alienum phaedrum torquatos nec eu, vis nihil expetendis in mei. Mei an pericula euripidis, hinc.",
    image: "/np.jpg",
    name: "Marry Wilkinson",
    position: "Theme User",
  },
  {
    title: "All I Needed",
    text: "Nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Alienum phaedrum torquatos nec a condimentum.",
    image: "/np.jpg",
    name: "Howard Thomas",
    position: "Theme User",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-5 bg-gray-50">
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

            {/* User Info */}
            <div className="flex items-center mt-10">
              <div className="relative w-12 h-12">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
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
