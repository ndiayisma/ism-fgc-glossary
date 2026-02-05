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
            Les personnages de type "shoto" ou "standard" sont connus pour leur équilibre entre attaques à distance et combat rapproché.
            <br />
            Ils ont accès à des attaques de zonages, des contres en relève, et des techniques d'attaques rapprochées afin de répondre aux situations variées au combat.
            <br />
            <br />
            Ces personnages sont souvent considérés comme accessibles aux débutants en raison de leur simplicité et de leur efficacité dans le jeu.
            On retrouve comme exemple :
          </p>
          <ul className="list-disc list-inside mt-2 text-white-600">
            <li>Ryu, Luke(Street Fighter 6)</li>
            <li>Terry Bogard (Fatal Fury, King of Fighters)</li>
            <li>Son Goku, Super Saiyan (Dragon Ball FighterZ)</li>
            <li>Hyde, Londreika (Under Night In-Birth)</li>
            <li>Gran, Djeeta (Granblue Fantasy Versus)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}