import React from "react";
import hero from "../../../public/bg-images/hero-image.webp";
import Image from "next/image";
import { Check } from "lucide-react";
import img1 from '../../../public/gallery-images/image1.jpg'
import img2 from '../../../public/gallery-images/image2.jpg'
import img3 from '../../../public/gallery-images/image3.jpg'
import img4 from '../../../public/gallery-images/image4.jpg'
import img5 from '../../../public/gallery-images/image5.jpg'
import img6 from '../../../public/gallery-images/image6.jpg'
import img7 from '../../../public/gallery-images/image7.jpg'
import img8 from '../../../public/gallery-images/image8.jpg'
import img9 from '../../../public/gallery-images/image9.jpg'

const Gallery = () => {
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
            Our Gallery
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
        {/* image  */}
          
        <div className="grid grid-cols-3 gap-8">
          <Image 
            src={img1}
            alt="Image"
            className="w-[400px] rounded-lg"
          />

          <Image 
            src={img2}
            alt="Image"
            className="w-[400px] rounded-lg"
          />
          <Image 
            src={img3}
            alt="Image"
            className="w-[400px] rounded-lg"
          />
          <Image 
            src={img4}
            alt="Image"
            className="w-[400px] rounded-lg"
          />
          <Image 
            src={img5}
            alt="Image"
            className="w-[400px] rounded-lg"
          />
          <Image 
            src={img6}
            alt="Image"
            className="w-[400px] rounded-lg"
          />
          <Image 
            src={img7}
            alt="Image"
            className="w-[400px] rounded-lg"
          />
          <Image 
            src={img8}
            alt="Image"
            className="w-[400px] rounded-lg"
          />
          <Image 
            src={img9}
            alt="Image"
            className="w-[400px] rounded-lg"
          />
        </div>
        
      </div>
    </main>
  );
};

export default Gallery;
