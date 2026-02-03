import { useTranslations } from "next-intl";
import { Layers, Cuboid } from "lucide-react"; 

export default function Services() {
  const t = useTranslations("Services");

  const services = [
    {
      icon: <Layers size={48} className="text-blue-600" />, // Am marit putin iconita
      titleKey: "screed", // Șapă lichidă
    },
    {
      icon: <Cuboid size={48} className="text-blue-600" />,
      titleKey: "cement", // Șapă ciment (Industrială)
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Secțiune */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid Carduri - Acum doar 2 elemente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="mb-6 bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t(`${service.titleKey}.title`)}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t(`${service.titleKey}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}