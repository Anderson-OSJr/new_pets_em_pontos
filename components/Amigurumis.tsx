"use client";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const Amigurumi = () => {
  const [active, setActive] = useState("Todos");
  const [selected, setSelected] = useState<{title: string; href: string} | null>(null);
  const amigurumis: { id: number; title: string; href: string }[] = [
    { id: 1, title: "Soniquinho", href: "/sonic.png" },
    { id: 2, title: "Foxtrot", href: "/foxtrot.png" },
    { id: 3, title: "Pikashultz", href: "/pikachu1.png" },
    { id: 4, title: "Mr Bita", href: "/bita1.png" },
    { id: 5, title: "Coelhinhos", href: "/coelhinhos1.png" },
    { id: 6, title: "A girafinha de montar", href: "/a_girafinha1.png" },

    { id: 7, title: "A girafinha de montar", href: "/a_girafinha2.png" },
    { id: 8, title: "A girafinha de montar", href: "/a_girafinha3.png" },
    { id: 9, title: "A turminha", href: "/turminha2.png" },
    { id: 10, title: "As Superpoderosas", href: "/superpoderosas.png" },
    { id: 11, title: "Mais turminha", href: "/turminha1.png" },
    { id: 12, title: "Bita e os amiguinhos", href: "/turminha_pgrossa2.png" },

    { id: 13, title: "Cat Blue", href: "/blue_bears2.png" },
    { id: 14, title: "Cat Blue", href: "/blue_bears1.png" },
    { id: 15, title: "Mordedor Blue", href: "/blue_bears3.png" },
    { id: 16, title: "Dino Saulo", href: "/dinossaulo2.png" },
    { id: 17, title: "Elefantinho da Ju", href: "/elefantinho1.png" },
    { id: 18, title: "Girafinha da Lu", href: "/girafinha_lu.png" },

    { id: 19, title: "Macaquinha porta retrato", href: "/macaquinha.png" },
    { id: 20, title: "Frida", href: "/frida.png" },
    { id: 21, title: "Miss Piggy", href: "/misspig1.png" },
    { id: 22, title: "Miss Piggy vai passear", href: "/misspig2.png" },
    { id: 23, title: "Florks", href: "/florks2.png" },
    { id: 24, title: "Heptapus", href: "/heptapus.png" },

    { id: 25, title: "O Girafinho de montar", href: "/ogirafinho1.png" },
    { id: 26, title: "O Girafinho de montar", href: "/ogirafinho2.png" },
    { id: 27, title: "O Girafinho de montar", href: "/ogirafinho3.png" },
    { id: 28, title: "Stitch", href: "/stitch.png" },
    { id: 29, title: "Shrek", href: "/shrek.png" },
    { id: 30, title: "Alfredo da Nanda", href: "/ursinho_nanda1.png" },

    { id: 31, title: "NSrª das Graças", href: "/nsgraca.png" },
    { id: 32, title: "Zé Toicin", href: "/porquinho3.png" },
    { id: 33, title: "Pateta", href: "/pateta.png" },
    { id: 34, title: "Mestre Yoda", href: "/yoda1.png" },
    { id: 35, title: "Xepa", href: "/xepa.png" },
    { id: 36, title: "Zebrinha", href: "/zebrinha.png" },

    { id: 37, title: "Patrulha Canina", href: "/canina3.png" },
    { id: 38, title: "Cadê os outros?", href: "/canina1.png" },
    { id: 39, title: "Coelhinhos", href: "/coelhinhos2.png" },
    { id: 40, title: "Emojis", href: "/emoji1.png" },
    { id: 41, title: "Oh Yeah!!", href: "/emoji2.png" },
    { id: 42, title: "Hic.. Hic...", href: "/emoji3.png" },

    { id: 43, title: "Amoji", href: "/emoji4.png" },
    { id: 44, title: "Beijinho", href: "/emoji5.png" },
    { id: 45, title: "Fantasminhas", href: "/fantasminha2.png" },
    { id: 46, title: "Pitoto Ghost", href: "/fantasminha1.png" },
    { id: 47, title: "Lanterninhas de Halloween", href: "/fantasminha3.png" },
    { id: 48, title: "Laranjinha Ghost", href: "/fantasminha4.png" },

    { id: 49, title: "Roxinho Ghost", href: "/fantasminha5.png" },
    { id: 50, title: "Turminha do Alfredo", href: "/turminha_pgrossa1.png" },
    { id: 51, title: "Mestre Yoda", href: "/yoda2.png" },
    { id: 52, title: "Os Yodas", href: "/yoda3.png" },
    { id: 53, title: "Yoda - detalhe do verso", href: "/yoda4.png" },
    { id: 54, title: "Mais Dino Saulo", href: "/dinossaulo1.png" },

    { id: 55, title: "Chase", href: "/canina2.png" },
    { id: 56, title: "Skye", href: "/canina4.png" },
    { id: 57, title: "Rubble", href: "/canina7.png" },
    { id: 58, title: "Marshll", href: "/canina6.png" },
    { id: 59, title: "Rocky", href: "/canina8.png" },
    { id: 60, title: "Zuma", href: "/canina5.png" },

    {
      id: 61,
      title: "Tigrinho - prendedor de cortina",
      href: "/tigrinho_prende_cortina.png",
    },
    { id: 62, title: "Octablue", href: "/octoblue.png" },
    { id: 63, title: "Papa Emeritus", href: "/papaemeritus.png" },
    { id: 64, title: "Bob Esponja", href: "/bob_esponja.png" },
    { id: 65, title: "Cazé TV", href: "/case.png" },
    { id: 66, title: "Mais do Porquinho", href: "/porquinho1.png" },

    { id: 67, title: "Sagrada Família", href: "/sagradafamilia1_1.png" },
    { id: 68, title: "Sagrada Família", href: "/sagradafamilia1_2.png" },
    { id: 69, title: "Sagrada Família", href: "/sagradafamilia1_3.png" },
    { id: 70, title: "Sagrada Família", href: "/sagradafamilia1_4.png" },
    { id: 71, title: "Sagrada Família", href: "/sagradafamilia2_1.png" },
    { id: 72, title: "Sagrada Família", href: "/sagradafamilia2_2.png" },

    { id: 73, title: "Sagrada Família", href: "/sagradafamilia2_3.png" },
    { id: 74, title: "Bolotinha 1", href: "/bolotinha1.png" },
    { id: 75, title: "Bolotinha 2", href: "/bolotinha2.png" },
    { id: 76, title: "Bolotinha 3", href: "/bolotinha3.png" },
    { id: 77, title: "Bolotinha 4", href: "/bolotinha4.png" },
    {
      id: 78,
      title: "Ratinho marcador de página",
      href: "/ratinho_marcador2.png",
    },

    {
      id: 79,
      title: "Ratinho marcador de página",
      href: "/ratinho_marcador1.png",
    },
    {
      id: 80,
      title: "Ratinho marcador de página",
      href: "/ratinho_marcador3.png",
    },
    { id: 81, title: "Sorvete e Coração", href: "/sorveteecoracao.png" },
    { id: 82, title: "Florks", href: "/florks1.png" },
    { id: 83, title: "Stuart Minion", href: "/minion1.png" },
    { id: 84, title: "Bob Minion", href: "/minion2.png" },
  ];

  const categories = ["Todos", "Personagens", "Bichinhos", "Datas especiais"];
  const visible = active === "Todos" ? amigurumis : amigurumis.filter((item) => active === "Datas especiais" ? item.id >= 40 && item.id <= 49 : active === "Bichinhos" ? item.id > 12 && item.id < 25 : item.id <= 40 || item.id > 49);
  return <section id="galeria" className="gallery-section">
    <div className="section-heading"><div><span className="section-label">01 / galeria</span><h2>Feitos para<br /><em>morar na memória.</em></h2></div><p>Uma seleção de criações que nasceram de pedidos especiais, personagens queridos e da vontade de transformar fio em companhia.</p></div>
    <div className="filter-row" aria-label="Filtrar galeria">{categories.map((category) => <button key={category} className={active === category ? "filter active" : "filter"} onClick={() => setActive(category)}>{category}</button>)}<span className="piece-count">{visible.length} peças</span></div>
    <div className="masonry-grid">{visible.map((item, index) => <button className={`piece-card ${index % 7 === 0 ? "piece-card-featured" : ""}`} key={item.id} onClick={() => setSelected(item)} aria-label={`Ampliar ${item.title}`}><div className="piece-image"><Image src={item.href} alt={item.title} fill sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 25vw" /></div><span className="piece-caption">{item.title}<small>ver detalhe</small></span></button>)}</div>
    {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><button className="close-button" onClick={() => setSelected(null)} aria-label="Fechar"><X size={22} /></button><div className="lightbox-image"><Image src={selected.href} alt={selected.title} fill sizes="90vw" /></div><p>{selected.title}</p></div></div>}
  </section>;
};

export default Amigurumi;
