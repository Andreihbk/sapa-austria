import { useTranslations } from "next-intl";
import { Link } from "../i18n/routing";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative bg-blue-900 py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      {/* Background abstract (poți pune o imagine aici mai târziu) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-90 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          {t("title")}
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        
        <div className="flex justify-center gap-4">
          <Link 
            href="/contact" 
            className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-lg"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}