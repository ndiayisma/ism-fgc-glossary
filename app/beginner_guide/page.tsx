import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ['latin'], weight: '500' });

const sections = [
    { id: "numerotation", label: "Numérotation" },
    { id: "motions-input", label: "Motions Input" },
    { id: "neutral", label: "Neutral" },
    { id: "frame-data", label: "Frame Data" },
    { id: "contre-attaque", label: "Contre-Attaque" },
    { id: "garde", label: "Garde" },
    { id: "combos", label: "Combos" },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
        <section id={id} className="scroll-mt-24 mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
            <h2 className={`${roboto.className} text-2xl font-bold text-white tracking-tight mb-4`}>{title}</h2>
            {children}
        </section>
    );
}

export default function BeginnerGuide() {
    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="mb-8">
                    <h1 className={`${roboto.className} text-5xl font-extrabold text-white tracking-tight`}>Guide du Débutant</h1>
                    <p className="mt-4 text-white/80 leading-relaxed">
                        Vous débutez dans les jeux de combat ? Vous êtes intéressé par la commu FGC et aimez les moments hype qui tournent autour des compétitions ?
                        Vous avez besoin d'aide pour comprendre les bases et les mécaniques du genre et voulez vous surpasser et relever les défis ?
                        Pas de panique, bien que je sache peu de choses, le but est d'essayer de vous aider à mieux comprendre les termes et mécaniques de base
                        pour que vous puissiez mieux apprécier les jeux de combat et la commu FGC.
                    </p>

                    {/* Sommaire */}
                    <nav aria-label="Sommaire" className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6">
                        <h2 className={`${roboto.className} text-sm font-bold text-white/60 uppercase tracking-wide mb-3`}>Sommaire</h2>
                        <ol className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {sections.map((s, i) => (
                                <li key={s.id}>
                                    <a
                                        href={`#${s.id}`}
                                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                        <span className="text-white/40 font-mono">{String(i + 1).padStart(2, "0")}</span>
                                        {s.label}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    <Section id="numerotation" title="Numérotation">
                        <img src="/begiguide/numpad.png" alt="Numpad notation guide" className="mb-4 w-full max-w-md rounded-lg" />
                        <p className="text-white/80 leading-relaxed">
                            On va d'abord commencer par les termes en numérotation. Bien que cela puisse paraître compliqué, ceux qui ont un ordi savent de quoi ça parle
                            (enfin, peut-être).
                            Si vous avez un clavier, vous avez sûrement des boutons situés tout à droite de 1 à 9, avec des boutons pour les opérations mathématiques (+, -, *, /),
                            un bouton pour le point (.) et un autre pour le 0.
                            <br /><br />
                            En numérotation, on utilise ces chiffres pour représenter les directions d'un stick de jeu de combat.
                            Le 5 représente la position neutre (stick au repos), tandis que les autres chiffres représentent les différentes directions :
                            par exemple, 6 signifie avancer vers l'avant si le personnage fait face à droite, ou reculer si le personnage fait face à gauche.
                            <br /><br />
                            Voici une liste des directions associées à chaque chiffre :
                        </p>
                        <div className="mt-4 grid grid-cols-3 gap-2 w-fit">
                            <div className="w-16 h-16 flex items-center justify-center border-2 border-white/20 rounded-lg text-white font-bold">7</div>
                            <div className="w-16 h-16 flex items-center justify-center border-2 border-white/20 rounded-lg text-white font-bold">8</div>
                            <div className="w-16 h-16 flex items-center justify-center border-2 border-white/20 rounded-lg text-white font-bold">9</div>

                            <div className="w-16 h-16 flex items-center justify-center border-2 border-white/20 rounded-lg text-white font-bold">4</div>
                            <div className="w-16 h-16 flex items-center justify-center border-2 border-white/20 rounded-lg text-white font-bold">5</div>
                            <div className="w-16 h-16 flex items-center justify-center border-2 border-white/20 rounded-lg text-white font-bold">6</div>

                            <div className="w-16 h-16 flex items-center justify-center border-2 border-white/20 rounded-lg text-white font-bold">1</div>
                            <div className="w-16 h-16 flex items-center justify-center border-2 border-white/20 rounded-lg text-white font-bold">2</div>
                            <div className="w-16 h-16 flex items-center justify-center border-2 border-white/20 rounded-lg text-white font-bold">3</div>
                        </div>
                        <div className="mt-4 text-white/70 text-sm space-y-1">
                            <p><span className="font-bold text-white">7:</span> Haut-Gauche | <span className="font-bold text-white">8:</span> Haut | <span className="font-bold text-white">9:</span> Haut-Droite</p>
                            <p><span className="font-bold text-white">4:</span> Gauche | <span className="font-bold text-white">5:</span> Neutre | <span className="font-bold text-white">6:</span> Droite</p>
                            <p><span className="font-bold text-white">1:</span> Bas-Gauche | <span className="font-bold text-white">2:</span> Bas | <span className="font-bold text-white">3:</span> Bas-Droite</p>
                        </div>
                        <p className="mt-4 text-white/80 leading-relaxed">
                            Cette numérotation est largement utilisée dans les communautés de jeux de combat pour décrire les mouvements et les attaques,
                            facilitant ainsi la communication entre les joueurs.
                        </p>
                    </Section>

                    <Section id="motions-input" title="Motions Input">
                        <p className="text-white/80 leading-relaxed">
                            Là on va aller un peu plus loin sur les numérotations, mais ceci est l'élément clé pour la compréhension des mouvements et de certaines attaques dans ce genre.
                            <br /><br />
                            Les motions inputs sont, tout simplement, des séquences de directions que vous devez effectuer avec les touches directionnelles (ou le stick) pour exécuter des moves spécifiques.
                            <br /><br />
                            En prenant l'exemple de Street Fighter, le célèbre "Hadoken" est exécuté en effectuant la séquence suivante :
                            236 puis un bouton d'attaque (236P). Ce qui signifie que vous devez faire un quart de cercle en partant vers le bas (2),
                            puis en allant vers la droite (6), et appuyer sur le bouton d'attaque
                            simultanément lorsque vous êtes sur la direction 6.
                            <br /><br />
                            De même, le "Shoryuken" est exécuté en effectuant la séquence suivante : 623P, ce qui signifie que vous devez commencer par la direction 6,
                            puis aller vers le bas avec 2 et 3,
                            et enfin appuyer sur le bouton d'attaque lorsque vous êtes sur la direction 3.
                            <br /><br />
                            Ces motions inputs sont essentiels pour exécuter des attaques spéciales et des combos dans les jeux de combat,
                            et leur maîtrise est souvent un élément clé pour progresser dans le genre. Mais rappelez-vous que si vous êtes dans une autre position (par exemple, si le perso fait face à gauche),
                            les directions seront inversées : le 236 deviendra un 214 et le 623 deviendra un 412.
                        </p>
                    </Section>

                    <Section id="neutral" title="Neutral">
                        <p className="text-white/80 leading-relaxed">
                            Le neutral est un terme utilisé pour décrire la phase où les joueurs sont en position neutre.
                            Avant de commencer un round, vous serez dans cet état de neutral, et le but est de chercher une ouverture pour attaquer
                            ou de se protéger d'une éventuelle offensive adverse.
                            Il est donc essentiel d'avoir un gameplan pour savoir comment réagir et s'adapter au rythme du match et aux situations qui vous sont présentées.
                        </p>
                    </Section>

                    <Section id="frame-data" title="Frame Data">
                        <p className="text-white/80 leading-relaxed">
                            La frame data est un terme utilisé pour décrire
                            les données de chaque frame (image) d'une animation dans un jeu de combat.
                            Il faut savoir que les jeux de combat fonctionnent à une
                            certaine fréquence d'images par seconde (la norme étant 60 FPS, soit 60 images par seconde),
                            et que chaque action ou mouvement dans le jeu est composé de plusieurs frames.
                            Par ailleurs, un mouvement ou une attaque a 3 phases qu'il est important de connaître :
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-3 text-white/80">
                            <li>
                                <span className="font-semibold text-white">Startup Frames</span> — C'est la phase de préparation d'une attaque.
                                Pendant cette phase, après avoir appuyé sur un bouton,
                                le personnage commence à exécuter l'attaque,
                                mais elle n'est pas encore active.
                                Durant cette période, il devient vulnérable à certaines attaques adverses,
                                mais la plupart des anti-airs invulnérables peuvent outrepasser cette règle.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Active Frames</span> — C'est la phase où l'attaque entre en contact et
                                où une hitbox est active. Par exemple, si l'attaque met 7 frames à venir,
                                c'est à partir de la 7ème qu'elle entre dans l'active frame.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Recovery Frames</span> — C'est la phase de récupération après l'exécution d'une attaque.
                                Pendant cette phase, le personnage est vulnérable aux attaques adverses
                                selon les circonstances,
                                et il ne peut pas effectuer d'autres actions immédiatement.
                            </li>
                        </ul>
                        <p className="mt-4 text-white/80 leading-relaxed">
                            La frame data est cruciale pour comprendre les avantages et les désavantages de chaque attaque de son personnage,
                            ainsi que pour planifier des stratégies de combat efficaces.
                            En connaissant la frame data, les joueurs peuvent mieux anticiper les mouvements de leur adversaire,
                            choisir les attaques appropriées à utiliser dans différentes situations,
                            et optimiser leurs combos pour maximiser les dégâts infligés.
                        </p>
                        <img src="/begiguide/framedata-explaination.gif" alt="Frame Data Example" className="mt-4 w-full h-auto max-w-full rounded-lg" />
                        <p className="mt-2 text-xs text-white/60">
                            Exemple : le 2A d'Akali prend 7 frames avant d'atteindre l'active frame (vert). Après 3 frames actives (rouge), elle aura 12 frames de recovery (bleu). En parallèle, Braum subit 13 frames de hitstun (cyan).
                        </p>
                    </Section>

                    <Section id="contre-attaque" title="Contre-Attaque">
                        <p className="text-white/80 leading-relaxed">
                            Le contre-attaque, comme son nom l'indique, consiste à renvoyer le coup adverse.
                            Plus précisément, lorsque vous êtes en action d'attaque et que la vôtre touche en premier,
                            vous déclenchez ce qui s'appelle un "Counter !". Pas de panique, lorsque cela arrive,
                            certains jeux vous l'indiquent en criant "COUNTER" ou en l'affichant à l'écran.
                            Ce faisant, votre adversaire subira un hitstun qui durera plus longtemps selon les coups, et dans la majorité des cas
                            il subira aussi plus de dégâts. Vous aurez donc ainsi la possibilité de faire des combos qui seraient impossibles à faire
                            en temps normal.
                        </p>
                        <video className="mt-4 w-full h-auto max-w-full rounded-lg" controls>
                            <source src="/begiguide/Difference_Counter_NoCounter.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                        <p className="mt-2 text-xs text-white/60">
                            Exemple : le 2C ne permet pas de faire un combo après un 5/2D. Avec un counter, cela devient possible vu du long hitstun que le coup inflige lors d'un counter.
                        </p>
                    </Section>

                    <Section id="garde" title="Garde">
                        <p className="text-white/80 leading-relaxed">
                            Ça sert juste à se protéger et à limiter les dégâts en maintenant la gauche (je vous conseille de maintenir le bas-gauche pour être sûr,
                            sauf si vous jouez à SoulCalibur ou Mortal Kombat, où vous devez appuyer sur un bouton pour bloquer les attaques).
                            Ceci est la base de la défense dans les jeux de combat, et il existe deux types de garde : haute et basse.
                            <br /><br />
                            La garde haute est utilisée pour bloquer les attaques aériennes et les attaques qui frappent au-dessus de la taille,
                            tandis que la garde basse est utilisée pour bloquer les attaques qui frappent au niveau de la taille ou en dessous.
                            <br /><br />
                            Lorsque vous bloquez une attaque, vous subissez généralement moins de dégâts et, surtout,
                            vous serez en état de "blockstun" pour un certain temps,
                            ce qui signifie que vous ne pouvez pas effectuer d'autres actions immédiatement après avoir bloqué une attaque.
                            En général, les attaques bloquées ont un blockstun négatif,
                            ce qui signifie que vous pouvez contre-attaquer plus facilement après avoir bloqué une attaque.
                            <br /><br />
                            Il est important de noter que certaines attaques, comme les grabs (prises),
                            ne peuvent pas être bloquées et nécessitent une esquive (en sautant par exemple)
                            ou un contre avec la même prise afin d'éviter de se faire prendre.
                        </p>
                    </Section>

                    <Section id="combos" title="Combos">
                        <p className="text-white/80 leading-relaxed">
                            Un combo est une séquence d'attaques qui permet d'enchaîner plusieurs coups sans que l'adversaire puisse réagir.
                            Chaque jeu a ses propres séquences de combos. Plus les séquences s'enchaînent,
                            plus les prochains coups voient leurs dégâts réduits, mais le total infligé reste maximisé.
                            C'est ce qu'on appelle le damage scaling : les dégâts de chaque attaque dans le combo sont
                            réduits en fonction du nombre d'attaques déjà effectuées.
                            Vous l'aurez compris,
                            ce n'est pas juste pour maximiser les dégâts,
                            mais pour envoyer un message à votre adversaire que vous êtes en contrôle de la situation
                            et que vous pouvez faire ce que vous voulez. Et aussi pour les caméras et les spectateurs, parce que
                            c'est toujours plus hype de voir un tout nouveau et joli combo de 10 coups
                            plutôt qu'un simple coup normal.
                            <br /><br />
                            Récemment, plusieurs jeux de combat ont introduit un système d'"auto-combo",
                            qui permet aux joueurs d'exécuter une séquence de combo en appuyant simplement plusieurs fois sur un bouton d'attaque.
                            Cela rend les combos plus accessibles aux débutants,
                            mais donne aussi des idées pour des combos plus avancés.
                        </p>
                    </Section>
                </div>
            </div>
        </div>
    );
}
