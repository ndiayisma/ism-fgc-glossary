import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });


export default function Shoto() {
    return (
        <div className="bg-gradient-to-br from-purple-950  to-blue-900 min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="mb-8">
                    <h1 className={`${roboto.className} text-4xl font-extrabold text-white-900 tracking-tight`}>Rushdown</h1>
                    <p className="mt-2 text-sm text-white-600">
                        Les personnages de type "rushdown" se caractérisent par leur style de jeu agressif et leur capacité à mettre la pression sur l'adversaire.
                        <br />
                        Les Rushdown ont tendance à privilégier des attaques rapides au corps à corps, ayant des outils pour
                        fermer la distance et maintenir une offensive sans échappatoire via des
                        Mix-Ups afin de les faire hésiter à prendre une décision de les contrer(cross-up, low, throw, overhead).
                        <br />
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