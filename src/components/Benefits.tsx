import {
  Banknote,
  Clock,
  ShieldCheck,
  BarChart3,
  Users,
  CreditCard,
} from "lucide-react";

const benefits = [
  {
    icon: (
      <ShieldCheck className="w-10 h-10 p-2 bg-fgts-100 text-fgts-600 rounded-xl" />
    ),
    title: "Atendimento Seguro",
    description:
      "Tratamos seus dados com sigilo e em conformidade com a LGPD. Sua empresa está protegida conosco.",
  },
  {
    icon: (
      <Clock className="w-10 h-10 p-2 bg-fgts-100 text-fgts-600 rounded-xl" />
    ),
    title: "Agilidade no Processo",
    description:
      "Abertura de empresa, regularizações e obrigações feitas com rapidez e eficiência.",
  },
  {
    icon: (
      <BarChart3 className="w-10 h-10 p-2 bg-fgts-100 text-fgts-600 rounded-xl" />
    ),
    title: "Gestão Financeira Estratégica",
    description:
      "Organize o fluxo de caixa, apure impostos corretamente e tenha mais controle sobre sua empresa.",
  },
  {
    icon: (
      <Users className="w-10 h-10 p-2 bg-fgts-100 text-fgts-600 rounded-xl" />
    ),
    title: "Atendimento Humanizado",
    description:
      "Fale com contadores reais, prontos para orientar sua empresa em todas as fases.",
  },
  {
    icon: (
      <CreditCard className="w-10 h-10 p-2 bg-fgts-100 text-fgts-600 rounded-xl" />
    ),
    title: "Economia Fiscal",
    description:
      "Ajudamos a escolher o melhor regime tributário e reduzir encargos desnecessários.",
  },
  {
    icon: (
      <Banknote className="w-10 h-10 p-2 bg-fgts-100 text-fgts-600 rounded-xl" />
    ),
    title: "Regularização Financeira",
    description:
      "Fique em dia com o fisco e evite multas com apoio contábil especializado.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que contar com nossa contabilidade?
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções contábeis completas e pensadas para o crescimento do seu
            negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
