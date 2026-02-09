import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

export default function Projects() {
  const t = useTranslations("Projects");

  // Definim imaginile pentru fiecare proiect (Stock Photos)
  const projectsData = [
    {
      key: "p1", // Einfamilienhaus (Casă)
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      key: "p2", // Logistikhalle (Hală)
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      key: "p3", // Wohnanlage (Bloc)
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
    }
  ];

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
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* IMAGINE REALĂ */}
              <div className="h-56 w-full overflow-hidden relative">
                <img 
                  src={project.img} 
                  alt="Project reference" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                {/* Overlay fin la hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
              </div>

              {/* Conținut Text */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-2">
                  <MapPin size={16} />
                  <span>{t(`${project.key}.location`)}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(`${project.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`${project.key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}