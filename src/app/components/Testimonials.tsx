"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    title: "Beautiful Pages",
    text: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem.",
    image: "/np.jpg",
    name: "Gregory Barker",
    position: "Theme User",
  },
  {
    title: "Beautiful Pages",
    text: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem.",
    image: "/np.jpg",
    name: "Gregory Barker",
    position: "Theme User",
  },
  {
    title: "Beautiful Pages",
    text: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem.",
    image: "/np.jpg",
    name: "Gregory Barker",
    position: "Theme User",
  },
  {
    title: "Beautiful Pages",
    text: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem.",
    image: "/np.jpg",
    name: "Gregory Barker",
    position: "Theme User",
  },
  {
    title: "Beautiful Pages",
    text: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem.",
    image: "/np.jpg",
    name: "Gregory Barker",
    position: "Theme User",
  },
  {
    title: "Beautiful Pages",
    text: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem.",
    image: "/np.jpg",
    name: "Gregory Barker",
    position: "Theme User",
  },
  {
    title: "Beautiful Pages",
    text: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem.",
    image: "/np.jpg",
    name: "Gregory Barker",
    position: "Theme User",
  },
  {
    title: "Beautiful Pages",
    text: "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem.",
    image: "/np.jpg",
    name: "Gregory Barker",
    position: "Theme User",
  },
  
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-5 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          What People Are Saying
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
          // navigation
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white p-8 rounded-lg shadow-md">
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
                    <p className="text-xs text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
