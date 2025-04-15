
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é a antecipação do saque-aniversário do FGTS?",
    answer: "A antecipação do saque-aniversário é um empréstimo que utiliza como garantia os valores futuros do saque-aniversário do FGTS. Você recebe antecipadamente o valor referente a até 10 anos do seu saque-aniversário"
  },
  {
    question: "Quem pode solicitar a antecipação do saque-aniversário?",
    answer: "Trabalhadores que possuam saldo no FGTS e que já optaram pela modalidade saque-aniversário."
  },
  // {
  //   question: "Como faço para aderir ao saque-aniversário?",
  //   answer: "A adesão pode ser feita pelo aplicativo do FGTS, site da Caixa, ou em uma agência da Caixa Econômica Federal. Após a adesão, é necessário aguardar o prazo estabelecido para solicitar a antecipação."
  // },
  {
    question: "Qual é o valor máximo que posso antecipar?",
    answer: "O valor máximo depende do seu saldo no FGTS e pode corresponder a até 10 anos de saque-aniversário. Nossa equipe realizará uma análise personalizada para informar o valor disponível para você."
  },
  {
    question: "A antecipação do FGTS afeta meu limite de crédito?",
    answer: "Não, a antecipação do saque-aniversário do FGTS não compromete seu limite de crédito em outras operações, pois utiliza como garantia os recursos do próprio FGTS."
  },
  {
    question: "É necessário ter nome limpo para solicitar a antecipação?",
    answer: "Não é necessário ter o nome limpo, pois a operação utiliza como garantia os recursos do FGTS. Mesmo com restrições no CPF, é possível solicitar a antecipação do saque-aniversário."
  },
  // {
  //   question: "Posso sacar todo o meu FGTS se solicitar a antecipação?",
  //   answer: "Ao optar pelo saque-aniversário e solicitar a antecipação, você não poderá sacar o saldo total do FGTS em caso de demissão sem justa causa, apenas a multa rescisória de 40%. Esta restrição permanece por 24 meses após a antecipação."
  // },
  // {
  //   question: "Quais documentos são necessários para solicitar?",
  //   answer: "São necessários RG, CPF, comprovante de residência atualizado e dados bancários. Todo o processo é digital, sem necessidade de envio de documentos físicos."
  // }
];

const FAQ = () => {
  return (
    <section id="perguntas-frequentes" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Encontre respostas para as perguntas mais comuns sobre a antecipação do seu FGTS
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
