import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  target?: "_blank";
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks: FooterSection[] = [
    {
      title: "Navigation",
      links: [
        { label: "Accueil", href: "/" },
        { label: "Guide Débutants", href: "/beginner_guide" },
        { label: "Archétypes", href: "/archetypes" },
        { label: "Quel jeux choisir ?", href: "/choose" },
      ],
    },
    {
      title: "Archétypes Classiques",
      links: [
        { label: "Shoto", href: "/archetypes/shoto" },
        { label: "Rushdown", href: "/archetypes/rushdown" },
        { label: "Zoner", href: "/archetypes/zoner" },
        { label: "Grappler", href: "/archetypes/grappler" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { label: "Glossaire par Infil", href: "https://glossary.infil.net/", target: "_blank" },
        { label: "Dustloop(ArcSys)", href: "https://www.dustloop.com/wiki/", target: "_blank" },
        { label: "SuperCombo(Street Fighter)", href: "https://wiki.supercombo.gg/", target: "_blank" },
        { label: "Mizuumi(Autres Jeux de combat)", href: "https://mizuumi.wiki", target: "_blank" },
        { label: "Wavu(Tekken)", href: "https://wavu.wiki/t/Main_Page", target: "_blank" },
        { label: "2XKO", href: "https://wiki.play2xko.com", target: "_blank" },
      ],
    },
    {
      title: "Communauté",
      links: [
        { label: "Street Fighter 6", href: "https://discord.com/invite/streetfighter", target: "_blank" },
        { label: "Fatal Fury", href: "https://twitter.com/CombatHub", target: "_blank" },
        { label: "KOF", href: "https://discord.com/invite/dGRrJFFFPN", target: "_blank" },
        { label: "UNI2", href: "https://discord.com/invite/vG86HET", target: "_blank" },
        { label: "2XKOFrance", href: "https://discord.com/invite/2xkofr", target: "_blank" },
      ],
    }
  ];

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      target={link.target}
                      rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8">
        
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div>
            &copy; {currentYear} BegiGuide.
          </div>
          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-purple-400 transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="#"
              className="hover:text-purple-400 transition-colors"
            >
              Conditions d&apos;utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
