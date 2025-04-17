import { ShieldCheck } from "lucide-react";

const Trust = () => {
  return (
    <section className="py-10 bg-[#fffaf5] border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-fgts-500 h-8 w-8" />
            <div>
              <p className="font-semibold">Atendimento Contábil Confiável</p>
              <p className="text-sm text-muted-foreground">
                Sigilo e proteção de dados conforme a LGPD
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          <div className="flex items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#0080e6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <p className="font-semibold">Contadores Registrados no CRC</p>
              <p className="text-sm text-muted-foreground">
                Atuação ética e regulamentada
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          <div className="flex items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 10.5L11 12.5L15 8.5M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
                stroke="#0080e6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <p className="font-semibold">Mais de 5 mil empresas atendidas</p>
              <p className="text-sm text-muted-foreground">
                Expertise em diversos setores do mercado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
