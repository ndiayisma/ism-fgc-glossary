import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });

const classicArchetypes = [
  {
    name: "Shoto",
    subtitle: "Equilibré",
    description: "Des personnages polyvalents avec un équilibre entre attaque, défense et mobilité.",
    href: "/archetypes/shoto",
    icon: "/exemples/ryu-sf5-artwork.webp",
  },
  {
    name: "Grappler",
    subtitle: "Catcheur",
    description: "Des personnages puissants au corps à corps avec des prises et des attaques de projection.",
    href: "/archetypes/grappler",
    icon: "/exemples/king-artwork.jpg",
  },
  {
    name: "Rushdown",
    subtitle: "Agressif",
    description: "Des personnages agressifs qui cherchent à maintenir la pression sur l'adversaire.",
    href: "/archetypes/rushdown",
    icon: "/exemples/cammy-sf5-artwork.webp",
  },
  {
    name: "Zoner",
    subtitle: "À distance",
    description: "Des personnages qui excellent à contrôler l'espace et à maintenir l'adversaire à distance.",
    href: "/archetypes/zoner",
    icon: "/exemples/dbfz_artwork.jpg",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-8">
          <h1 className={`${roboto.className} text-5xl font-extrabold text-white-900 tracking-tight mb-4`}>Archétypes de personnages</h1>
          <p className="mt-2 text-white-600 py-2">
            Dans les jeux de combat, les personnages sont souvent classés en différents archétypes en fonction de leur style de jeu, de leurs forces et de leurs faiblesses. 
            Ces archétypes aident les joueurs à comprendre les rôles que les personnages peuvent jouer dans un match et à choisir celui qui correspond le mieux à leur style de jeu.
            <br />
            Voici une liste des archétypes de personnages les plus courants que vous pouvez trouver dans les jeux de combat :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {classicArchetypes.map((archetype) => (
              <Link
                key={archetype.name}
                href={archetype.href}
                className="group"
              >
                <button
                  className="overflow-hidden relative w-full h-64 bg-black text-white border-none rounded-md text-3xl font-bold cursor-pointer z-10 group"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${archetype.icon})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

                  {/* Content */}
                  <div className="relative z-20 flex flex-col items-center justify-center h-full group-hover:opacity-0 transition-opacity duration-300">
                    <h2 className="text-4xl font-bold drop-shadow-lg">{archetype.name}</h2>
                    <p className="text-sm mt-2 drop-shadow-lg opacity-90">{archetype.subtitle}</p>
                  </div>

                  {/* Hover animation spans */}
                  <span className="absolute w-full h-full -top-0 -left-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                  <span className="absolute w-full h-full -top-0 -left-0 bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                  <span className="absolute w-full h-full -top-0 -left-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>

                  {/* Explore Text on Hover */}
                  <span className="group-hover:opacity-100 opacity-0 absolute inset-0 z-30 flex items-center justify-center text-white font-bold text-lg drop-shadow-lg transition-opacity group-hover:duration-1000 duration-100 px-6 text-center">
                    {archetype.description}
                  </span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}