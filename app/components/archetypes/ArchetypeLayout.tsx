import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

/**
 * Coquille commune à toutes les pages de détail d'un archétype :
 * même conteneur, même taille/police de titre, même couleur de texte.
 * Garantit que toutes les pages (Shoto, Grappler, Zoner, ...) se présentent
 * de la même façon, même si leur contenu diffère.
 */
export default function ArchetypeLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-8">
          <h1 className={`${roboto.className} text-5xl font-extrabold text-white tracking-tight`}>
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-white/60 uppercase tracking-wide text-sm">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
