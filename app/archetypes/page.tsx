import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });


export default function Page() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-8">
          <h1 className={`${roboto.className} text-4xl font-extrabold text-white-900 tracking-tight`}>Archétypes de personnages</h1>
          <p className="mt-2 text-sm text-white-600">
            Dans les jeux de combat, les personnages sont souvent classés en différents archétypes en fonction de leur style de jeu, de leurs forces et de leurs faiblesses. 
            Ces archétypes aident les joueurs à comprendre les rôles que les personnages peuvent jouer dans un match et à choisir celui qui correspond le mieux à leur style de jeu.
            <br />
            Voici une liste des archétypes de personnages les plus courants que vous pouvez trouver dans les jeux de combat :
          </p>
          <ul className="list-disc list-inside mt-2 text-white-600">
            <li>
                 <Link
              className="text-blue-500 hover:underline"
              href="/archetypes/shoto"
            ><strong>Shoto (All-Rounded) :</strong></Link> Des personnages polyvalents avec un équilibre entre attaque, défense et mobilité.</li>
            <li>
                <Link className="text-blue-500 hover:underline" href="/archetypes/grappler"><strong>Grappler :</strong></Link> Des personnages puissants au corps à corps avec des prises et des attaques de projection.</li>
            <li><strong>Rushdown :</strong> Des personnages agressifs qui cherchent à maintenir la pression sur l'adversaire avec des attaques rapides et continues.</li>
            <li><strong>Zoner :</strong> Des personnages qui excellent à contrôler l'espace et à maintenir l'adversaire à distance avec des attaques à longue portée.</li>
            </ul>
        </div>
      </div>
    </div>
  );
}