'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: '/', label: 'Accueil' },
    {
      href: '/archetypes',
      label: 'Archétypes',
      subItems: [
        { href: '/archetypes/shoto', label: 'Shoto' },
        { href: '/archetypes/zoner', label: 'Zoner' },
        { href: '/archetypes/rushdown', label: 'Rushdown' },
        { href: '/archetypes/grappler', label: 'Grappler' },
      ],
    },
    { href: '/about', label: 'Quel jeu choisir ?' },
  ];

  // 1. Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // 2. Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-white hover:text-purple-300 transition-colors">
              BegiGuide
            </Link>

            {/* Desktop nav */}
            <div className="hidden sm:flex items-center gap-8">
              {navItems.map((item) =>
                item.subItems ? (
                  // 3. Dropdown: works on hover AND click (touch-friendly)
                  <div key={item.href} className="relative group" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`${
                        pathname.startsWith(item.href)
                          ? 'border-purple-400 text-white'
                          : 'border-transparent text-white/60 hover:border-white/30 hover:text-white'
                      } inline-flex items-center gap-1 px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 h-16`}
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          dropdownOpen ? 'rotate-180' : ''
                        } group-hover:rotate-180`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown: visible on hover OR when clicked open */}
                    <div
                      className={`absolute left-0 top-full w-48 bg-[#1a0a2e] rounded-md shadow-lg border border-white/10 z-10
                        transition-all duration-200
                        ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      `}
                    >
                      <div className="py-1">
                        {/* Link to the parent page too */}
                        <Link
                          href={item.href}
                          className={`${
                            pathname === item.href ? 'bg-purple-500/20 text-purple-300' : 'text-white/70 hover:bg-white/10'
                          } block px-4 py-2 text-sm font-medium transition-colors duration-200`}
                        >
                          Tous les archétypes
                        </Link>
                        <div className="border-t border-white/10 my-1" />
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`${
                              pathname === subItem.href
                                ? 'bg-purple-500/20 text-purple-300'
                                : 'text-white/70 hover:bg-white/10'
                            } block px-4 py-2 text-sm transition-colors duration-200`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? 'border-purple-400 text-white'
                        : 'border-transparent text-white/60 hover:border-white/30 hover:text-white'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 h-16`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile menu with slide animation via grid-rows trick */}
      <div
        className={`sm:hidden border-t border-white/10 overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out grid ${
          mobileMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
        id="mobile-menu"
      >
        <div className="min-h-0">
          <div className="pt-2 pb-3">
            {navItems.map((item) => (
              <MobileNavItem key={item.href} item={item} pathname={pathname} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// 5. Separate mobile nav item with collapsible sub-menu (accordion)
function MobileNavItem({
  item,
  pathname,
}: {
  item: { href: string; label: string; subItems?: { href: string; label: string }[] };
  pathname: string;
}) {
  const [open, setOpen] = useState(() => pathname.startsWith(item.href) && item.href !== '/');

  const isActive = pathname === item.href || (pathname.startsWith(item.href + '/') && item.href !== '/');

  return (
    <div>
      {item.subItems ? (
        <>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`${
              isActive
                ? 'bg-purple-500/10 border-purple-400 text-purple-300'
                : 'border-transparent text-white/60 hover:bg-white/5 hover:border-white/20 hover:text-white'
            } w-full flex items-center justify-between pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors`}
          >
            {item.label}
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {/* Animated accordion sub-menu */}
          <div
            className={`overflow-hidden transition-[grid-template-rows] duration-200 ease-in-out grid ${
              open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="min-h-0">
              <Link
                href={item.href}
                className={`${
                  pathname === item.href ? 'text-purple-300 bg-purple-500/10' : 'text-white/60 hover:text-white hover:bg-white/5'
                } block pl-8 pr-4 py-2 text-sm font-medium transition-colors`}
              >
                Tous les archétypes
              </Link>
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={`${
                    pathname === subItem.href
                      ? 'text-purple-300 bg-purple-500/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  } block pl-8 pr-4 py-2 text-sm font-medium transition-colors`}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Link
          href={item.href}
          className={`${
            isActive
              ? 'bg-purple-500/10 border-purple-400 text-purple-300'
              : 'border-transparent text-white/60 hover:bg-white/5 hover:border-white/20 hover:text-white'
          } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors`}
        >
          {item.label}
        </Link>
      )}
    </div>
  );
}

export default Navbar;
