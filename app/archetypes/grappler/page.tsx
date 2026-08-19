import ArchetypeLayout from "../../components/archetypes/ArchetypeLayout";
import CharacterGrid, { Character } from "../../components/archetypes/CharacterGrid";

const characters: Character[] = [
  {
    name: "Zangief",
    game: "Street Fighter",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/sf6_logo.png",
  },
  {
    name: "Potemkin",
    game: "Guilty Gear Strive",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/ggst_logo.png",
  },
  {
    name: "Iron Tager",
    game: "BlazBlue",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/bbcf_logo.png",
  },
  {
    name: "Broly(Z)",
    game: "Dragon Ball FighterZ",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/dbfz_logo.png",
  },
  {
    name: "Waldestein",
    game: "Under Night In-Birth",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/uni2_logo.png",
  },
  {
    name: "Ladiva",
    game: "Granblue Fantasy Versus",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/gbvsr_logo.png",
  },
  {
    name: "King",
    game: "Tekken",
    portrait: "/characters/grappler/king.jpg",
    gameLogo: "/games/tekken8_logo.webp",
  },
];

const advancedCharacters: Character[] = [
  {
    name: "Alex",
    game: "Street Fighter 6",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/sf6_logo.png",
  },
  {
    name: "Bullet",
    game: "BlazBlue : ChronoPhantasma & CentralFiction",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/bbcf_logo.png",
  },
  {
    name: "Goku (Arc Saiyan)",
    game: "Dragon Ball FighterZ",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/dbfz_logo.png",
  },
];

export default function Grappler() {
  return (
    <ArchetypeLayout title="Grappler" subtitle="Catcheur">
      <p className="mt-4 text-white/80 leading-relaxed">
        Les grapplers, aussi appelés catcheurs, sont des personnages qui ont pour spécialité de choper leurs adversaires avec des <strong>Command Grabs</strong>, et d'infliger des dégâts plus importants.
        <br />
        Leur objectif est de s'approcher de l'adversaire et d'utiliser leurs outils pour choper et terrifier,
        afin de le faire hésiter davantage une fois au mur.
        <br />
        Et bien qu'ils soient des tanks et des monstres offensifs,
        leur plus grande faiblesse est leur mobilité, beaucoup plus réduite pour compenser leurs forces.
        <br />
        <br />
        Cet archétype est idéal pour les joueurs qui aiment jouer de manière agressive et veulent contrôler le rythme du combat en maintenant une pression constante sur l'adversaire.
      </p>

      <CharacterGrid title="Exemples de Personnages Grapplers" characters={characters} />

      <p className="mt-10 text-white/80 leading-relaxed">
        Récemment, il y a eu des grapplers qui ont plus d'atouts que les grapplers traditionnels,
        tels que plus de mobilité et la possibilité de faire des combos plus diversifiés, comme par exemple :
      </p>

      <CharacterGrid title="Exemples de Personnages Grapplers avec plus d'outils" characters={advancedCharacters} />
    </ArchetypeLayout>
  );
}
