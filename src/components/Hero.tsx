"use client"; 

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="top" className="relative py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden min-h-[600px] flex items-center justify-center">
      
      {/* 1. VIDEO DE FUNDAL  */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline // Important iPhone/Android
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 2. OVERLAY  */}
        <div className="absolute inset-0 bg-blue-950/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 3. CONȚINUTUL i18n */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
          {t("title")}
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
          {t("subtitle")}
        </p>
        
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => {
             
              const buttons = Array.from(document.querySelectorAll('nav button'));
              const contactBtn = buttons.find(b => 
                b.textContent?.includes('Contact') || 
                b.textContent?.includes('Kontakt') ||
                b.textContent?.includes('Contact Us')
              );
              
              if (contactBtn) {
                  (contactBtn as HTMLButtonElement).click();
              } else {
               
                  window.history.pushState(null, "", "#contact");
              }
            }}
            className="bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition shadow-xl transform hover:scale-105"
          >
            {t("cta")}
          </button>
        </div>
      </div>
    </section>
  );
}