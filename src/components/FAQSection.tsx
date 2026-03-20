"use client";

import { useState } from "react";

const faqs = [
  {
    question: "O que é a CINCO?",
    answer:
      "A CINCO é uma plataforma de cuidados digitais em saúde cardiometabólica. Combinamos dispositivos médicos homologados, inteligência artificial (a CintIA) via WhatsApp e suporte remoto para transformar dados em cuidado prático e personalizado.",
  },
  {
    question: "Como a CINCO funciona?",
    answer:
      "A CINCO funciona de forma muito simples: você recebe um kit com dispositivos de saúde, conecta ao nosso sistema e passa a receber orientações personalizadas da CintIA diretamente no seu WhatsApp. Você não precisa baixar nenhum app complicado.",
  },
  {
    question: "A CINCO é um serviço de emergência?",
    answer:
      "Não. A CINCO é um serviço de monitoramento contínuo e cuidado preventivo. Em caso de emergência médica, ligue imediatamente para o SAMU (192) ou dirija-se ao pronto-socorro mais próximo.",
  },
  {
    question: "O que está incluso na experiência CINCO?",
    answer:
      "A experiência CINCO inclui dispositivos médicos homologados (balança de bioimpedância, smartwatch exclusivo e, dependendo do plano, tensiômetro e glicosímetro), acesso à CintIA (coach de IA via WhatsApp), conexão com apps de saúde e relatórios automatizados.",
  },
  {
    question: "Não tenho empresa, posso contratar a CINCO?",
    answer:
      "Sim! A CINCO tem planos tanto para pessoas físicas (B2C) quanto para organizações (B2B). Nossa solução é acessível e foi pensada para funcionar para qualquer pessoa que queira cuidar melhor da sua saúde cardiometabólica.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="perguntas" className="bg-white py-16 md:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-7 md:px-14 lg:px-28">
        {/* Header */}
        <h2 className="mb-12 text-[26px] font-bold leading-[1.2] text-primary md:text-[30px]">
          FAQs
          <br />
          <span className="text-cinza-01">Alguma dúvida?</span>
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-lg border-t-2 border-divider transition-colors duration-200 ${
                  isOpen ? "bg-bg-light" : "bg-white"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] font-bold leading-[1.5] text-cinza-02 md:text-[20px]">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                {/* Answer panel */}
                <div
                  style={{ maxHeight: isOpen ? "600px" : "0" }}
                  className="accordion-content"
                >
                  <p className="px-5 pb-5 text-[15px] font-medium leading-[1.6] text-cinza-03 md:text-[16px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
