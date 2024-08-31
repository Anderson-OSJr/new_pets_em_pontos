import React from "react";
import Image from "next/image";

const BottomBar = () => {
  return (
    <>
      <div
        className="container rounded-md flex flex-col items-center justify-between mt-3
                   bg-purple-200 h-[140px] w-screen   
                      sm:w-[640px]                  
                      md:w-[768px]
                      lg:w-[1024px] 
                      xl:w-[1280px] 
                      "
      >
        <p className="font-serif italic text-violet-800 text-opacity-70 mt-6 text-center">
          Momentos de felicidade, por meio de linhas e agulhas.
        </p>
        <p className="font-serif italic text-violet-800 text-opacity-70 mb-2 text-center">
          Com muito amor...
        </p>
        <Image
          src="/by_silvinha_barreto.png"
          alt="Logo"
          width={180}
          height={100}
          className="mb-3"
        />

        <p
          className="container text-violet-900 text-xs                  
                    text-right mb-1 pr-1"
        >
          P61 Web Development
        </p>
      </div>
    </>
  );
};

export default BottomBar;
