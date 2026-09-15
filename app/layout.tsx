import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pets em Pontos — Afeto feito à mão",
  description: "Uma coleção de personagens e memórias costurados com calma, cor e muito carinho por Sílvia Barreto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
