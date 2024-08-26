import Image from "next/image";

const fotos = [
  { id: 1, title: "Mr. Sonicz", href: "/zozod.JPG" },
  { id: 2, title: "Picaschultz", href: "/feioso.JPG" },
  { id: 3, title: "Johnny Fox", href: "/ursinho.JPG" },
  { id: 4, title: "Harry Bacon", href: "/porquinho.JPG" },
];

const Amigurumis = () => {
  return (
    <>
      <div className="w-full flex justify-center mb-32">
        <div className="flex flex-wrap w-full sm:w-10/12 max-w-screen-lg justify-center gap-3 md:gap-8">
          {fotos.map((foto) => (
            <div key={foto.id} className="mb-5">
              <Image
                src={foto.href}
                alt={foto.title}
                width={300}
                height={300}
                className="rounded-sm shadow-md shadow-violet-300"
              />
              <p className="text-violet-500 text-center text-lg">
                {foto.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Amigurumis;
