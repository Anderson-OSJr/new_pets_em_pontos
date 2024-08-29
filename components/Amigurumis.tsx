import Image from "next/image";

const fotos = [
  { id: 1, title: "Mr. Sonicz", href: "/zozod.JPG" },
  { id: 2, title: "Harry Bacon", href: "/porquinho.JPG" },
  { id: 3, title: "Johnny Fox", href: "/Raposinho.png" },

  { id: 4, title: "Picaschultz", href: "/orelhudo.png" },
  { id: 5, title: "O Coisinha", href: "/coisinha.png" },
  { id: 6, title: "Dinossaulo", href: "/dinossaulo.png " },

  { id: 7, title: "Os Coelhinhos", href: "/coelhinhos.png" },
  { id: 8, title: "Chase", href: "/caninoazul.JPG " },
  { id: 9, title: "Rubble", href: "/caninoamarelo.JPG " },

  { id: 10, title: "Skye", href: "/caninorosa.JPG " },
  { id: 11, title: "Marshall", href: "/caninobranco.JPG " },
  { id: 12, title: "Zuma", href: "/caninomarrom.JPG " },

  { id: 13, title: "A turminha", href: "/turminha.png" },
  { id: 14, title: "A Galerinha", href: "/galerinha.JPG " },
  { id: 15, title: "Patrulha Canina", href: "/patrulha.JPG " },

  { id: 16, title: "Rocky", href: "/caninocinza.JPG " },
  { id: 17, title: "Zebrinha", href: "/zebrinho2.JPG " },
  { id: 18, title: "Santa Inês", href: "/Santa.JPG " },

  { id: 19, title: "Blau-Blau", href: "/ursinhoverde.JPG " },
  { id: 20, title: "Girafinha de Montar", href: "/girafinha2.JPG " },
  { id: 21, title: "Emojis", href: "/chaveirinhos.JPG " },

  { id: 22, title: "Elefantinho", href: "/elefantinho.JPG " },
  { id: 23, title: "Oi Girafinha", href: "/girafinha1.JPG " },
  { id: 24, title: "Oi Girafinho", href: "/girafinha2montada.JPG " },
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
                width={250}
                height={250}
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
