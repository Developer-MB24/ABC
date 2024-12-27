"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideProps {
  title: string;
  description: string;
  button: string;
  image: string;
}

const Hero: React.FC = () => {
  const slides: SlideProps[] = [
    {
      title: "Explore The Future Of Design",
      description:
        "Awesome Theme for Future Design Pro eu vidit legere, his ex autem facilis referrentur. Pericula adipiscing vituperata at qui.",
      button: "Purchase",
      image: "/images/hero1.avif",
    },
   
    {
      title: "Explore The Future Of Design",
      description:
        "Awesome Theme for Future Design Pro eu vidit legere, his ex autem facilis referrentur. Pericula adipiscing vituperata at qui.",
      button: "Purchase",
      image: "/images/hero2.avif",
    },
    {
      title: "Explore The Future Of Design",
      description:
        "Awesome Theme for Future Design Pro eu vidit legere, his ex autem facilis referrentur. Pericula adipiscing vituperata at qui.",
      button: "Purchase",
      image: "/images/hero3.avif",
    },
    
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        // navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen flex items-center justify-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  quality={90}
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              {/* Slide Content */}
              <div className="relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8">{slide.description}</p>
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
