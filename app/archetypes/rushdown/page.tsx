import ArchetypeLayout from "../../components/archetypes/ArchetypeLayout";
import CharacterGrid, { Character } from "../../components/archetypes/CharacterGrid";

const characters: Character[] = [
  {
    name: "Cammy",
    game: "Street Fighter",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/sf6_logo.png",
  },
  {
    name: "Sol Badguy",
    game: "Guilty Gear Strive",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/ggst_logo.png",
  },
  {
    name: "Ragna the Bloodedge",
    game: "Séries BlazBlue",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/bbcf_logo.png",
  },
  {
    name: "Yamcha",
    game: "Dragon Ball FighterZ",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/dbfz_logo.png",
  },
  {
    name: "Linne",
    game: "Under Night In-Birth",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/uni2_logo.png",
  },
];

export default function Rushdown() {
  return (
    <ArchetypeLayout title="Rushdown" subtitle="Agressif">
      <p className="mt-4 text-white/80 leading-relaxed">
        Les "Rushdowns", comme leur nom l'indique, est un style qui privilégie les attaques rapides et agressives au corps-à-corps, sans que l'adversaire puisse facilement réagir.
        <br />
        Comme outils pour raccourcir la distance et maintenir une offensive sans échappatoire, ils attaquent sans relâche avec des coups qui sont en plus on-block.
        Certains utilisent beaucoup de mix-ups afin de faire hésiter l'adversaire à prendre une décision pour les
        contrer (<strong>cross-up, low, throw, overhead</strong>).
        <br />
        <br />
        Mais attention, car ce style de jeu est très risqué, et peut facilement se retourner contre vous si votre
        adversaire parvient à anticiper vos mouvements ou à trouver une ouverture pour vous punir.
        <br />
        Et cela l'est encore plus avec les zoners, qui peuvent facilement camper et empêcher les rushdowns de se rapprocher d'eux.
        <br />
        Cet archétype est idéal pour les joueurs qui aiment jouer de manière offensive et veulent abattre l'ennemi.
      </p>

      <CharacterGrid title="Exemples de Personnages Rushdown" characters={characters} />
    </ArchetypeLayout>
  );
}
