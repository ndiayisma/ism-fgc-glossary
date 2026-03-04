import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });

const characters = [
    {
        name: "Zato-1",
        game: "Guilty Gear Strive",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Chaos",
        game: "Under Night In-Birth",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Carl=Clover",
        game: "Séries BlazBlue",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/games/bbcf_logo.png",
    },
    {
        name: "Harmonie & Luma",
        game: "Super Smash Bros. Ultimate",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/games/ssbu_logo.png",
    },
    {
        name: "Nier & Death",
        game: "Granblue Fantasy Versus : Rising",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
];

export default function Puppet() {
    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="mb-8">
                    <h1 className={`${roboto.className} text-4xl font-extrabold text-white-900 tracking-tight`}>Marionettiste</h1>
                    <p className="mt-2 text-sm text-white-600">
                        Les marionettistes sont des personnages qui n'utilisent vraiment pas un mais 
                        <strong>DEUX</strong> personnages à la fois (le marionnetiste et la marionnette)afin de combiner leurs utilités et créer
                        des myriades de combinaisons uniques avec des mix-ups quasi-imposibles à anticiper.
                        <br/><br/>
                        Effectivement, maîtriser un "marionnettiste" révèle un défi plus hargneux que les autres 
                        archétypes en question puisque contrôler deux personnages demande une coordination et 
                        une compréhension profondes de leur mécaniques respectives et synérgies pour leur avantages.
                        <br/><br/>
                        Dès lors, une fois que vous avez compris les bases d'un marionnettiste, vous pouvez commencer à exploiter
                        les myriades de possibilités des <strong>mix-ups</strong> et garder une pression constante sur votre adversaire.
                        <br/><br/>
                        Cependant, il est important de noter que les marionnettistes sont dépendant de leur marionnette, 
                        donc si celle-ci est indisponible durant un temps,
                        ce personnage principale devient plus vulnérable, 
                        révélant son point faible majeur car leur défense sont plus lacquante et limitées.
                        <br/><br/>
                        Cet archétype est pas idéal pour tout le monde, 
                        mais si vous préférez un perso dans ce style, 
                        personne ne vous en empêchera de le main.
                        <br/><br/>
                        </p>
                </div>
            </div>
        </div>
    );
}
