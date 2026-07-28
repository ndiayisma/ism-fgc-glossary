import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ['latin'], weight: '400' });

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });

const characters = [
    {
        name: "Zangief",
        game: "Street Fighter",
        portrait: "/next.svg", // Placeholder temporaire        
        gameLogo: "/games/sf6_logo.png",
    },
    {
        name: "Potemkin",
        game: "Guilty Gear Strive",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/games/ggst_logo.png",
    },
    {
        name: "Iron Tager",
        game: "BlazBlue",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/games/bbcf_logo.png",
    },
    {
        name: "Broly(Z)",
        game: "Dragon Ball FighterZ",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/games/dbfz_logo.png",
    },
    {
        name: "Waldestein",
        game: "Under Night In-Birth",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/games/uni2_logo.png",
    },
    {
        name: "Ladiva",
        game: "Granblue Fantasy Versus",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/games/gbvsr_logo.png",
    },
    {
        name : "King",
        game : "Tekken",
        portrait : "/characters/grappler/king.jpg", // Placeholder temporaire
        gameLogo : "/games/tekken8_logo.webp",
    }
]
const characters2 = [
    {
        name: "Alex",
        game: "Street Fighter 6",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/games/sf6_logo.png",
    },
    {
        name: "Bullet",
        game: "BlazBlue : ChronoPhantasma & CentralFiction",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/games/bbcf_logo.png",
    },
    {
        name: "Goku (Arc Saiyan)",
        game: "Dragon Ball FighterZ",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/games/dbfz_logo.png",
    },
]

export default function Grappler() {
    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="mb-8">
                    <h1 className={`${orbitron.className} text-5xl font-extrabold text-white-900 tracking-tight`}>Grappler</h1>
                    <p className="mt-2 text-white-600 py-2">
                    Les grapplers, aussi appelés catcheurs, sont des personnages qui ont pour spécialités de chopper leur adversaires avec les <strong>Command Grabs</strong>, et en faire des dégâts plus importants.
                    <br />
                    Leur objectifs est de s'approcher de son adversaire et utiliser ses outils pour chopper et les terrifier 
                        afin de les faires plus hésiter une fois au mur.
                    <br />
                    Et bien qu'ils soient des tank et des monstres offensive, 
                        leur plus grande faiblesses sont leur mobilités qui sont beaucoup plus réduites pour compenser leur forces.
                    <br />
                    <br />
                        Cet archétype est idéal pour les joueurs qui aiment jouer de manière agressive et veulent contrôler le rythme du combat en maintenant une pression constante sur l'adversaire.
                        </p>
                    <h2 className={`${roboto.className} text-2xl font-bold text-white py-4 mt-8`}>
            Exemples de Personnages Grapplers
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
                    <br/><br/>
                    <p className="mt-2 text-white-600">
                        Recemment, il y a eu des grapplers qui ont plus d'atouts que les grapplers traditionnels,
                        tels que les mobilités, possibilités de faire plus de combos diversifiés comme par exemple :
                    </p>
                    <h2 className={`${roboto.className} text-2xl font-bold text-white py-4 mt-8`}>
            Exemples de Personnages Grapplers avec plus d'outils
          </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {characters2.map((char) => (
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