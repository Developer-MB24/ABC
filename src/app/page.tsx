// import Image from "next/image";

"use client"

import Header from "./components/Header";
import dynamic from "next/dynamic";


// import Hero from "./components/Hero";
import OurCompany from "./components/OurCompany";
import OurTeam from "./components/OurTeam";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";



export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <OurCompany/>
    <StatsSection/>
    <OurTeam/>
    <Testimonials/>
    </>
  );
}
const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
