import ArchetypeLayout from "../../components/archetypes/ArchetypeLayout";
import CharacterGrid, { Character } from "../../components/archetypes/CharacterGrid";

const pixie: Character[] = [
  {
    name: "Chipp Zanuff",
    game: "Guilty Gear Strive",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/next.svg",
  },
  {
    name: "Yosuke Hanamura",
    game: "Persona 4 Arena Ultimax",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/p4au_logo.png",
  },
  {
    name: "Taokaka",
    game: "BlazBlue : ChronoPhantasma & CentralFiction",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/bbcf_logo.png",
  },
];

const glassCannons: Character[] = [
  {
    name: "Akuma",
    game: "Street Fighter 6",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/sf6_logo.png",
  },
  {
    name: "Seth",
    game: "Under Night In-Birth",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/uni2_logo.png",
  },
  {
    name: "Seox",
    game: "Granblue Fantasy Versus",
    portrait: "/next.svg", // Placeholder temporaire
    gameLogo: "/games/gbvsr_logo.png",
  },
];

export default function LowHP() {
  return (
    <ArchetypeLayout title="Low HP" subtitle="PV réduits">
      <p className="mt-4 text-white/80 leading-relaxed">
        En général, vous aurez compris lors du guide que le but est de faire tomber les PV de votre adversaire à zéro pour gagner un round.
        La majorité des personnages sont dans la moyenne, d'autres sont des tanks,
        mais il existe un type de personnage qui a de faibles PV,
        l'exposant ainsi à un risque de perdre ce round plus rapidement que les autres,
        mais en contrepartie, il a des outils pour compenser ce désavantage.
        <br />
        <br />
        Qui plus est, on va parler de deux types : les <strong>Glass Cannons</strong> (briseurs de verre), qui ont plus de techniques offensives, et les <strong>Pixies</strong>,
        des personnages qui infligent peu de dégâts mais qui misent sur la vitesse pour vous frustrer.
      </p>

      <h2 className="text-2xl font-bold text-white py-4 mt-8">Glass Cannon</h2>
      <p className="text-white/80 leading-relaxed">
        Les Glass Cannons sont ce sous-type de catégorie le plus répandu,
        qui privilégie les techniques offensives afin de compenser ses faibles PV.
        <br />
        Vous l'aurez compris, ça constitue une épée de Damoclès, voire une arme à double tranchant : vous avez des outils pour
        enlever rapidement les PV de votre adversaire, mais la moindre bourde et tout s'effondre.
        <br />
        <br />
        Les exemples sont :
      </p>
      <CharacterGrid characters={glassCannons} />

      <h2 className="text-2xl font-bold text-white py-4 mt-10">Pixie</h2>
      <p className="text-white/80 leading-relaxed">
        Les Pixies, quant à eux, privilégient des mix-ups rapides et parfois poussés à l'extrême,
        quitte à faire des dégâts plus faibles que les autres personnages.
        <br />
        Attention, car ils font souvent du <strong>Hit &amp; Run</strong> : ils frappent puis, lorsque vous êtes en récup,
        s'éloignent le plus vite possible pour éviter de se faire punir en retour,
        et attendent le bon moment pour revenir vous frustrer avec une attaque rapide.
        <br />
        <br />
        Les exemples sont :
      </p>
      <CharacterGrid characters={pixie} />
    </ArchetypeLayout>
  );
}
