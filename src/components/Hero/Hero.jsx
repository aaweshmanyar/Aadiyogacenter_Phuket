import React from "react";
import { heroData } from "./Herodata"; // Adjust path if necessary
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const navigatetab = () => {
    navigate('/normalclass');
  };

  return (
    <section
      className="min-h-[70vh] lg:min-h-[100vh] pt-9 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroData.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative container mx-auto text-white font-bold px-4 z-10">
        <div className="flex flex-col items-center lg:flex-row lg:items-start pt-16 space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Text Section */}
          <div
            className="flex-1 lg:mt-12 text-center lg:text-left relative"
            data-aos="fade-up"
            data-aos-delay="300"
            style={{
              zIndex: 10,
            }}
          >
            {/* Background for text similar to the attached image */}
            <div className="relative mt-[100px]  bg-white/70 text-gray-800 p-6 rounded-md w-full max-w-md lg:max-w-lg">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-4">
                {heroData.title1} <br /> {heroData.title2}
              </h1>
              <p className="mb-6 text-heading lg:mb-12 text-lg leading-relaxed lg:leading-loose">
                {heroData.description}
              </p>

              {/* Button styled similarly to the reference */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={navigatetab}
                  className="py-2 px-5 text-lg bg-green-300 hover:bg-green-200 text-white rounded-md transition-all duration-300 ease-in-out shadow-lg"
                >
                  {heroData.btn1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
