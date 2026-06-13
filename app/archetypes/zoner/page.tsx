import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });

const characters = [
    {
        name: "Dhalsim",
        game: "Street Fighter",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Axl Low",
        game: "Guilty Gear Strive",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Athena",
        game: "The King of Fighters",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Metera",
        game: "Granblue Fantasy Versus",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Caitlyn",
        game: "2XKO",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Megaman",
        game: "Super Smash Bros Ultimate",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    }
];

export default function Zoner() {
    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="mb-8">
                    <h1 className={`${roboto.className} text-4xl font-extrabold text-white-900 tracking-tight`}>Zoner</h1>
                    <p className="mt-2 text-sm text-white-600">
                        Les Zoners sont les persos qui ont l'habitude de rester à l'écart et 
                        d'utiliser l'espace pour jeter des salves de projectiles et de contrôler le terrain.
                        <br />
                        Comme vous l'aurez compris, ces zoners ont pour outils plusieurs attaques à longues distances dans leur movelist 
                        afin de trouver des ouvertures pour infliger des dégâts à leur adversaire, 
                        ou les forcent eux-mêmes de faire des gardes afin de se protéger davantage.
                        <br />
                        Attention car une fois en combat rapproché, les zoners sont très vulnérables et peuvent ainsi se faire combo facilement
                        (bien qu'ils ont des anti-airs pour se protéger cela, faites attention à leur <strong>Frame Data</strong> et comment cela fonctionne).
                        <br />
                        <br />
                        Ceux qui aiment jouer de manière stratégique et avoir un contrôle sur le terrain (pour pas dire camper), cet archétypes est idéal pour vous.
                        </p>
                        <br />
                    <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight mt-8`}>Exemples de personnages Zoners :</h2>
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