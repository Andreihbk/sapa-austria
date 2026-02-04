"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const t = useTranslations("Footer");
  const navT = useTranslations("Navbar"); // Refolosim traducerile de la meniu
  
  // Starea pentru Modalul propriu al Footer-ului
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funcția care deschide modalul și actualizează URL-ul
  const handleContactClick = () => {
    setIsModalOpen(true);
    window.history.pushState(null, "", "#contact");
  };

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Coloana 1: Brand și Descriere */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                SAPA<span className="text-blue-500">AUSTRIA</span>
              </h3>
              <p className="text-gray-400 max-w-xs">
                {t("aboutDesc")}
              </p>
            </div>

            {/* Coloana 2: Linkuri Rapide (Acum cu Scroll) */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">{t("links")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#top" className="hover:text-blue-500 transition cursor-pointer">
                    {navT("home")}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-500 transition cursor-pointer">
                    {navT("services")}
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-500 transition cursor-pointer">
                    {navT("projects")}
                  </a>
                </li>
                <li>
                  {/* Buton Contact care deschide Modalul */}
                  <button 
                    onClick={handleContactClick}
                    className="hover:text-blue-500 transition cursor-pointer text-left"
                  >
                    {navT("contact")}
                  </button>
                </li>
              </ul>
            </div>

            {/* Coloana 3: Contact */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">{t("contact")}</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-500" />
                  {/* TODO: Cere numarul de telefon real al unchiului si inlocuieste mai jos */}
                  <a href="tel:+436642437592" className="hover:text-white transition">+43 664 2437592</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-500" />
                  {/* TODO: Creeaza o adresa de email profesionala si pune-o aici */}
                  <a href="mailto:office@sapa-austria.at" className="hover:text-white transition">office@sapa-austria.at</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-blue-500" />
                  {/* TODO: Verifica adresa sediului social din Austria */}
                  <span>Wien, Austria</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Sapa Austria. {t("rights")}</p>
          </div>
        </div>
      </footer>

      {/* Randăm Modalul și aici, pentru a putea fi deschis din Footer */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}