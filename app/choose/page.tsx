import { Roboto } from "next/font/google";

import GameStyleFilter from "../components/choose/GameStyleFilter";
import Section from "../components/Section";

const roboto = Roboto({ subsets: ['latin'], weight: '500' });

export default function Choose() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-8">
          <h1 className={`${roboto.className} text-5xl font-extrabold text-white tracking-tight`}>Quel jeux choisir ?</h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            Vous voulez débuter sur un jeu en particulier après avoir vu quelques gameplays mais ne savez pas sur lequel vous investir ou de jouer occasionnellement ?
          </p>

          <Section id="style-de-jeu" title="Par style de jeu">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Les jeux de combat traditionnels misent plutôt sur des mécaniques terre-à-terre, tandis que les jeux dits "anime" ajoutent souvent plus de mobilité aérienne et de systèmes offensifs. Filtrez pour voir des exemples de chaque style :
            </p>
            <GameStyleFilter />
          </Section>
        </div>
      </div>
    </div>
  );
}