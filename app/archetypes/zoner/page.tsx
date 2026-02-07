import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });

export default function Zoner() {
    return (
        <div className="bg-gradient-to-br from-purple-950  to-blue-900 min-h-screen py-12">
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
                        Les exemples particuliers sont : </p>
                    <ul className="list-disc list-inside mt-2 text-white-600">
                        <li>Dhalsim (Street Fighter)</li>
                        <li>Axl (Guilty Gear Strive)</li>
                        <li>Athena (The King of Fighters)</li>
                    </ul>
                    </div>
            </div>
        </div>
    );
}