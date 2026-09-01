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

/**
 * Filtre par style de jeu (Traditionnel / Anime) pour la section
 * "Quel jeu choisir ?" de la page /about.
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
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors cursor-pointer ${
              active === f
                ? "bg-white text-black border-white"
                : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Jeux filtrés : largeur fixe + centrage, pour que les rangées incomplètes (peu de résultats après filtrage) restent centrées au lieu de coller à gauche */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[54rem] mx-auto">
        {visibleGames.map((game) => (
          <div
            key={game.name}
            className="flex flex-col items-center gap-3 w-40 sm:w-48 rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition-colors"
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
