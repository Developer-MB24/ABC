"use client"
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurCompany from "./components/OurCompany";
import OurTeam from "./components/OurTeam";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) return null; 

  return (
    <>
      <Header />
      <Hero />
      <OurCompany />
      <StatsSection />
      <OurTeam />
      <Testimonials />
    </>
  );
}
