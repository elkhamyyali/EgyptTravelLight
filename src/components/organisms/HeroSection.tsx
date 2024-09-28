import React from "react";
import HeroSlider from "../SliderMainHero/HeroSlider";
import SearchForm from "../atoms/Form/Form";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Image Slider */}
      <HeroSlider />

      {/* Overlay Content */}
      <div className="absolute lg:mt-32 mt-56 inset-0 flex flex-col items-center justify-center">
        {/* Search Form */}
        <SearchForm />
      </div>
    </div>
  );
};

export default HeroSection;
