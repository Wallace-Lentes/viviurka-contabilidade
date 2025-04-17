
import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = "Olá, gostaria de mais informações sobre serviços contábeis.";
    window.open(`https://wa.me/5541991321173?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={openWhatsApp}
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Atendimento via WhatsApp</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default WhatsAppButton;
