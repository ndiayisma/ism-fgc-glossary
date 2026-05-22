import { Bokor } from "next/font/google";
import { Roboto } from "next/font/google";

const bokor = Bokor({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '500' });

export default function BeginnerGuide() {
    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="mb-8">
                    <h1 className={`${roboto.className} text-4xl font-extrabold text-white-900 tracking-tight`}>Guide du Débutant</h1>
                    <div className="mt-2 text-sm text-white-600">Vous débutez dans les jeux de combats ? Vous êtes intéressé par la commu FGC et aimer les moments hypes qui tourne autour des compétitions ?
                        Vous avez besoin d'aide pour comprendre les bases et mécanique du genre et voulez vour surpasser davantage et relevez les défis ?
                        Pas de panique, bien que je sais peu de choses, le but est d'essayer de vous aider à mieux comprendre les termes et mécaniques de base
                        pour que vous puissiez mieux apprécier les jeux de combats et la commu FGC.
                        <br /><br />
                        Par ailleurs, je vais metrre un une sorte de table de matières pour que vous navigiuez sur les définitions si vous voulez y refaire un tour
                        ou si vous voulez juste comprendre un terme en particulier.
                        <br></br>


                        <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight mt-4`}>Numérotation</h2>
                        <img src="/begiguide/numpad.png" alt="Numpad notation guide" className="mt-4 w-full max-w-md" />
                        <div className="mt-2 text-sm text-white-600">
                            On va d'abord commencer par les termes en numérotation. Bien que cela puisse paraître compliqué, ceux qui ont un ordi savent de quoi ça parle
                            (enfin peut être)
                            Si vous avez un clavier, vous avez sûrement des boutons situés tout à droite de 1 à 9, avec des boutons pour les opérations des maths (+, -, *, /),
                            un bouton pour le point (.) et un autre pour le 0.
                            <br /><br />
                            En numérotation, on utilise ces chiffres pour représenter les directions d'un stick de jeu de combat.
                            Le 5 représente la position neutre (stick au repos), tandis que les autres chiffres représentent les différentes directions :
                            Par exemple, 6 signifie avancer vers l'avant si le personnage fait face à droite, ou reculer si le personnage fait face à gauche.
                            <br /><br />
                            Voici une liste des directions associées à chaque chiffre :
                            <div className="justify-content mt-4 grid grid-cols-3 gap-2 w-fit">
                                <div className="w-16 h-16 flex items-center justify-center border-2 border-white-600 rounded text-white-600 font-bold">7</div>
                                <div className="w-16 h-16 flex items-center justify-center border-2 border-white-600 rounded text-white-600 font-bold">8</div>
                                <div className="w-16 h-16 flex items-center justify-center border-2 border-white-600 rounded text-white-600 font-bold">9</div>

                                <div className="w-16 h-16 flex items-center justify-center border-2 border-white-600 rounded text-white-600 font-bold">4</div>
                                <div className="w-16 h-16 flex items-center justify-center border-2 border-white-600 rounded text-white-600 font-bold">5</div>
                                <div className="w-16 h-16 flex items-center justify-center border-2 border-white-600 rounded text-white-600 font-bold">6</div>

                                <div className="w-16 h-16 flex items-center justify-center border-2 border-white-600 rounded text-white-600 font-bold">1</div>
                                <div className="w-16 h-16 flex items-center justify-center border-2 border-white-600 rounded text-white-600 font-bold">2</div>
                                <div className="w-16 h-16 flex items-center justify-center border-2 border-white-600 rounded text-white-600 font-bold">3</div>
                            </div>
                            <div className="mt-4 text-white-600 text-sm">
                                <p><span className="font-bold">7:</span> Haut-Gauche | <span className="font-bold">8:</span> Haut | <span className="font-bold">9:</span> Haut-Droite</p>
                                <p><span className="font-bold">4:</span> Gauche | <span className="font-bold">5:</span> Neutre | <span className="font-bold">6:</span> Droite</p>
                                <p><span className="font-bold">1:</span> Bas-Gauche | <span className="font-bold">2:</span> Bas | <span className="font-bold">3:</span> Bas-Droite</p>
                            </div>
                            <br /><br />
                            Cette numérotation est largement utilisée dans les communautés de jeux de combat pour décrire les mouvements et les attaques,
                            facilitant ainsi la communication entre les joueurs.
                        </div>

                        <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight mt-4`}>Motions Input</h2>
                        <p className="mt-2 text-sm text-white-600">
                            Là on va aller un peu loin sur les numérotations, mais ceci est l'élement clé pour la compréhension des mouvements et de certaines attaques dans ce genre.
                            <br />
                            Les motions inputs sont, tout simplement des séquences de directions que vous devez effectuer avec les touches directionnelles (ou le stick) pour éxecuter des moves spécifiques.
                            <br /><br />
                            En prenant l'exemple de Street Fighter, le celèbre "Hadoken" est exécuté en effectuant les séquences suivantes :
                            236 puis un bouton d'attaque (236P). Signifiant que vous dever faire un quart de cercle en partant vers le bas (2)
                            puis en allant vers la droite (6) et appuyer sur le bouton d'attaque
                            simultanément lorsque vous êtes sur la direction 6.
                            <br /><br />
                            De même, le "Shoryuken" est exécuté en effectuant les séquences suivantes : 623P, ce qui signifie que vous devez commencer par la direction 6,
                            puis aller vers le bas avec 2 et 3,
                            et enfin appuyer sur le bouton d'attaque lorsque vous êtes sur la direction 3.
                            <br /><br />
                            Ces motions inputs sont essentiels pour exécuter des attaques spéciales et des combos dans les jeux de combat,
                            et leur maîtrise est souvent un élément clé pour progresser dans le genre. Mais rappelez-vous que si vous êtes dans un autre position (par exemple, si le perso fait face à gauche),
                            les directions seront inversées, donc par exemple, le 236 sera un 214 et 623 sera un 412.
                        </p>

                        <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight mt-4`}>Neutral</h2>
                        <p className="mt-2 text-sm text-white-600">Le neutral est un terme utilisé pour décrire une phase ou les joueurs sont en position neutre.
                            Avant de commencer un round, vous serez dans cet état de neutral, et le but est de chercher une ouverture pour attaquer
                            ou pour se protéger de quelqueconque offensive adverse voir.
                            Donc il est essentiel d'avoir un gameplan pour savoir comment réagir et s'adpater au rythme du match et des situations qui vous est présenté.
                        </p>

                        <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight mt-4`}>Frame Data</h2>
                        <p className="mt-2 text-sm text-white-600">La frame data est un terme utilisé pour décrire
                            les données de chaque frame (image) d'une animation dans un jeu de combat.
                            Il faut savoir que les jeux de combat fonctionnent à une
                            certaine fréquence d'images par secondes (la norme étant 60 FPS soit 60 images par seconde),
                            et chaque action ou mouvement dans le jeu est composé de plusieurs frames.
                            Par ailleurs, un mouvement ou attaque à 3 phases qui est important de connaître :
                        </p>
                        <ul className="list-disc list-inside mt-2 text-white-600">
                            <li>Startup Frames : C'est la phase de préparation d'une attaque.
                                Pendant cette phase, après avoir appuyé sur un bouton,
                                le personnage commence à exécuter l'attaque,
                                mais elle n'est pas encore active.
                                Durant ceette période, il devient vulnérable à certaines attaques adverses,
                                mais la plupart tel que les anti-air
                                invulnérables peuvent outrepasser cette règle.
                            </li>
                            <li>Active Frames : C'est la phase où l'attaque est entré en contact et
                                qu'une hitbox est active. Par exemple, si l'attaque met 7 frames à venir,
                                c'est à partir de la 7ème qu'il entre dans l'active frame
                            </li>
                            <li>Recovery Frames : C'est la phase de récupération après l'exécution d'une attaque.
                                Pendant cette phase, le personnage est vulnérable aux attaques adverses
                                selon les circonstances de ce dernier,
                                et il ne peut pas effectuer d'autres actions immédiatement.
                            </li>
                        </ul>
                        <p className="mt-2 text-sm text-white-600">
                            La frame data est cruciale pour comprendre les avantages et les désavantages de chaque attaque de son personnage,
                            ainsi que pour planifier des stratégies de combat efficaces.
                            En connaissant la frame data, les joueurs peuvent mieux anticiper les mouvements de leur adversaire,
                            choisir les attaques appropriées à utiliser dans différentes situations,
                            et optimiser leurs combos pour maximiser les dégâts infligés.
                        </p>
                        <img src="/begiguide/framedata-explaination.gif" alt="Frame Data Example" className="mt-4 w-full h-auto max-w-full rounded-base" />
                        <p className="mt-2 text-xs text-white-600">
                            Exemple : Le 2A d'Akali prend 7 frames avant d'atteindre l'active frame(vert). Après 3 frames actives(rouge), elle aura 12 frame de recovery(bleu). En parralèle, Braum se prend 13 frames de hitstun(cyan).
                        </p>

                        <br></br>

                        <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight mt-4`}>Contre-Attaque</h2>
                        <p className="mt-2 text-sm text-white-600 mb-5">
                            Les contres-attaque, comme son nom l'indique est de renvoyer le coup adverse.
                            Ou plus précisément, lorsque vous êtes en action d'attaque et que le votre touche en premier,
                            vous allez déclencher ce qui s'appelle un "Counter!". Pas de panique, lorsque vous le faites,
                            certains jeux vous indique en criant "COUNTER" ou que çela affiche sur l'écran.
                            En faisant celà, votre adversaire auront un hitstun qui durera longtemps en fonction des coups et dans la majorité
                            se prennent plus de dégâts. Et encore, vous aurez donc ainsi une possibilité de faire des combos qui sont impossible à faire
                            en temps normal
                        </p>
                        <video className="w-full h-auto max-w-full rounded-base" controls>
                            <source src="/begiguide/Difference_Counter_NoCounter.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="mt-2 text-xs text-white-600">
                            Exemple : Le 2C ne permet pas de faire un combo après un 5/2D. Avec un counter, cela peut être possible vu du long hitstun que le coup inflige lors d'un counter.
                        </p>

                        <br></br>

                        <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight mt-4`}>Garde</h2>
                        <p className="mt-2 text-sm text-white-600">
                            Ca sert juste à se protéger et limiter les dégâts en maintenant la gauche (je vous conseille de maintenir le bas-gauche pour être sûr,
                            Sauf si vous jouez à SoulCalibur ou Mortal Kombat, là vous devez appuyer sur un bouton pour bloquer les attaques).
                            Ceci est la base de la défense dans les jeux de combat, et il existe deux types de gardes : haute et basse.
                            <br />
                            La garde haute est utilisée pour bloquer les attaques aériennes et les attaques qui frappent au-dessus de la taille,
                            tandis que la garde basse est utilisée pour bloquer les attaques qui frappent au niveau de la taille ou en dessous.
                            <br />
                            Lorsque vous bloquez une attaque, vous subissez généralement moins de dégats et surtout, 
                            vous serez en état de "blockstun" pour un certain temps,
                            ce qui signifie que vous ne pouvez pas effectuer d'autres actions immédiatement après avoir bloqué une attaque.
                            En général, les attaques bloqués ont un blockstun en négatif, 
                            signifiant que vous pouvez contre-attaquer plus facilement après avoir bloqué une attaque.
                            <br />
                            Il est important de noter que certaines attaques, comme les grabs (prises),
                            ne peuvent pas être bloquées et nécessitent une esquive (en sautant par exemple)
                            ou de contrer avec la même prise afin d'éviter de se faire prendre.
                        </p>

                        <br></br>

                        <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight mt-4`}>Combos</h2>
                        <p className="mt-2 text-sm text-white-600">
                            Un combo est une séquence d'attaques qui permet d'enchainer plusieurs attaques sans que l'adversaire puisse réagir.
                            Chaque jeux ont des séquences de combos propres à eux-même. Plus les séquences s'enchaînent, 
                            plus les prochains coups seront réduits mais maximisent les dégâts par la suite. 
                            Ce qui donne un damage scaling, c'est à dire que les dégâts de chaque attaque dans le combo sont 
                            réduits en fonction du nombre d'attaques déjà effectuées dans le combo.
                            Donc vous l'aurez compris,
                            ce n'est pas juste pour maximiser les dégâts, 
                            mais pour envoyer un message à votre adversaire que vous êtes en contrôle de la situation 
                            et que vous pouvez faire ce que vous voulez. Et vivre aussi pour les caméras et les spectateurs, parce que 
                            c'est toujours plus hype de voir un tout nouveau joli combo de 10 coups
                            que juste un coup normal.
                            <br/>
                            Récemment, plusieurs jeux de combats ont introduit un système d'"auto-combo", 
                            qui permet aux joueurs d'exécuter une séquence de combos en appuyant simplement sur un bouton d'attaque plusieurs fois.
                            Cela rend les combos plus accessibles aux débutants, 
                            mais cela donne aussi des idées de combos plus avancés avec.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
