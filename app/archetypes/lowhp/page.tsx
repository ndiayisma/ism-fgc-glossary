import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });

const pixie = [
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
        gameLogo: "/next.svg",
    },

    {
        name: "Taokaka",
        game: "BlazBlue : ChronoPhantasma & CentralFiction",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },

];
const glassCannons = [
    {
        name: "Akuma",
        game: "Street Fighter 6",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Seth",
        game: "Under Night In-Birth",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    },
    {
        name: "Seox",
        game: "Granblue Fantasy Versus",
        portrait: "/next.svg", // Placeholder temporaire
        gameLogo: "/next.svg",
    }
];

export default function LowHP() {
    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="mb-8">
                    <h1 className={`${roboto.className} text-4xl font-extrabold text-white-900 tracking-tight`}>Low HP</h1>
                    <p className="mt-2 text-sm text-white-600">
                        En genéral, vous aviez compris lors du guide que le but est de faire tomber les PV de votre adversaire à zéro pour gagner un round,
                        la majorité sont dans la moyenne, d'autres sont des tanks,
                        mais il existe un type de personnage qui a des faibles PV,
                        exposant ainsi à un risque de perdre ce round plus rapidement que les autres,
                        mais en contrepartie, ils ont des outils pour compenser ce désavantage.
                        <br /><br />
                        Qui plus est, on va parler de deux types, les
                        <strong>Glass Cannons</strong>(briseurs de verre), qui ont plus de techniques offensives et les
                        <strong>Pixie</strong>,
                        des personnages qui infligent pas beaucoup de dégats mais mettent des vitesses pour vous faire frustrer.
                        <br /><br /></p>;
                    <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight`}>Glass Cannon</h2>
                    <p className="mt-2 text-sm text-white-600">
                        Les Glass Cannons sont ce sous types de catégories plus répandus,
                        qui ont plus de techniques et privilégie plus les offensives, afin de compenser leur faibles PV.
                        <br />
                        Vous l'aurez comprit, ça constitue une épee de Damoclès, voir double tranchant. Vous avez des outils pour bien
                        enlever rapidement les PV de votre adversaire, mais il faut une bourde pour que tout s'effrondre
                        <br /><br />
                        Les exemples sont :
                    </p>

                    <br />
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {glassCannons.map((char) => (
                            <div
                                key={char.name}
                                className="flex flex-col items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors"
                            >
                                {/* 1. Character Portrait */}
                                <div className="relative w-22 h-22 sm:w-24 sm:h-24 overflow-hidden rounded-lg">
                                    <img
                                        src={char.portrait}
                                        alt={`Portrait de ${char.name}`}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                {/* 2. Character Name */}
                                <p className={`${roboto.className} text-sm font-semibold text-white text-center leading-tight`}>
                                    {char.name}
                                </p>

                                {/* 3. Game Logo */}
                                <img
                                    src={char.gameLogo}
                                    alt={`Logo ${char.game}`}
                                    className="h-12 w-auto object-contain opacity-70"
                                />
                            </div>
                        ))}
                    </div>
                    <br /><br />
                    <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight`}>Pixie</h2>
                    <p className="mt-2 text-sm text-white-600">
                        Les Pixies, quant à eux, privilégient des mix-ups rapides et parfois poussé à l'extrême,
                        quitte à faire des dégâts plus faibles que les autres personnages.
                        <br />
                        Attention, car ils peuvent faire souvent du <strong>Hit & Run</strong>, c'est à dire,
                        frapper et lorsque vous êtes en récup, aller s'eloigner le plus vite possible pour éviter de se faire frapper en retour,
                        et attendre le bon moment de faire une attaque plus rapide pour vous faire frustrer.
                        <br /><br />
                        Les exemples sont :
                    </p>
                    <br />
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {pixie.map((char) => (
                            <div
                                key={char.name}
                                className="flex flex-col items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors"
                            >
                                {/* 1. Character Portrait */}
                                <div className="relative w-22 h-22 sm:w-24 sm:h-24 overflow-hidden rounded-lg">
                                    <img
                                        src={char.portrait}
                                        alt={`Portrait de ${char.name}`}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                {/* 2. Character Name */}
                                <p className={`${roboto.className} text-sm font-semibold text-white text-center leading-tight`}>
                                    {char.name}
                                </p>

                                {/* 3. Game Logo */}
                                <img
                                    src={char.gameLogo}
                                    alt={`Logo ${char.game}`}
                                    className="h-12 w-auto object-contain opacity-70"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}