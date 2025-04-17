import { Briefcase, FileText, LineChart } from "lucide-react";

const services = [
  {
    icon: <Briefcase className="text-fgts-500 w-6 h-6" />,
    title: "Registro de Empresa",
    description:
      "Assistência completa no processo de registro e documentação da empresa.",
  },
  {
    icon: <FileText className="text-fgts-500 w-6 h-6" />,
    title: "Contabilidade",
    description:
      "Serviços de contabilidade profissionais e relatórios financeiros.",
  },
  {
    icon: <LineChart className="text-fgts-500 w-6 h-6" />,
    title: "Consultoria Financeira",
    description:
      "Conselhos e planejamento financeiro estratégicos para o crescimento da empresa.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-[#fffaf5]">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-fgts-500 font-medium mb-1">Nossos Serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Soluções Completas para Seu Negócio
          </h2>
          <p className="text-muted-foreground text-lg">
            Conte com nossa expertise para impulsionar seus resultados
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href="#perguntas-frequentes"
                className="text-fgts-500 font-medium inline-flex items-center hover:underline"
              >
                Saiba Mais <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
