import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });

const characters = [
    {
        name: "Leo Whitefang",
        game: "Guilty Gear Strive",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Gen",
        game: "Street Fighter 4",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Senna",
        game: "2XKO",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
];

export default function Stances() {
    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="mb-8">
                    <h1 className={`${roboto.className} text-5xl font-extrabold text-white-900 tracking-tight`}>Stances</h1>
                    <p className="mt-2 text-white-600 py-2">
                        Les stances sont des positions ou des postures spécifiques que les personnages adoptent dans les jeux de combats.
                        <br />
                        Ces positions peuvent influencer la façon dont un personnage se déplace, attaque ou défend, et peuvent également affecter les options disponibles pour le joueur,
                        mais il se peut que certains personnages possèdent plusieurs positions de combat, leur offrant plus de variété dans leurs attaques et mouvements.
                        <br />
                        Cependant, apprende un personnage avec cet archétype peut se révèler plus long car il doit aussi connaître les fondamentaux de chaque position
                        et de les utiliser à bon escient pour avoir le plus d'avantages possible dans un match.
                    </p>
                    <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight mt-8`}>Exemples de personnages avec des stances :</h2>
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
    