"use client";

import { useState } from "react";
import { usePathname, useRouter } from "../i18n/routing"; 
import { useTranslations } from "next-intl";
import { Menu, X, Phone } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  
  // Starea pentru Modalul de Contact
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    // @ts-ignore
    router.replace(pathname, { locale: lang });
  };
  const handleContactClick = () => {
    setIsModalOpen(true);
    setIsOpen(false); // Închidem meniul de mobil dacă e deschis
    // Folosim history.pushState ca să schimbăm URL-ul vizual fără să dăm scroll aiurea
    window.history.pushState(null, "", "#contact");
  };
  const navLinks = [
    { name: t("home"), href: "#top" },       // Va urca sus la Hero
    { name: t("services"), href: "#services" }, // Va coborî la Servicii
    { name: t("projects"), href: "#projects" }, // Va coborî la Proiecte
  ];

  // Funcție ajutătoare pentru mobil (închide meniul când dai click pe un link)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* LOGO - Dă scroll sus de tot */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#top" className="text-2xl font-bold text-blue-900">
                SAPA<span className="text-blue-600">AUSTRIA</span>
              </a>
            </div>

            {/* MENIU DESKTOP */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              
              {/* 2. Butonul Contact Special (Deschide Modalul) */}
              <button 
                onClick={handleContactClick}
                className="text-gray-700 hover:text-blue-600 font-medium transition cursor-pointer"
              >
                {t("contact")}
              </button>

              {/* Language Switcher */}
              <div className="flex items-center space-x-2 border-l pl-4 border-gray-300">
                <button onClick={() => changeLanguage('de')} className="hover:text-blue-600 font-bold">DE</button>
                <span>|</span>
                <button onClick={() => changeLanguage('en')} className="hover:text-blue-600 font-bold">EN</button>
                <span>|</span>
                <button onClick={() => changeLanguage('ro')} className="hover:text-blue-600 font-bold text-sm">RO</button>
              </div>

              {/* 4. Buton Telefon Corectat */}
              <a href="tel:+436642437592" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                <Phone size={18} />
                <span>+43 664 2437592</span>
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
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={handleLinkClick} // Închide meniul după click
                >
                  {link.name}
                </a>
              ))}
              
              {/* Buton Contact Mobil */}
              <button
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={handleContactClick}
              >
                {t("contact")}
              </button>

               <div className="flex gap-4 px-3 py-2 font-bold text-blue-900 mt-2 border-t pt-2">
                  <button onClick={() => changeLanguage('de')}>DE</button>
                  <button onClick={() => changeLanguage('en')}>EN</button>
                  <button onClick={() => changeLanguage('ro')}>RO</button>
               </div>
            </div>
          </div>
        )}
      </nav>

      {/* 3. Aici randăm Modalul, în afara <nav>-ului, dar în return */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}