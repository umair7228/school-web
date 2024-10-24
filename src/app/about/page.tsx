import React from "react";
import hero from "../../../public/bg-images/hero-image.webp";
import Image from "next/image";
import { Check } from "lucide-react";
import img from '../../../public/gallery-images/image4.jpg'

const About = () => {
  return (
    <main className=" flex flex-col items-center justify-center w-full">
      <div className="relative w-full h-screen flex items-center justify-center">
        <Image
          src={hero}
          alt="Hero Image"
          className=" w-full h-full -z-50 opacity-50 bg-cover bg-center"
        />

        <div className=" absolute w-1/3 animate-topToBottom">
          {/* Main Heading */}
          <h1 className="text-6xl font-semibold font-serif text-white mb-4 text-center">
            About Us
          </h1>

          {/* Subheading */}
          <p className=" text-xl text-white text-center mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            explicabo saepe doloremque nisi! atque praesentium? Autem maiores
            assumenda molestias nesciunt.
          </p>
        </div>
      </div>

      <div className=" bg-white text-black w-full flex items-center justify-center px-80 pb-32 pt-24 gap-28">

        <div className="flex flex-col gap-3 w-[400px] animate-leftToRight ">
          <h2 className="text-4xl text-green-600/90 text-start font-semibold font-serif">
            Why Choose Us
          </h2>
          <p className="text-black/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, saepe rem eos illo nobis quos exercitationem dolores
            labore? Quisquam quae fugit nisi, nesciunt excepturi vero voluptatem
            ullam. Magni, cupiditate vel.
          </p>

          <div className="flex gap-4">
            <Check className="text-green-500"/>
            <p className="text-black/80">Separated they live</p>
          </div>

          <div className="flex gap-4">
            <Check className="text-green-500"/>
            <p className="text-black/80">Bookmarksgrove right at the coast</p>
          </div>

          <div className="flex gap-4">
            <Check className="text-green-500"/>
            <p className="text-black/80">Large language ocean</p>
          </div>

          <div className="flex gap-20 mt-10">
            <span className="text-green-500 text-3xl font-serif flex flex-col gap-2">
              4,000+
              <p className="text-black/80 text-sm">Students</p>
            </span>

            <span className="text-green-500 text-3xl font-serif flex flex-col gap-2">
              49
              <p className="text-black/80 text-sm">Teacher</p>
            </span>

            <span className="text-green-500 text-3xl font-serif flex flex-col gap-2">
              12
              <p className="text-black/80 text-sm">Awards</p>
            </span>
            
          </div>

        </div>

        {/* image  */}
          
        <div className=" animate-rightToLeft">
          <Image 
            src={img}
            alt="Image"
            className="w-[600px]"
          />
        </div>
        
      </div>
    </main>
  );
};

export default About;
