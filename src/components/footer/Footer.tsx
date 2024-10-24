import Image from "next/image";
import React from "react";
import img1 from '../../../public/gallery-images/image2.jpg'
import img2 from '../../../public/gallery-images/image3.jpg'
import img3 from '../../../public/gallery-images/image4.jpg'
import img4 from '../../../public/gallery-images/image5.jpg'
import img5 from '../../../public/gallery-images/image6.jpg'
import img6 from '../../../public/gallery-images/image7.jpg'
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative bottom-0 left-0 text-white bg-[#0FB78D] w-full flex flex-col 2xl:py-14 xl:px-12 xl:py-12 lg:py-10 lg:px-8 md:py-10 md:px-8 sm:py-7 sm:px-8 xs:px-6 xs:py-6 animate-bottomToTop">
      <div className="2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid xs:flex xs:flex-col xs:items-center xs:justify-center sm:grid-cols-2 md:gap-8 2xl:gap-10 2xl:mx-28 xl:gap-8 lg:gap-8 sm:gap-4 xs:gap-8">
        <div className="col-span-1 text-start flex flex-col 2xl:gap-4 gap-3">
          <h3 className="text-2xl font-semibold xs:text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start">About Umair</h3>
          <p className="space-y-2 text-white/80 2xl:w-[75%] xs:text-center sm:text-start xs:w-full md:text-start lg:text-start xl:text-start 2xl:text-start">
            A dedicated Frontend Developer and aspiring Cloud Data Engineer,
            passionate about building seamless user interfaces and efficient
            data solutions.
          </p>
        </div>

        <div className="col-span-1 text-start flex flex-col 2xl:gap-4 gap-3">
            <h3 className="text-2xl font-semibold xs:text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start">Projects</h3>
            <ul className="space-y-2 text-white/80 xs:text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start">
                <li>Cloud Data Engineering</li>
                <li>Exploratory Data Analysis</li>
                <li>Frontend Development</li>
            </ul>
        </div>


        <div className="col-span-1 text-start flex flex-col 2xl:gap-4 gap-3">
            <h3 className="text-2xl font-semibold xs:text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start">Gallery</h3>
            
            <div className="2xl:grid 2xl:grid-cols-3 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 xs:grid xs:grid-cols-3 sm:gap-3 gap-3">
                <Image 
                    src={img1}
                    alt="Image 1"
                    className="w-28 h-auto"
                />

                <Image 
                    src={img2}
                    alt="Image 2"
                    className="w-28 h-auto"
                />

                <Image 
                    src={img3}
                    alt="Image 3"
                    className="w-28 h-auto"
                />

                <Image 
                    src={img4}
                    alt="Image 4"
                    className="w-28 h-auto"
                />

                <Image 
                    src={img5}
                    alt="Image 5"
                    className="w-28 h-auto"
                />

                <Image 
                    src={img6}
                    alt="Image 6"
                    className="w-28 h-auto"
                />
            </div>
        </div>


        <div className="col-span-1 text-start flex flex-col 2xl:gap-4 gap-3">
            <h3 className="text-2xl font-semibold xs:text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start">Contact</h3>
            <ul className="space-y-2 text-white/80 xs:text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start">
                <li>Email: umair@example.com</li>
                <li>Phone: +1 123 456 7890</li>
                <li>Address: 123 Main St, City, State, Zip Code</li>
            </ul>
        </div>
        
        <div className="space-y-6 md:space-y-4 sm:space-y-2 xs:space-y-2">
            <h3 className="text-2xl font-semibold">Connect</h3>
            <div className="flex space-x-4">
                <Link 
                    href={'https://www.linkedin.com/in/umairnawaz7228/'}
                    target="_blank"
                    className="bg-white/90 rounded-full flex items-center justify-center text-black/90 w-10 h-10"
                >
                    <Linkedin/>
                </Link>
                
                <Link 
                    href={'https://github.com/umair7228'}
                    target="_blank"
                    className="bg-white/90 rounded-full flex items-center justify-center text-black/90 w-10 h-10"
                >
                    <Github/>
                </Link>
            </div>
        </div>
      </div>

      
    </footer>
  );
}

export default Footer;
