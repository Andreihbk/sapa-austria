"use client";

import { useState } from "react";
import { Link, usePathname, useRouter } from "../i18n/routing";
import { useTranslations } from "next-intl";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Funcție simplă pentru schimbarea limbii
  const changeLanguage = (lang: string) => {
    // @ts-ignore (Next-intl are un tip complex aici, ignorăm eroarea de TS temporar pentru simplitate)
    router.replace(pathname, { locale: lang });
  };

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("services"), href: "/services" },
    { name: t("projects"), href: "/projects" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              SAPA<span className="text-blue-600">AUSTRIA</span>
            </Link>
          </div>

          {/* MENIU DESKTOP */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {link.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l pl-4 border-gray-300">
              <button onClick={() => changeLanguage('de')} className="hover:text-blue-600 font-bold">DE</button>
              <span>|</span>
              <button onClick={() => changeLanguage('en')} className="hover:text-blue-600 font-bold">EN</button>
            </div>

            {/* Buton Telefon */}
            <a href="tel:+43000000000" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              <Phone size={18} />
              <span>+43 664 2437592</span>
            </a>
          </div>

          {/* BUTON MENIU MOBIL */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENIU MOBIL (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <div className="flex gap-4 px-3 py-2 font-bold text-blue-900">
                <button onClick={() => changeLanguage('de')}>DE</button>
                <button onClick={() => changeLanguage('en')}>EN</button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
}