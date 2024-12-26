"use client"


import React from "react";

const Hero: React.FC = () => {
  const slide = {
    title: "Explore The Future Of Design",
    description:
      "Awesome Theme for Future Design Pro eu vidit legere, his ex autem facilis referrentur. Pericula adipiscing vituperata at qui.",
    button: "Purchase",
  };

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-30"
        style={{
          backgroundImage: "url('/images/hero.avif')",
        }}
      ></div>
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-screen px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{slide.title}</h1>
          <p className="text-lg md:text-xl mb-8">{slide.description}</p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600">
            {slide.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
