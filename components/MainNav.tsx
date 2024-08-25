import Logo from "./Logo";
import Image from "next/image";

const MainNav = () => {
  return (
    <>
      <div className="flex justify-center mb-4">
        <div className="flex flex-col gap-2 items-center justify-center bg-violet-200 w-screen md:w-10/12 max-w-screen-lg h-[160px] top-0 shadow-md shadow-violet-300 pt-3">
          <div>
            <Logo />
          </div>
          <div className="flex">
            <div className="w-40"></div>
            <Image
              src={"/by_silvinha_barreto.png"}
              alt={"By Silvinha barreto"}
              width={150}
              height={250}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
