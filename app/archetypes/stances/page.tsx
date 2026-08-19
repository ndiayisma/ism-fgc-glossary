import ArchetypeLayout from "../../components/archetypes/ArchetypeLayout";
import CharacterGrid, { Character } from "../../components/archetypes/CharacterGrid";

const characters: Character[] = [
  {
    name: "Leo Whitefang",
    game: "Guilty Gear Strive",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/next.svg",
  },
  {
    name: "Gen",
    game: "Street Fighter 4",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/next.svg",
  },
  {
    name: "Senna",
    game: "2XKO",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/2xko_logo.png",
  },
];

export default function Stances() {
  return (
    <ArchetypeLayout title="Stances" subtitle="Postures multiples">
      <p className="mt-4 text-white/80 leading-relaxed">
        Les stances sont des positions ou des postures spécifiques que les personnages adoptent dans les jeux de combat.
        <br />
        Ces positions peuvent influencer la façon dont un personnage se déplace, attaque ou défend, et peuvent également affecter les options disponibles pour le joueur,
        car il se peut que certains personnages possèdent plusieurs positions de combat, leur offrant plus de variété dans leurs attaques et mouvements.
        <br />
        Cependant, apprendre un personnage avec cet archétype peut se révéler plus long, car il faut aussi connaître les fondamentaux de chaque position
        et savoir les utiliser à bon escient pour avoir le plus d'avantages possible dans un match.
      </p>

      <CharacterGrid title="Exemples de Personnages avec des Stances" characters={characters} />
    </ArchetypeLayout>
  );
}
