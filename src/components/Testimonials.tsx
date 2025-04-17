import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    text: "Consegui abrir minha empresa em poucos dias com o suporte da equipe contábil. Tudo foi explicado com clareza e sem complicações. Excelente atendimento!",
    avatar: "CS"
  },
  {
    name: "Márcia Oliveira",
    location: "Rio de Janeiro, RJ",
    text: "Estava perdida com a contabilidade do MEI e eles me ajudaram em tudo. Regularizaram minha situação e hoje consigo emitir notas com tranquilidade.",
    avatar: "MO"
  },
  {
    name: "Roberto Almeida",
    location: "Belo Horizonte, MG",
    text: "Troquei de contador e foi a melhor decisão que tomei. Atendimento rápido, transparente e com foco total no cliente. Recomendo sem dúvidas.",
    avatar: "RA"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título e subtítulo */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg">
          Histórias reais de quem confia na nossa assessoria contábil          </p>
        </div>

        {/* Cards de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md border border-gray-100 text-center p-6">
              <CardContent className="flex flex-col items-center">
                <Avatar className="mb-4">
                  <AvatarFallback className="bg-fgts-500 text-white">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500 text-sm mb-4">{testimonial.location}</p>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Card CTA (Pronto para começar?) */}
        <div className="max-w-8xl mx-auto text-center bg-fgts-500 rounded-2xl shadow-lg p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-white text-lg mb-6">
            Conte com nós para ajuadar a tomar seu negócio ao próximo nível.
          </p>
          <Button className="bg-white hover:bg-fgts-50 text-orange-700 px-6 py-3 text-base rounded-full"
           onClick={() => {
            const message = "Olá, gostaria de agendar um consultoria.";
            window.open(`https://wa.me/5541991321173?text=${encodeURIComponent(message)}`, '_blank');
          }}
          >
            Agendar consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
