import ArchetypeLayout from "../../components/archetypes/ArchetypeLayout";
import CharacterGrid, { Character } from "../../components/archetypes/CharacterGrid";

const characters: Character[] = [
  {
    name: "Zato-1",
    game: "Guilty Gear Strive",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/next.svg",
  },
  {
    name: "Chaos",
    game: "Under Night In-Birth",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/next.svg",
  },
  {
    name: "Carl=Clover",
    game: "Séries BlazBlue",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/bbcf_logo.png",
  },
  {
    name: "Harmonie & Luma",
    game: "Super Smash Bros. Ultimate",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/ssbu_logo.png",
  },
  {
    name: "Nier & Death",
    game: "Granblue Fantasy Versus : Rising",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/next.svg",
  },
];

export default function Puppet() {
  return (
    <ArchetypeLayout title="Marionnettiste" subtitle="Double personnage">
      <p className="mt-4 text-white/80 leading-relaxed">
        Les marionnettistes sont des personnages qui n'utilisent pas un mais
        <strong> DEUX</strong> personnages à la fois (le marionnettiste et la marionnette) afin de combiner leurs utilités et créer
        une myriade de combinaisons uniques avec des mix-ups quasi impossibles à anticiper.
        <br />
        <br />
        Effectivement, maîtriser un "marionnettiste" révèle un défi plus ardu que les autres
        archétypes puisque contrôler deux personnages demande une coordination et
        une compréhension profondes de leurs mécaniques respectives et de leurs synergies.
        <br />
        <br />
        Dès lors, une fois que vous avez compris les bases d'un marionnettiste, vous pouvez commencer à exploiter
        la myriade de possibilités des <strong>mix-ups</strong> et garder une pression constante sur votre adversaire.
        <br />
        <br />
        Cependant, il est important de noter que les marionnettistes sont dépendants de leur marionnette :
        si celle-ci est indisponible un temps,
        le personnage principal devient plus vulnérable,
        révélant son point faible majeur, car sa défense est plus lacunaire et limitée.
        <br />
        <br />
        Cet archétype n'est pas idéal pour tout le monde,
        mais si vous préférez un perso dans ce style,
        rien ne vous empêche de le main.
      </p>

      <CharacterGrid title="Exemples de Personnages Marionnettistes" characters={characters} />
    </ArchetypeLayout>
  );
}
