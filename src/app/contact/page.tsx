import React from "react";
import hero from "../../../public/bg-images/hero-image.webp";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
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
            Get In Touch
          </h1>

          {/* Subheading */}
          <p className=" text-xl text-white text-center mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            explicabo saepe doloremque nisi! atque praesentium? Autem maiores
            assumenda molestias nesciunt.
          </p>
        </div>
      </div>

      <div className=" bg-white text-black w-full flex items-start justify-center px-80 pb-32 pt-24 gap-20">
        <div className="flex flex-col gap-3 w-[800px]">
          <form className="flex flex-col gap-8">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Name"
                className="border border-black/60 border-solid rounded-md px-4 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-black/60 border-solid rounded-md px-4 py-2 w-full"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="border border-black/60 border-solid rounded-md px-4 py-2 w-full"
            />

            <textarea
              rows={8}
              placeholder="Message"
              className="border border-black/60 border-solid rounded-md px-4 py-2 w-full"
            />
 {/* className="border border-black/60 bg-green-500 text-white font-semibold border-solid rounded-md px-4 py-2 w-full hover:bg-white/90 hover:text-green-500 duration-200"*/}
            <button className="subBtn">
              Submit
            </button>
          </form>
        </div>

        {/* image  */}

        <div className="flex flex-col items-start justify-start gap-8">
          <div className="flex gap-3 items-center w-full">
            <span className="text-white bg-green-500 p-2 rounded-full w-12 h-12 flex items-center justify-center">
              <MapPin className="w-9 h-9" />
            </span>
            <div>
              <h3 className="text-xl font-serif">Location:</h3>
              <p>43 Raymouth Rd. Baltemoer, London 3910</p>
            </div>
          </div>

          <div className="flex gap-3 items-center w-full">
            <span className="text-white bg-green-500 p-2 rounded-full w-12 h-12 flex items-center justify-center">
              <Clock className="w-9 h-9" />
            </span>
            <div>
              <h3 className="text-xl font-serif">Open Days:</h3>
              <p>Monday To Friday</p>
            </div>
          </div>

          <div className="flex gap-3 items-center w-full">
            <span className="text-white bg-green-500 p-2 rounded-full w-12 h-12 flex items-center justify-center">
              <Mail className="w-9 h-9" />
            </span>
            <div>
              <h3 className="text-xl font-serif">Email:</h3>
              <p>Click on hire to contect me</p>
            </div>
          </div>

          <div className="flex gap-3 items-center w-full">
            <span className="text-white bg-green-500 p-2 rounded-full w-12 h-12 flex items-center justify-center">
              <Phone className="w-9 h-9" />
            </span>
            <div>
              <h3 className="text-xl font-serif">Call:</h3>
              <p>+92 12345676</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
