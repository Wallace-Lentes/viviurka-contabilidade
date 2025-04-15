
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Preencha o formulário",
    description: "Forneça seus dados básicos para simularmos as condições da sua antecipação."
  },
  {
    number: "02",
    title: "Análise dos dados",
    description: "Nossa equipe verifica a disponibilidade do seu FGTS para antecipação."
  },
  {
    number: "03",
    title: "Proposta personalizada",
    description: "Receba uma proposta com condições especiais para o seu perfil."
  },
  {
    number: "04",
    title: "Assinatura digital",
    description: "Assine o contrato digitalmente, sem necessidade de papéis ou deslocamentos."
  },
  {
    number: "05",
    title: "Receba o dinheiro",
    description: "O valor será depositado na sua conta bancária em 30 minutos após a aprovação."
  }
];

const HowItWorks = () => {
  const scrollToSimulation = () => {
    // Scroll to the top where the simulation form is
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    // Focus on the first input field
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
            Como funciona a antecipação do FGTS?
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo simples e descomplicado para você acessar o seu dinheiro
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
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
            Iniciar Processo Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
