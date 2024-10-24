"use client";
import React, { useState } from "react";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import hero from "../../../public/bg-images/hero-image.webp";

function HomePage() {
  const [isVideoOpen, setVideoOpen] = useState(false);

  // Function to toggle video
  const handleVideoClick = () => {
    setVideoOpen(true);
  };

  // Function to close video when clicking outside the video
  const handleCloseModal = (e: any) => {
    if (e.target.classList.contains("modal")) {
      setVideoOpen(false);
    }
  };

  return (
    <main className="relative sm:flex sm:flex-row items-center justify-center xs:flex xs:flex-col xs:px-8 h-screen w-full gap-72 lg:gap-44 xl:gap-56 md:gap-28 sm:gap-20 xs:gap-14">
      <Image
        src={hero}
        alt="Hero Image"
        fill
        className="fixed w-full h-full -z-50 opacity-50 bg-cover bg-center"
      />

      <div className="2xl:w-1/3 xl:w-[33%] lg:w-1/3 md:w-1/2 sm:w-1/2 flex flex-col justify-center lg:gap-y-3 sm:gap-y-2 md:gap-y-3 xs:gap-y-6 animate-topToBottom">
        {/* Main Heading */}
        <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl xs:text-center sm:text-start font-semibold font-serif text-white 2xl:mb-4 xl:mb-3 text-start">
          Learning Center <br /> for Your Kids
        </h1>

        {/* Subheading */}
        <p className="2xl:text-xl xl:text-xl lg:text-lg text-white 2xl:mb-8 xl:mb-6 lg:mb-5 text-start xs:text-center sm:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          accusantium. Suscipit, dolor sequi, voluptate facere recusandae veniam
          totam ut!
        </p>
      </div>


      {/* Video Play Button */}
      <button
        className="text-green-500 hover:text-green-700 focus:outline-none mb-10 md:mb-4 2xl:mr-60 lg:mr-36 xl:mr-44 animate-topToBottom"
        onClick={handleVideoClick}
      >
        <PlayCircle className="w-20 h-20 md:w-16 md:h-16" />
      </button>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[600px] sm:w-[550px] xs:w-[350px]">
            <video className="rounded-lg" controls>
              <source src="/video/school.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </main>
  );
}

export default HomePage;
