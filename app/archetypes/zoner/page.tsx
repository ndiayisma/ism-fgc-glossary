import ArchetypeLayout from "../../components/archetypes/ArchetypeLayout";
import CharacterGrid, { Character } from "../../components/archetypes/CharacterGrid";

const characters: Character[] = [
  {
    name: "Dhalsim",
    game: "Street Fighter",
    portrait: "/characters/zoner/dhalsim.png",
    gameLogo: "/games/sf6_logo.png",
  },
  {
    name: "Axl Low",
    game: "Guilty Gear Strive",
    portrait: "/characters/zoner/axl_low.png",
    gameLogo: "/games/ggst_logo.png",
  },
  {
    name: "Athena",
    game: "The King of Fighters",
    portrait: "/characters/zoner/athena.png",
    gameLogo: "/games/kofxv_logo.webp",
  },
  {
    name: "Metera",
    game: "Granblue Fantasy Versus",
    portrait: "/characters/zoner/metera.png",
    gameLogo: "/games/gbvsr_logo.png",
  },
  {
    name: "Caitlyn",
    game: "2XKO",
    portrait: "/characters/zoner/caitlyn.jpg",
    gameLogo: "/games/2xko_logo.png",
  },
  {
    name: "Megaman",
    game: "Super Smash Bros Ultimate",
    portrait: "/characters/zoner/rockman_ssbu.png",
    gameLogo: "/games/ssbu_logo.png",
  },
];

export default function Zoner() {
  return (
    <ArchetypeLayout title="Zoner" subtitle="À distance">
      <p className="mt-4 text-white/80 leading-relaxed">
        Les Zoners sont les persos qui ont l'habitude de rester à l'écart et
        d'utiliser l'espace pour envoyer des salves de projectiles et contrôler le terrain.
        <br />
        Comme vous l'aurez compris, ces zoners ont pour outils plusieurs attaques à longue distance dans leur movelist,
        afin de trouver des ouvertures pour infliger des dégâts à leur adversaire,
        ou de le forcer lui-même à se protéger davantage en gardant.
        <br />
        Attention, car une fois au corps-à-corps, les zoners sont très vulnérables et peuvent se faire combo facilement
        (bien qu'ils aient des anti-airs pour s'en protéger, faites attention à leur <strong>Frame Data</strong> et à son fonctionnement).
        <br />
        <br />
        Ceux qui aiment jouer de manière stratégique et avoir le contrôle du terrain (pour ne pas dire camper), cet archétype est idéal pour vous.
      </p>

      <CharacterGrid title="Exemples de Personnages Zoners" characters={characters} />
    </ArchetypeLayout>
  );
}
