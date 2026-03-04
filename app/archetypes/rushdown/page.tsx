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
        name: "Chipp Zanuff",
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
                    <h1 className={`${roboto.className} text-4xl font-extrabold text-white-900 tracking-tight`}>RUSHDOWN</h1>
                    <p className="mt-2 text-sm text-white-600">
                        Les "Rushdown", comme son l'indique, est un style qui privilégie les attaques rapides et agressives au corps-à-corps, sans que l'adversaire puisse facilement réagir.
                        <br />
                        Comme outils pour raccourcir la distance et maintenir une offensive sans échappatoire, 
                        ils utilisent beaucoup de Mix-Ups afin de les faire hésiter à prendre une décision de les 
                        contrer(<strong>cross-up, low, throw, overhead</strong>).
                        <br />
                        <br />
                        Mais attention, car ce style de jeu est très risqué, et peut facilement se retourner contre vous si votre 
                        adversaire parvient à anticiper vos mouvements ou à trouver une ouverture pour vous punir.
                        <br />
                        Et cela l'est encore plus avec les zoners, qui peuvent ainsi facilement camper et empêcher les rushdown de se rapprocher d'eux.
                        <br />
                        Cet archétypes est idéal pour les joueurs qui aiment jouer de manière offensive et voulant abattre l'ennemi.
                        Les exemples particuliers sont : </p>
                    <ul className="list-disc list-inside mt-2 text-white-600">
                        <li>Cammy (Street Fighter)</li>
                        <li>Chipp Zanuff (Guilty Gear Strive)</li>
                        <li>Ragna the Bloodedge (Séries BlazBlue)</li>
                        <li>Yamcha (Dragon Ball FighterZ)</li>
                        <li>Linne (Under Night In-Birth)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}