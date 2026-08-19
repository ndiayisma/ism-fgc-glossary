import ArchetypeLayout from "../../components/archetypes/ArchetypeLayout";
import CharacterGrid, { Character } from "../../components/archetypes/CharacterGrid";

// Données des personnages de type Shoto
const characters: Character[] = [
  {
    name: "Son Goku SSJ",
    game: "Dragon Ball FighterZ",
    portrait: "/characters/gokussj.png",
    gameLogo: "/games/dbfz_logo.png",
  },
  {
    name: "Ryu",
    game: "Street Fighter 6",
    portrait: "/characters/ryu.png", // Placeholder temporaire
    gameLogo: "/games/sf6_logo.png",
  },
  {
    name: "Luke",
    game: "Street Fighter 6",
    portrait: "/characters/luke.png", // Placeholder temporaire
    gameLogo: "/games/sf6_logo.png",
  },
  {
    name: "Terry Bogard",
    game: "Fatal Fury",
    portrait: "/characters/terry.png", // Placeholder temporaire
    gameLogo: "/games/cotw_logo.png",
  },
  {
    name: "Hyde",
    game: "Under Night In-Birth",
    portrait: "/characters/hyde_uni2.png", // Placeholder temporaire
    gameLogo: "/games/uni2_logo.png",
  },
  {
    name: "Gran",
    game: "Granblue Fantasy Versus",
    portrait: "/characters/gran.png", // Placeholder temporaire
    gameLogo: "/games/gbvsr_logo.png",
  },
];

export default function Shoto() {
  return (
    <ArchetypeLayout title="Shoto" subtitle="Équilibré">
      <div className="flex flex-col md:flex-row gap-6 items-start mt-4">
        <div className="max-w-md w-full flex-shrink-0 mx-auto md:mx-0">
          <img src="/exemples/DBFZ_cover_art.jpg" alt="Shoto" className="w-full object-cover rounded-lg" />
          <p className="text-xs text-white/60 mt-2">Vous verrez le personnage dans la jaquette en premier plan, c'est lui LE SHOTO</p>
        </div>

        <p className="text-white/80 leading-relaxed flex-1">
          Les personnages de type standard, communément appelé "Shoto" ou "All-Rounded", sont des personnages qui ont plus de polyvalence.
          Ayant accès à des moves qui répondent à certaines situations,
          plus précisément, on les retrouve avec au moins une attaque de zonage (le plus souvent des projectiles), un anti-air, et des attaques pour se rapprocher de l'adversaire.
          <br />
          <br />
          En bref, ils n'ont pas de points forts sur les outils qu'ils ont, mais n'ont pas non plus beaucoup de points faibles comparé aux autres archétypes, ce qui les rend plus équilibrés et plus faciles à jouer pour les débutants.
          <br />
          Le terme "shoto" vient du shotokan karaté, un art martial japonais qui est utilisé comme inspiration pour deux personnages de Street Fighter, Ryu et Ken.
          <br />
          <br />
          Après, ce qui est difficile avec cet archétype, c'est de savoir si un personnage est un shoto ou pas.
          Car bien que Ryu et Ken en soient les premiers exemples dans Street Fighter,
          c'est plus difficile de le savoir si on lit le kit de Sakura par exemple ou de Sagat,
          car ils ont des outils qui peuvent les faire apparentés à cet archétype.
          Alors pour faire simple, on prend le perso principal, le protagoniste de chaque jeu de combat afin de les reconnaître.
          <br />
          <br />
          En bref, les shotos sont des personnages équilibrés, plus adaptés à ceux qui débutent dans les jeux de combat
          afin de comprendre les bases du neutral et du plan de jeu.
        </p>
      </div>

      <CharacterGrid title="Exemples de Personnages Shotos" characters={characters} />
    </ArchetypeLayout>
  );
}
