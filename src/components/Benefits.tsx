
import { Banknote, Clock, ShieldCheck, BarChart3, Users, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: <Banknote className="w-10 h-10 p-2 bg-fgts-100 text-fgts-600 rounded-xl" />,
    title: "Dinheiro Rápido",
    description: "Receba o valor da antecipação em até 30 minutos via PIX."
  },
  {
    icon: <Clock className="w-10 h-10 p-2 bg-fgts-100 text-fgts-600 rounded-xl" />,
    title: "Processo Ágil",
    description: "Solicitação 100% online, sem necessidade de deslocamento ou filas de espera."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 p-2 bg-fgts-100 text-fgts-600 rounded-xl" />,
    title: "Segurança Total",
    description: "Todas as informações de nossos clientes são tratadas com máximo de segurança e privacidade. Além disso, contamos com uma estrutura completa para atender às exigências de LGPD."
  },
  {
    icon: <BarChart3 className="w-10 h-10 p-2 bg-fgts-100 text-fgts-600 rounded-xl" />,
    title: "Melhores Taxas",
    description: "Oferecemos taxas competitivas, garantindo o maior valor possível para você."
  },
  {
    icon: <Users className="w-10 h-10 p-2 bg-fgts-100 text-fgts-600 rounded-xl" />,
    title: "Atendimento Dedicado",
    description: "Equipe especializada para tirar suas dúvidas e auxiliar em todo o processo."
  },
  {
    icon: <CreditCard className="w-10 h-10 p-2 bg-fgts-100 text-fgts-600 rounded-xl" />,
    title: "Sem Comprometer Renda",
    description: "A antecipação não compromete sua renda mensal atual, facilitando seu planejamento."
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que antecipar seu FGTS conosco?
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos vantagens exclusivas para que você tenha a melhor experiência 
            na antecipação do seu FGTS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
