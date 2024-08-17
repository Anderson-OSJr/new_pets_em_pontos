import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const MyCarousel = () => {
  const fotos = [
    { id: 1, title: "Zozod", href: "/zozod.JPG" },
    { id: 2, title: "Feioso", href: "/feioso.JPG" },
    { id: 3, title: "Ursinho", href: "/ursinho.JPG" },
    { id: 4, title: "Porquinho", href: "/porquinho.JPG" },
  ];

  return (
    <>
      <main>
        <div>
          <Card className="flex justify-center border-2 m-2 bg-black">
            <CardContent className="bg-cyan-400">
              <CardHeader className="bg-slate-300 flex justify-center">
                Fotos de Amigurumis
              </CardHeader>
              <CardDescription className="bg-yellow-200 w-[300px] h-[400px]">
                <Carousel>
                  <div className="flex-row justify-center">
                    <CarouselPrevious />
                    <CarouselContent>
                      {fotos.map((foto) => (
                        <CarouselItem key={foto.id}>
                          <div>
                            <div>
                              <Image
                                src={foto.href}
                                alt={foto.title}
                                width={300}
                                height={350}
                              />
                            </div>
                            <div> {foto.title}</div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselNext />
                  </div>
                </Carousel>
              </CardDescription>
              <CardFooter className="bg-gray-200">Gostou?</CardFooter>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default MyCarousel;
