"use client";

import { useState } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

type Category = "Traditionnel" | "Anime" | "Tag Team" | "3D";

type Game = {
  name: string;
  category: Category;
  logo: string;
};

const games: Game[] = [
  { name: "Street Fighter 6", category: "Traditionnel", logo: "/box_art/Street_Fighter_6_box_art.jpg" },
  { name: "Fatal Fury", category: "Traditionnel", logo: "/box_art/cotw_box_art.webp" },
  { name: "Granblue Fantasy Versus: Rising", category: "Traditionnel", logo: "/box_art/gbvsr_box.jpg" },
  { name: "Mortal Kombat 1", category: "Traditionnel", logo: "/box_art/mk1_box.webp" },
  { name: "Samurai Shodown", category: "Traditionnel", logo: "/box_art/samurai_box.png" },
  { name: "Guilty Gear Strive", category: "Anime", logo: "/box_art/strive_box.jpg" },
  { name: "BlazBlue", category: "Anime", logo: "/box_art/bbcf_box.jpg" },
  { name: "Under Night In-Birth", category: "Anime", logo: "/box_art/uni2_box.jpg" },
  { name: "Marvel Tokon", category: "Tag Team", logo: "/box_art/tokon_box.jpg" },
  { name: "Dragon Ball FighterZ", category: "Tag Team", logo: "/box_art/dbfz_cover_art.jpg" },
  { name: "Tekken 8", category: "3D", logo: "/box_art/tekken8_box.jpg" },
  { name: "Soul Calibur VI", category: "3D", logo: "/box_art/scvi_box.jpg" },
  { name: "Virtua Fighter 5", category: "3D", logo: "/box_art/vf5_box.jpeg" },
];

const filters = ["Tous", "Traditionnel", "Anime", "Tag Team", "3D"] as const;
type Filter = (typeof filters)[number];

const categoryDescriptions: Record<Filter, string> = {
  Tous: "Chaque famille de jeux de combat a ses propres réflexes à apprendre. Sélectionnez un style ci-dessous pour en savoir plus.",
  Traditionnel: "Les jeux \"traditionnels\" (Street Fighter, Fatal Fury, Mortal Kombat...) misent sur un neutral au sol, des motions circulaires (quart de cercle, etc.) et une frame data serrée. Ce sont les bases du genre : ce que vous y apprenez s'applique à peu près partout ailleurs.",
  Anime: "Les jeux \"anime\" (Guilty Gear, BlazBlue, Under Night In-Birth...) ajoutent beaucoup de mobilité aérienne (air dash, double saut) et des combos plus longs et plus techniques. La gestion des ressources (meter, burst) y compte souvent autant que le neutral.",
  "Tag Team": "Ici, vous contrôlez une équipe de deux personnages (ou plus), avec des assists et des changements en plein combo. Plus de profondeur stratégique, mais aussi deux fois plus de choses à apprendre à la fois.",
  "3D": "Le combat se déroule dans une arène en 3D où le déplacement latéral (sidestep) devient une arme à part entière. Le neutral, la garde et les mix-up y fonctionnent assez différemment des jeux 2D.",
};

/**
 * Filtre par style de jeu (Traditionnel / Anime) pour la section
 * "Quel jeu choisir ?" de la page /choose.
 */
export default function GameStyleFilter() {
  const [active, setActive] = useState<Filter>("Tous");
  const visibleGames = active === "Tous" ? games : games.filter((g) => g.category === active);

  return (
    <div>
      {/* Boutons de filtre */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all cursor-pointer ${
              active === f
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-lg shadow-purple-500/20"
                : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:border-white/20"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Description du style actuellement sélectionné */}
      <p className="text-white/70 text-sm leading-relaxed max-w-2xl mx-auto text-center mb-8">
        {categoryDescriptions[active]}
      </p>

      {/* Jeux filtrés : largeur fixe + centrage, pour que les rangées incomplètes (peu de résultats après filtrage) restent centrées au lieu de coller à gauche */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[54rem] mx-auto">
        {visibleGames.map((game) => (
          <div
            key={game.name}
            className="flex flex-col items-center gap-3 w-40 sm:w-48 rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-full aspect-[2/3] overflow-hidden rounded-lg bg-white/5">
              <img
                src={game.logo}
                alt={`Jaquette de ${game.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className={`${roboto.className} text-sm font-semibold text-white text-center leading-tight`}>
              {game.name}
            </p>
            <span className="text-xs text-white/50 uppercase tracking-wide">{game.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
