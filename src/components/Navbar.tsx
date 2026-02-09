"use client";

import { useState } from "react";
// 1. ADD 'Link' to the imports here
import { usePathname, useRouter, Link } from "../i18n/routing"; 
import { useTranslations } from "next-intl";
import { Menu, X, Phone } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const pathname = usePathname();
  // We don't strictly need router or changeLanguage anymore for the flags
  // const router = useRouter(); 

  const handleContactClick = () => {
    setIsModalOpen(true);
    setIsOpen(false); 
    window.history.pushState(null, "", "#contact");
  };

  const navLinks = [
    { name: t("home"), href: "#top" },       
    { name: t("services"), href: "#services" }, 
    { name: t("projects"), href: "#projects" }, 
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            <div className="flex-shrink-0 flex items-center">
              <a href="#top" className="text-2xl font-bold text-blue-900">
                SAPA<span className="text-blue-600">AUSTRIA</span>
              </a>
            </div>

            {/* DESKTOP MENU */}
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
              
              <button 
                onClick={handleContactClick}
                className="text-gray-700 hover:text-blue-600 font-medium transition cursor-pointer"
              >
                {t("contact")}
              </button>

              {/* FIXED LANGUAGE SWITCHER 
                  Using Link ensures /en is replaced by /ro, instead of appended 
              */}
              <div className="flex items-center space-x-2 border-l pl-4 border-gray-300">
                <Link href={pathname} locale="de" className="hover:text-blue-600 font-bold cursor-pointer">
                  DE
                </Link>
                <span>|</span>
                <Link href={pathname} locale="en" className="hover:text-blue-600 font-bold cursor-pointer">
                  EN
                </Link>
                <span>|</span>
                <Link href={pathname} locale="ro" className="hover:text-blue-600 font-bold text-sm cursor-pointer">
                  RO
                </Link>
              </div>

              <a href="tel:+436642437592" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                <Phone size={18} />
                <span>+43 664 2437592</span>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              ))}
              
              <button
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={handleContactClick}
              >
                {t("contact")}
              </button>

               {/* MOBILE LANGUAGE SWITCHER - FIXED */}
               <div className="flex gap-4 px-3 py-2 font-bold text-blue-900 mt-2 border-t pt-2">
                  <Link href={pathname} locale="de">DE</Link>
                  <Link href={pathname} locale="en">EN</Link>
                  <Link href={pathname} locale="ro">RO</Link>
               </div>
            </div>
          </div>
        )}
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}