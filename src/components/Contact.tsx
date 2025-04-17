
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { formatCPF, formatPhone, isValidEmail, isValidName, isValidCPF, isValidPhone } from "@/lib/inputMasks";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    let formattedValue = value;
    
    // Apply formatting based on field type
    if (id === "cpf") {
      formattedValue = formatCPF(value);
    } else if (id === "phone") {
      formattedValue = formatPhone(value);
    }
    
    setFormData({
      ...formData,
      [id]: formattedValue,
    });
    
    // Clear error when typing
    if (errors[id as keyof typeof errors]) {
      setErrors({
        ...errors,
        [id]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name ? "Nome é obrigatório" : 
            !isValidName(formData.name) ? "Digite nome e sobrenome" : "",
      
      email: !formData.email ? "E-mail é obrigatório" : 
             !isValidEmail(formData.email) ? "E-mail inválido" : "",
      phone: !formData.phone ? "Telefone é obrigatório" : 
             !isValidPhone(formData.phone) ? "Telefone inválido" : "",
      message: !formData.message ? "Mensagem é obrigatória" : ""
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    // Here you would normally send the data to your backend
    // For now, let's send it via WhatsApp
    const message = `Nova mensagem do site: 
    Nome: ${formData.name} 
    Email: ${formData.email} 
    Telefone: ${formData.phone} 
    Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5541991321173?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em contato
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para ajudar seu negócio a crescer. Entre em contato conosco hoje mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Envie sua mensagem</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Nome completo
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Digite seu nome e sobrenome"
                      className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  {/* <div className="space-y-2">
                    <label htmlFor="cpf" className="block text-sm font-medium">
                      CPF
                    </label>
                    <Input
                      id="cpf"
                      value={formData.cpf}
                      onChange={handleInputChange}
                      placeholder="000.000.000-00"
                      className={`w-full ${errors.cpf ? 'border-red-500' : ''}`}
                    />
                    {errors.cpf && <p className="mt-1 text-sm text-red-500">{errors.cpf}</p>}
                  </div> */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      className={`w-full ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="text"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Como podemos ajudar?"
                    className={`w-full min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                <Button type="submit" className="bg-fgts-800 hover:bg-fgts-50 w-full py-6 h-auto transform transition-transform duration-200 hover:scale-105">
                  Enviar mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Informações de contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-fgts-500 h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">+55 (41) 999132-1173</p>
                    <p className="text-muted-foreground">+55 (41) 3022-7449</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-fgts-500 h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-muted-foreground">contato@viviurkacontabil.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-fgts-500 h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-muted-foreground">
                    Rua Mamoré 875, sobrado 1 - Merçes<br />
                     Curitiba - PR, 81510-570
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-fgts-500 h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Horário de atendimento</p>
                    <p className="text-muted-foreground">
                      Segunda a sexta: 8h às 18h<br />
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <Card className="bg-fgts-50 border-fgts-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Canal de atendimento prioritário</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Para um atendimento mais rápido, entre em contato pelo nosso WhatsApp.
                </p>
                <Button 
                  className="bg-fgts-600 hover:bg-fgts-500 w-full transform transition-transform duration-200 hover:scale-105"
                  onClick={() => {
                    const message = "Olá, gostaria de mais informações sobre a antecipação de FGTS.";
                    window.open(`https://wa.me/5541999631174?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Falar pelo WhatsApp
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
