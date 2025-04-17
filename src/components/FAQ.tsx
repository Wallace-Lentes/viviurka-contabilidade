import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = {
  MEI: [
    {
      question: "Quais são os benefícios de ser MEI?",
      answer:
        "Você tem CNPJ, pode emitir nota fiscal, pagar tributos simplificados com valor fixo mensal e tem acesso a benefícios como aposentadoria e auxílio-doença.",
    },
    {
      question: "Quais impostos um MEI paga?",
      answer:
        "O MEI paga uma única guia mensal (DAS), que inclui INSS e, dependendo da atividade, ISS ou ICMS. O valor gira em torno de R$ 70 a R$ 80.",
    },
    {
      question: "Quem pode ser MEI?",
      answer:
        "Pessoas que faturam até R$ 81 mil por ano, não participam como sócios de outra empresa e exercem atividades permitidas pela categoria.",
    },
    {
      question: "Posso contratar funcionários sendo MEI?",
      answer:
        "Sim, o MEI pode contratar até 1 funcionário com salário mínimo ou piso da categoria.",
    },
  ],
  Abertura: [
    {
      question: "O que é necessário para abrir uma empresa?",
      answer:
        "É necessário definir a atividade, nome da empresa, endereço, tipo societário, e providenciar registros na Junta Comercial, Receita Federal (CNPJ), prefeitura e, se necessário, vigilância sanitária ou órgãos específicos.",
    },
    {
      question: "Qual a diferença entre MEI, ME e LTDA?",
      answer:
        "O MEI é para negócios muito pequenos. ME (Microempresa) é para quem fatura até R$ 360 mil/ano. LTDA é o tipo de empresa com sócios, podendo ser ME ou EPP dependendo do faturamento.",
    },
  ],
  Gestao: [
    {
      question: "Como trocar de contador?",
      answer:
        "Você pode contratar um novo contador a qualquer momento. Ele solicitará os documentos ao contador anterior e assumirá a contabilidade da sua empresa sem complicações.",
    },
    {
      question: "O que um contador faz pela minha empresa?",
      answer:
        "Cuidar da parte fiscal, tributária, folha de pagamento, envio de obrigações ao governo e orientar sobre decisões estratégicas, além de manter sua empresa regularizada.",
    },
    {
      question: "Preciso de contador sendo MEI?",
      answer:
        "Não é obrigatório, mas é altamente recomendado para evitar erros em declarações, obrigações ou para migrar para outro regime empresarial no futuro.",
    },
  ],
  Tributacao: [
    {
      question: "O que é o Simples Nacional?",
      answer:
        "É um regime tributário simplificado para micro e pequenas empresas. Reúne vários impostos em uma única guia e tem alíquotas reduzidas, variando conforme a atividade e faturamento.",
    },
    {
      question: "Como saber se estou pagando impostos corretamente?",
      answer:
        "Com o acompanhamento de um contador. Ele verifica o regime tributário ideal, envia obrigações e calcula corretamente os tributos devidos mensalmente.",
    },
  ],
};

const FAQ = () => {
  return (
    <section id="perguntas-frequentes" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Encontre respostas para as dúvidas mais comuns sobre contabilidade, MEI e abertura de empresas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {Object.entries(faqs).map(([category, questions]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 capitalize">{category === "Gestao" ? "Gestão Contábil" : category}</h3>
              <Accordion type="single" collapsible className="w-full">
                {questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${category}-${index}`}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
