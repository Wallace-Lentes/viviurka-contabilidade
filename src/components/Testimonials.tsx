
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    text: "Precisava de dinheiro para uma emergência médica e a antecipação do FGTS foi a solução perfeita. Processo rápido, sem burocracia e com atendimento excelente.",
    avatar: "CS"
  },
  {
    name: "Márcia Oliveira",
    location: "Rio de Janeiro, RJ",
    text: "Consegui antecipar meu FGTS para quitar dívidas que estavam me tirando o sono. A taxa foi muito menor do que outros empréstimos que pesquisei. Recomendo!",
    avatar: "MO"
  },
  {
    name: "Roberto Almeida",
    location: "Belo Horizonte, MG",
    text: "Fiz a simulação online, recebi uma ligação no mesmo dia e em alguns minutos o dinheiro estava na minha conta. Equipe muito atenciosa e processo transparente.",
    avatar: "RA"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-white/80 text-lg">
            Histórias reais de pessoas que anteciparam seu FGTS conosco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-fgts-300 text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-white/70 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="italic text-white/90">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
