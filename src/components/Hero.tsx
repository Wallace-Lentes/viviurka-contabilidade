
import { useState } from "react";
import { ArrowDown, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCPF, formatPhone, isValidName, isValidCPF, isValidPhone } from "@/lib/inputMasks";

const Hero = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    cpf: "",
    phone: "",
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      cpf: !formData.cpf ? "CPF é obrigatório" : 
           !isValidCPF(formData.cpf) ? "CPF inválido" : "",
      phone: !formData.phone ? "Telefone é obrigatório" : 
             !isValidPhone(formData.phone) ? "Telefone inválido" : "",
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };
  
  const handleSimulateClick = () => {
    // Focus on the first field of the form
    setFocusedField("name");
    const nameInput = document.getElementById("name");
    if (nameInput) {
      nameInput.focus();
    }
  };

  const scrollToHowItWorks = () => {
    const section = document.getElementById("como-funciona");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmitSimulation = () => {
    if (!validateForm()) return;
    
    // Open WhatsApp with simulation information
    const message = `Olá, gostaria de simular o valor da antecipação do meu FGTS. Nome: ${formData.name}, CPF: ${formData.cpf}, Telefone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/5541991321173?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-[12rem] md:pb-24 bg-fgts-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            {/* <div className="bg-white/10 text-black inline-block px-4 py-2 rounded-full text-sm font-medium mb-6">
              Processo 100% digital e seguro
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Contabilidade Digital Especializada para seu negocio
            </h1>
            <p className="text-black/90 text-lg md:text-xl mb-8">
              Simplificamos sua gestão contábil com soluções digitais completas. Conte com especialistas para cuidar das suas finanças enquanto você foca no crescimento do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <Button 
                className="bg-fgts-500 text-white text-base hover:bg-fgts-50 flex items-center justify-center gap-2" 
                size="lg"
                onClick={handleSimulateClick}
              >
                Solicitar proposta <ArrowDown size={18} />
              </Button>
              <Button 
                variant="outline" 
                className="bg-fgts-600 text-orange-700 border-orange-700 hover:bg-fgts-50 text-base" 
                size="lg"
                onClick={scrollToHowItWorks}
              >
                Saiba Mais
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-center text-center">
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-accent-orange" size={20} />
                <span className="text-black">Primeira Consulta Grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-accent-orange" size={20} />
                <span className="text-black">100% Seguro</span>
              </div>
              {/* <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-accent-green" size={20} />
                <span className="text-white">Sem consulta ao SPC/Serasa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-accent-green" size={20} />
                <span className="text-white">Atendimento personalizado</span>
              </div> */}
            </div>
          </div>
          
          {/* <div className="relative">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl md:ml-10 animate-float">
              <h3 className="text-fgts-700 font-bold text-xl mb-6 text-center">
                Simulação Rápida
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoFocus={focusedField === "name"}
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-fgts-400 focus:border-fgts-400`}
                    placeholder="Digite seu nome e sobrenome"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CPF
                  </label>
                  <input
                    id="cpf"
                    type="text"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    autoFocus={focusedField === "cpf"}
                    className={`w-full px-4 py-3 border ${errors.cpf ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-fgts-400 focus:border-fgts-400`}
                    placeholder="000.000.000-00"
                  />
                  {errors.cpf && <p className="mt-1 text-sm text-red-500">{errors.cpf}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleInputChange}
                    autoFocus={focusedField === "phone"}
                    className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-fgts-400 focus:border-fgts-400`}
                    placeholder="(00) 00000-0000"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>
                <Button 
                  className="w-full bg-fgts-500 hover:bg-fgts-600 py-6 text-base font-semibold"
                  onClick={handleSubmitSimulation}
                >
                  Simular Meu Valor
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Dados protegidos conforme Lei Geral de Proteção de Dados (LGPD)
                </p>
              </div>
            </div>            
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
