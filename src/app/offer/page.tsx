import { BookA, BookOpenText, Calculator, FileClock, PenTool, Sandwich, ShieldCheck, Volleyball } from "lucide-react";
import React from "react";

const Offer = () => {
  return (
    <main className="bg-white text-black w-full flex flex-col items-center justify-center pb-44 animate-bottomToTop">
      {/* start divs */}
      <div className="flex gap-10">
        <div className="w-[350px] h-[260px] bg-green-500 -mt-10 p-6 flex flex-col gap-3">
          <span className="bg-green-400 w-12 h-12 text-white/90 rounded-2xl flex items-center justify-center">
            <BookOpenText className="w-7 h-7" />
          </span>
          <h4 className="text-xl font-semibold text-white">Learn</h4>
          <p className="text-white">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="w-[350px] h-[260px] bg-orange-500 -mt-10 p-6 flex flex-col gap-3">
          <span className="bg-orange-400 w-12 h-12 text-white/90 rounded-2xl flex items-center justify-center">
            <Volleyball className="w-7 h-7" />
          </span>
          <h4 className="text-xl font-semibold text-white">Play</h4>
          <p className="text-white">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="w-[350px] h-[260px] bg-blue-400 -mt-10 p-6 flex flex-col gap-3">
          <span className="bg-blue-300 w-12 h-12 text-white/90 rounded-2xl flex items-center justify-center">
            <Sandwich className="w-7 h-7" />
          </span>
          <h4 className="text-xl font-semibold text-white">Meal</h4>
          <p className="text-white">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>

      {/* title and headline */}
      <h2 className="text-4xl font-serif text-green-500 text-center mt-20">
        What <span className=" border-b-4 border-orange-500">We</span> Offer
      </h2>
      <p className="text-black/90 text-center mt-10 mb-12">
        Far far away, behind the word mountains, far from the countries Vokalia
        and <br /> Consonantia, there live the blind texts.
      </p>

      <div className="grid grid-cols-3 gap-x-20 gap-y-10 mx-80">
        {/* box 1 */}
        <div className="flex flex-col gap-3">
          <span className="border border-gray-300 p-1 rounded-3xl w-14 h-14 flex items-center justify-center">
            <span className="bg-orange-200/50 w-12 h-12 text-orange-400 rounded-3xl flex items-center justify-center">
              <Calculator className="w-7 h-7" />
            </span>
          </span>
          <h3 className="text-2xl font-serif text-black/80">Math Class</h3>
          <p className="text-gray-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* box 2 */}
        <div className="flex flex-col gap-3">
          <span className="border border-gray-300 p-1 rounded-3xl w-14 h-14 flex items-center justify-center">
            <span className="bg-blue-200/50 w-12 h-12 text-blue-400 rounded-3xl flex items-center justify-center">
              <BookA className="w-7 h-7" />
            </span>
          </span>
          <h3 className="text-2xl font-serif text-black/80">English Class</h3>
          <p className="text-gray-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* box 3 */}
        <div className="flex flex-col gap-3">
          <span className="border border-gray-300 p-1 rounded-3xl w-14 h-14 flex items-center justify-center">
            <span className="bg-purple-200/50 w-12 h-12 text-purple-400 rounded-3xl flex items-center justify-center">
              <BookOpenText className="w-7 h-7" />
            </span>
          </span>
          <h3 className="text-2xl font-serif text-black/80">Reading for Kids Class</h3>
          <p className="text-gray-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* box 4 */}
        <div className="flex flex-col gap-3">
          <span className="border border-gray-300 p-1 rounded-3xl w-14 h-14 flex items-center justify-center">
            <span className="bg-green-200/50 w-12 h-12 text-green-400 rounded-3xl flex items-center justify-center">
              <FileClock className="w-7 h-7" />
            </span>
          </span>
          <h3 className="text-2xl font-serif text-black/80">History Class</h3>
          <p className="text-gray-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* box 5 */}
        <div className="flex flex-col gap-3">
          <span className="border border-gray-300 p-1 rounded-3xl w-14 h-14 flex items-center justify-center">
            <span className="bg-orange-200/50 w-12 h-12 text-orange-300 rounded-3xl flex items-center justify-center">
              <ShieldCheck className="w-7 h-7" />
            </span>
          </span>
          <h3 className="text-2xl font-serif text-black/80">Active Class</h3>
          <p className="text-gray-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* box 6 */}
        <div className="flex flex-col gap-3">
          <span className="border border-gray-300 p-1 rounded-3xl w-14 h-14 flex items-center justify-center">
            <span className="bg-orange-200/50 w-12 h-12 text-orange-400 rounded-3xl flex items-center justify-center">
              <PenTool className="w-7 h-7" />
            </span>
          </span>
          <h3 className="text-2xl font-serif text-black/80">Drawing Class</h3>
          <p className="text-gray-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Offer;
