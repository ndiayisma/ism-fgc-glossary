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
                    <p className="mt-2 text-sm text-white-600">Vous débutez dans les jeux de combats ? Vous êtes intéressé par la commu FGC et aimer les moments hypes qui tourne autour des compétitions ?
                        Vous avez besoin d'aide pour comprendre les bases et mécanique du genre et voulez vour surpasser davantage et relevez les défis ?
                        Pas de panique, bien que je sais peu de choses, le but est d'essayer de vous aider à mieux comprendre les termes et mécaniques de base
                        pour que vous puissiez mieux apprécier les jeux de combats et la commu FGC.
                        <br /><br />
                        Par ailleurs, je vais metrre un une sorte de table de matières pour que vous navigiuez sur les définitions si vous voulez y refaire un tour
                        ou si vous voulez juste comprendre un terme en particulier.
                        <br></br>

                        
                        <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight mt-4`}>Numérotation</h2>
                        <p className="mt-2 text-sm text-white-600">
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
                        </p>

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

                        <br></br>

                        <h2 className={`${roboto.className} text-2xl font-bold text-white-900 tracking-tight mt-4`}>Contre-Attaque</h2>
                        <p className="mt-2 text-sm text-white-600">
                            Les contres-attaque, comme son nom l'indique est de renvoyer le coup adverse. 
                            Ou plus précisément, lorsque vous êtes en action d'attaque et que le votre touche en premier, 
                            vous allez déclencher ce qui s'appelle un "Counter!". Pas de panique, lorsque vous le faites,
                            certains jeux vous indique en criant "COUNTER" ou que çela affiche dans l'interface pour les combos.
                            En faisant celà, votre adversaire auront un hitstun qui durera longtemps en fonction des coups et dans la majorité
                            se prennent plus de dégâts. Et encore, vous aurez donc ainsi une possibilité de faire des combos qui sont impossible à faire
                            en temps normal
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
}
