import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div
        className="container rounded-md
                      bg-purple-200 
                      flex items-center justify-center
                      h-[200px]
                      w-screen   
                      sm:w-[640px]                  
                      md:w-[768px]
                      lg:w-[1024px] 
                      xl:w-[1280px] "
      >
        <Image src="/petsempontos.png" alt="Logo" width={250} height={100} />
      </div>
    </>
  );
};

export default Logo;
