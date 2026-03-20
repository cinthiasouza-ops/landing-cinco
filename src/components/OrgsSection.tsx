import Image from "next/image";

const orgs = [
  {
    image: "/images/org-pharma-708f63.png",
    title: "Indústria farmacêutica",
    description:
      "Programas de suporte e acompanhamento para pacientes em uso de medicamentos cardiometabólicos.",
  },
  {
    image: "/images/org-health-43cdba.png",
    title: "Planos e Operadoras de Saúde",
    description:
      "Gestão de crônicos e prevenção de riscos em populações de alto custo.",
  },
  {
    image: "/images/org-govt.png",
    title: "Governo",
    description:
      "Apoio ao diagnóstico precoce, monitoramento de hipertensos e diabéticos, campanhas de saúde digital.",
  },
  {
    image: "/images/org-companies-3f2ebb.png",
    title: "Empresas",
    description:
      "Programas de bem-estar para colaboradores e prevenção de riscos cardiometabólicos.",
  },
  {
    image: "/images/org-people.png",
    title: "Pessoas",
    description:
      "Acompanhamento leve e acessível via WhatsApp, integrado a smartwatches comuns.",
  },
];

export default function OrgsSection() {
  return (
    <section id="para-quem" className="overflow-hidden bg-white py-16 md:py-[72px]">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col gap-4 px-7 pb-12 md:px-14 lg:px-28">
          <h2 className="text-[26px] font-bold leading-[1.133] text-cinza-01 md:text-[30px]">
            Para Organizações
          </h2>
          <p className="text-[15px] font-medium leading-[1.5] text-cinza-03 md:text-[16px]">
            Conheça todos nossos segmentos de atuação
          </p>
        </div>

        {/* Scrollable cards row — bleeds to the right on desktop */}
        <div className="scrollbar-hide flex gap-8 overflow-x-auto px-7 pb-4 md:px-14 lg:px-28">
          {orgs.map((org) => (
            <article
              key={org.title}
              className="shadow-card flex w-[300px] shrink-0 flex-col justify-between gap-5 rounded-[40px] border border-cinza-09 bg-white p-5 transition-transform duration-300 hover:-translate-y-1 sm:w-[340px] md:w-[384px]"
            >
              {/* Photo */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-[20px] md:h-[393px]">
                <Image
                  src={org.image}
                  alt={org.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 300px, 384px"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-5">
                <h3 className="text-[20px] font-bold leading-[1.3] text-cinza-01 md:text-[24px]">
                  {org.title}
                </h3>
                <p className="text-[13px] font-medium leading-[1.4] text-cinza-03 md:text-[14px]">
                  {org.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
