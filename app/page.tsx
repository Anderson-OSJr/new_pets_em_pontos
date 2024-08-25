import Amigurumis from "@/components/Amigurumis";
import MainNav from "@/components/MainNav";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center bg-violet-50">
        <div className="md:mt-1">
          <MainNav />
          <Amigurumis />
        </div>
      </div>
    </>
  );
}
