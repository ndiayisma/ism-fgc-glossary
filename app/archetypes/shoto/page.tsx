import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });

// Données des personnages de type Shoto
const characters = [
  {
    name: "Son Goku SSJ",
    game: "Dragon Ball FighterZ",
    portrait: "/characters/gokussj.png",
    gameLogo: "/games/dbfz_logo.png",
  },
  {
    name: "Ryu",
    game: "Street Fighter 6",
    portrait: "/characters/ryu.png", // Placeholder temporaire
    gameLogo: "/games/sf6_logo.png",
  },
  {
    name: "Luke",
    game: "Street Fighter 6", 
    portrait: "/characters/luke.png", // Placeholder temporaire
    gameLogo: "/games/sf6_logo.png",
  },
  {
    name: "Terry Bogard",
    game: "Fatal Fury",
    portrait: "/characters/terry.png", // Placeholder temporaire 
    gameLogo: "/games/cotw_logo.png",
  },
  {
    name: "Hyde",
    game: "Under Night In-Birth",
    portrait: "/characters/hyde_uni2.png", // Placeholder temporaire
    gameLogo: "/games/uni2_logo.png", 
  },
  {
    name: "Gran",
    game: "Granblue Fantasy Versus",
    portrait: "/characters/gran.png", // Placeholder temporaire
    gameLogo: "/games/gbvsr_logo.png",
  },
];

export default function Shoto() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-8">
          <h1 className={`${roboto.className} text-4xl font-extrabold text-white-900 tracking-tight`}>SHOTO</h1>
          <p className="mt-2 text-sm text-white-600">
            Les personnages de type standard, communément appelé "shoto" ou "All-Rounded", sont des personnages qui ont plus de polyvalence
            Ayant accès a des moves qui répondent à certaines situations. 
            Plus précisément, on les retrouves avec au moins une attaque de zonage (plus souvent des projectiles), un anti-air, et des attaques pour se rapprocher de l'adversaire.
            <br />
            <br />
            En bref, ils n'ont pas de points forts sur les outils qu'ils ont, mais n'ont pas aussi beaucoup de points faibles que les autres archétypes, ce qui les rend plus équilibrés et plus faciles à jouer pour les débutants.
            <br />
            Le terme "shoto" vient du shotokan karaté, un art martial japonais et qui est utilisé comme inspiration pour les 2 personnages de Street Fighter, Ryu et Ken.

            <br />
            Après, ce qui est difficile avec cet archétypes et de savoir si un personnage est un shoto ou pas. 
            Car bien que Ryu et Ken en soient les primes exemples dans Street Fighter, 
            c'est plus difficile de le savoir si on a lu le kit de Sakura par exemple ou de Sagat, 
            comme ils ont des outilis qui peuvent les faires apparentés à cet archétypes en question. 
            Alors pour faire simple, on prend les perso principal, les protagonistes de chaque jeu de combat afin de les reconnaîtres.

            <br />

            En bref, Les shotos sont des personnages équilibrés qui sont plus optés pour ceux qui débutent dans les jeux de combats 
            afin de comprendre les bases du neutral et plan de jeux

            <br />
            <br /> 
            
          </p>
          <h2 className={`${roboto.className} text-2xl font-bold text-white mb-6`}>
    Exemples de Personnages Shotos
  </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
    {characters.map((char) => (
      <div
        key={char.name}
        className="flex flex-col items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors"
      >
        {/* 1. Character Portrait */}
        <div className="relative w-22 h-22 sm:w-24 sm:h-24 overflow-hidden rounded-lg">
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
      </div>
    </div>
  );
}