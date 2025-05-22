import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Testimonials from "./Testimonial";
import Products from "./Products";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Products />
      <Testimonials />
    </>
  );
};

export default HomePage;
