import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });


export default function Shoto() {
  return (
    <div className="bg-gradient-to-br from-purple-950  to-blue-900 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-8">
          <h1 className={`${roboto.className} text-4xl font-extrabold text-white-900 tracking-tight`}>SHOTO</h1>
          <p className="mt-2 text-sm text-white-600">
            Les personnages de type standard, communément appelé "shoto" ou "All-Rounded", sont des personnages qui ont plus de polyvalence
            Ayant accès a des moves qui répondent à certaines situations. 
            Plus précisément, on les retrouves avec au moins une attaque de zonage (plus souvent des projectiles), un anti-air, et des attaques pour se rapprocher de l'adversaire.
            <br />
            <br />
            En bref, ils n'ont pas de points forts sur les outils qu'ils ont, mais n'ont pas aussi beaucoup de points faibles que les autres archétypes, ce qui les rend plus équilibrés et plus faciles à jouer pour les débutants.
            <br />
            Le terme "shoto" vient du shotokan karaté, un art martial japonais et qui est utilisé comme inspiration pour les 2 personnages de Street Fighter, Ryu et Ken.

            <br />
            Après, ce qui est difficile avec cet archétypes et de savoir si un personnage est un shoto ou pas. 
            Car bien que Ryu et Ken en soient les primes exemples dans Street Fighter, 
            c'est plus difficile de le savoir si on a lu le kit de Sakura par exemple ou de Sagat, 
            comme ils ont des outilis qui peuvent les faires apparentés à cet archétypes en question. 
            Alors pour faire simple, on prend les perso principal, les protagonistes de chaque jeu de combat afin de les reconnaîtres.

            <br />
            On retrouve comme exemple :
          </p>
          <ul className="list-disc list-inside mt-2 text-white-600">
            <li>Ryu, Luke(Street Fighter 6)</li>
            <li>Terry Bogard (Fatal Fury, King of Fighters)</li>
            <li>Son Goku Super Saiyan (Dragon Ball FighterZ)</li>
            <li>Hyde, Londreika (Under Night In-Birth)</li>
            <li>Gran, Djeeta (Granblue Fantasy Versus)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}