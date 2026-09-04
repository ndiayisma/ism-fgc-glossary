import Link from "next/link";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });

export default function Home() {
  const categories = [
    {
      title: "Guide Débutants",
      description: "Apprenez les bases et commencez votre voyage",
      href: "/beginner_guide",
      icon: "🎓",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Archétypes",
      description: "Découvrez les différents styles de jeu",
      href: "/archetypes",
      icon: "⚔️",
      color: "from-red-500 to-orange-600",
    },
    {
      title: "Quel jeu choisir ?",
      description: "Trouvez le jeu de combat fait pour vous",
      href: "/choose",
      icon: "🎮",
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-1/3 -right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className={`${orbitron.className} text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 animate-fade-in`}>
              BegiGuide : Guide pour ainsi entrer dans le FGC
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
              Maîtrisez les jeux de combat avec un guide adaptés aux débutants, nos archétypes de stratégie et nos tutoriels détaillés.
            </p>

            <div className="flex gap-4 justify-center flex-col sm:flex-row animate-fade-in animation-delay-400">
              <Link
                href="/beginner_guide"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold text-white transition-all transform hover:scale-105 shadow-lg"
              >
                Commencer
              </Link>
              <Link
                href="/archetypes"
                className="px-8 py-4 border-2 border-purple-400 text-purple-300 hover:bg-purple-400/10 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Explorer les Archétypes
              </Link>
            </div>
          </div>
      </section>

      {/* Categories Grid Section */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Explorez notre contenu
          </h2>
          <p className="text-center text-gray-300 mb-16 text-lg">
            Trouvez exactement ce dont vous avez besoin
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
                <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-2xl p-8 h-full cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-6">
                      {category.description}
                    </p>
                    <div className="inline-block text-purple-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      En savoir plus →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative px-4 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à vous lancer ?
          </h3>
          <p className="text-gray-300 mb-8">
            Rejoignez la FGC et commencez votre voyage dans le monde des jeux de combat dès aujourd'hui. Que vous soyez un débutant ou un joueur expérimenté, nous avons quelque chose pour vous.
          </p>
          <Link
            href="/beginner_guide"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 rounded-lg font-semibold text-white transition-all transform hover:scale-105 shadow-lg"
          >
            Démarrer maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}
