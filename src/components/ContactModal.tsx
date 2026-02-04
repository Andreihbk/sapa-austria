"use client";

import { useTranslations } from "next-intl";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const t = useTranslations("Contact");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
        
        {/* Buton Inchidere */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{t("title")}</h2>
          <p className="text-gray-600 mb-6">{t("subtitle")}</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{t("name")}</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{t("email")}</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{t("message")}</label>
              <textarea rows={4} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"></textarea>
            </div>
            
            {/* TODO: Implementează logica de trimitere email (ex: Formspree sau Nodemailer) */}
            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition shadow-lg">
              {t("send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}