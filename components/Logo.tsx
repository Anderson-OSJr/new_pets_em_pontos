import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Logo = () => (
  <header className="hero-shell">
    <div className="hero-noise" />
    <div className="hero-inner">
      <div className="hero-mark"><span className="eyebrow">um ateliê feito à mão</span><Image src="/petsempontos.png" alt="Pets em Pontos" width={250} height={100} priority /></div>
      <div className="hero-copy"><p className="hero-kicker">Pequenas histórias, ponto a ponto.</p><h1>Afeto que ganha forma<br /><em>em linhas e agulhas.</em></h1><p className="hero-description">Uma coleção de personagens e memórias costurados com calma, cor e muito carinho por Sílvia Barreto.</p></div>
      <a className="scroll-cue" href="#galeria" aria-label="Ver galeria"><ArrowDown size={18} strokeWidth={1.5} /><span>ver a coleção</span></a>
    </div>
  </header>
);

export default Logo;
