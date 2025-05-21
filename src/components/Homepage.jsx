import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Products from "./Products";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Products />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
