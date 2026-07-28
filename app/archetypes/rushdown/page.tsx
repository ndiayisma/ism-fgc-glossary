import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });

const characters = [
    {
        name: "Cammy",
        game: "Street Fighter",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Sol Badguy",
        game: "Guilty Gear Strive",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Ragna the Bloodedge",
        game: "Séries BlazBlue",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Yamcha",
        game: "Dragon Ball FighterZ",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Linne",
        game: "Under Night In-Birth",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
];


export default function Rushdown() {
    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="mb-8">
                    <h1 className={`${roboto.className} text-5xl font-extrabold text-white-900 tracking-tight`}>RUSHDOWN</h1>
                    <p className="mt-2 text-white-600 py-2">
                        Les "Rushdowns", comme son l'indique, est un style qui privilégie les attaques rapides et agressives au corps-à-corps, sans que l'adversaire puisse facilement réagir.
                        <br />
                        Comme outils pour raccourcir la distance et maintenir une offensive sans échappatoire, ils attaquent sans relâche avec des coups qui sont en plus on-block.  
                        Certains utilisent beaucoup de Mix-Ups afin de les faire hésiter à prendre une décision de les 
                        contrer(<strong>cross-up, low, throw, overhead</strong>).
                        <br />
                        <br />
                        Mais attention, car ce style de jeu est très risqué, et peut facilement se retourner contre vous si votre 
                        adversaire parvient à anticiper vos mouvements ou à trouver une ouverture pour vous punir.
                        <br />
                        Et cela l'est encore plus avec les zoners, qui peuvent ainsi facilement camper et empêcher les rushdown de se rapprocher d'eux.
                        <br />
                        Cet archétypes est idéal pour les joueurs qui aiment jouer de manière offensive et voulant abattre l'ennemi.
                    </p>
                    <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight mt-8`}>Personnages de type Rushdown</h2>
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