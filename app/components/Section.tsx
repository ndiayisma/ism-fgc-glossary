import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

/**
 * Bloc de contenu générique utilisé sur les pages "About" et "Guide Débutant" :
 * carte translucide + titre avec un petit accent dégradé, cohérent avec
 * l'identité violet/rose utilisée sur l'accueil.
 */
export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-colors"
    >
      <h2 className={`${roboto.className} flex items-center gap-3 text-2xl font-bold text-white tracking-tight mb-4`}>
        <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" aria-hidden="true" />
        {title}
      </h2>
      {children}
    </section>
  );
}
