import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Preencha o formulário",
    description:
      "Informe seus dados básicos e os da sua futura empresa para iniciarmos o processo.",
  },
  {
    number: "02",
    title: "Análise e Planejamento",
    description:
      "Nossa equipe analisa o melhor regime tributário e o tipo de empresa ideal para você.",
  },
  {
    number: "03",
    title: "Envio de Documentos",
    description:
      "Você envia os documentos necessários de forma digital, sem complicações.",
  },
  {
    number: "04",
    title: "Registro e Legalização",
    description:
      "Cuidamos do registro na Junta Comercial, obtenção do CNPJ, alvarás e demais licenças.",
  },
  {
    number: "05",
    title: "Empresa Pronta para Atuar",
    description:
      "Você recebe tudo pronto para começar a emitir notas fiscais e movimentar sua empresa legalmente.",
  },
];

const HowItWorks = () => {
  const scrollToSimulation = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      const nameInput = document.getElementById("name");
      if (nameInput) {
        nameInput.focus();
      }
    }, 800);
  };

  return (
    <section id="como-funciona" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona a abertura da sua empresa?
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo simples, rápido e guiado por profissionais contábeis
            experientes
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex mb-8 last:mb-0">
              <div className="mr-6 relative">
                <div className="w-12 h-12 rounded-full bg-fgts-500 text-white flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-12 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-fgts-500 to-fgts-100"></div>
                )}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-fgts-500 hover:bg-fgts-600 text-lg px-8 py-6 h-auto"
            onClick={scrollToSimulation}
          >
            Abrir minha empresa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
