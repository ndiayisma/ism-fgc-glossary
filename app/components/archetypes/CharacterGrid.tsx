import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export type Character = {
  name: string;
  game: string;
  portrait: string;
  gameLogo: string;
};

/**
 * Grille de personnages illustrant un archétype (portrait + nom + logo du jeu).
 * Composant partagé afin de garder le même rendu sur toutes les pages d'archétypes.
 */
export default function CharacterGrid({
  title,
  characters,
}: {
  title?: string;
  characters: Character[];
}) {
  return (
    <div className="mt-10">
      {title && (
        <h2 className={`${roboto.className} text-2xl font-bold text-white py-4`}>
          {title}
        </h2>
      )}
      {/* max-w calé sur 4 cartes (w-36) + 3 gaps (gap-6) pour ne jamais dépasser 4 par ligne */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[46rem] mx-auto">
        {characters.map((char) => (
          <div
            key={char.name}
            className="flex flex-col items-center gap-3 w-32 sm:w-36 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300"
          >
            {/* 1. Character Portrait */}
            <div className="relative w-22 h-22 sm:w-24 sm:h-24 overflow-hidden rounded-lg bg-white/5">
              <img
                src={char.portrait}
                alt={`Portrait de ${char.name}`}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* 2. Character Name */}
            <p className={`${roboto.className} text-sm font-semibold text-white text-center leading-tight`}>
              {char.name}
            </p>

            {/* 3. Game Logo */}
            <img
              src={char.gameLogo}
              alt={`Logo ${char.game}`}
              className="h-12 w-auto object-contain opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
