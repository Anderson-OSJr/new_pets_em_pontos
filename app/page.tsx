import Amigurumi from "@/components/Amigurumis";
import BottomBar from "@/components/BottomBar";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <>
      <div className="bg-purple-100 pb-6 pt-2">
        <Logo />
        <Amigurumi />
        <BottomBar />
      </div>
    </>
  );
}
