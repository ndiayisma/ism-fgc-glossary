import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });

export default function Grappler() {
    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="mb-8">
                    <h1 className={`${roboto.className} text-4xl font-extrabold text-white-900 tracking-tight`}>Grappler</h1>
                    <p className="mt-2 text-sm text-white-600">
                        Les grapplers, aussi appelés catcheurs, sont des personnages qui ont pour spécialités de chopper leur adversaires avec les <strong>Command Grabs</strong>, et en faire des dégâts plus importants<p/>
                        Leur objectifs est de s'approcher de son adversaire et utiliser ses outils pour chopper et les terrifier 
                        afin de les faires plus hésiter une fois au mur.
                        <br/> Et bien qu'ils soient des tank et des monstres offensive, 
                        leur plus grande faiblesses sont leur mobilités qui sont beaucoup plus réduites pour compenser leur forces.
                        <br/><br/>
                        Cet archétype est idéal pour les joueurs qui aiment jouer de manière agressive et veulent contrôler le rythme du combat en maintenant une pression constante sur l'adversaire.
                        Les exemples particuliers sont : </p>
                    <ul className="list-disc list-inside mt-2 text-white-600">
                        <li>Zangief (Street Fighter)</li>
                        <li>Potemkin (Guilty Gear Strive)</li>
                        <li>Iron Tager (Séries BlazBlue)</li>
                        <li>Broly(Z) (Dragon Ball FighterZ)</li>
                        <li>Waldestein (Under Night In-Birth)</li>
                        <li>Ladiva (Granblue Fantasy Versus)</li>
                    </ul>
                    <br/><br/>
                    <p className="mt-2 text-sm text-white-600">
                        Recemment, il y a eu des grapplers qui ont plus d'atouts que les grapplers traditionnels,
                        tels que les mobilités, possibilités de faire plus de combos diversifiés comme par exemple :
                    </p>
                    <ul className="list-disc list-inside mt-2 text-white-600">
                        <li>Alex (Street Fighter 6)</li>
                        <li>Bullet (Blazblue : ChronoPhantasma & CentralFiction)</li>
                        <li>Goku Arc Saiyan (Dragon Ball FighterZ)</li>
                        <li>Shermie (The King of Fighters)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}