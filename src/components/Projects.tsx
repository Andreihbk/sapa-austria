import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

export default function Projects() {
  const t = useTranslations("Projects");

  const projects = ["p1", "p2", "p3"];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titlu Secțiune */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid Proiecte */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((projectKey, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* PLACEHOLDER PENTRU POZĂ (Cutia gri) */}
              <div className="h-48 bg-gray-300 w-full flex items-center justify-center text-gray-500 font-medium">
                Image Placeholder {index + 1}
              </div>

              {/* Conținut Text */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-2">
                  <MapPin size={16} />
                  <span>{t(`${projectKey}.location`)}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(`${projectKey}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`${projectKey}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}