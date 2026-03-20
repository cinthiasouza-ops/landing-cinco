import Link from "next/link";

const plans = [
  {
    badge: "LANÇAMENTO",
    badgeVariant: "launch" as const,
    name: "Programa\nVida Inteligente",
    description:
      "Conecta você ao seu corpo. Tudo em tempo real, transformando dados em cuidado diário com apoio da nossa IA no WhatsApp.",
    items: [
      "Balança de bioimpedância",
      "Smartwatch exclusivo",
      "Coach de saúde IA - app",
      "Conexão com apps de saúde",
      "Relatórios automatizados",
    ],
    featured: true,
  },
  {
    badge: "EM BREVE",
    badgeVariant: "soon" as const,
    name: "Programa\nVida Sem Picos",
    description:
      "Pré-diabetes e Diabetes. Ideal para quem inicia o cuidado glicêmico; captura glicemia e composição corporal automaticamente.",
    items: [
      "Glicosímetro",
      "Balança de bioimpedância",
      "Smartwatch exclusivo",
      "Coach de saúde IA - app",
      "Conexão com apps de saúde",
      "Relatórios automatizados",
    ],
    featured: false,
  },
  {
    badge: "EM BREVE",
    badgeVariant: "soon" as const,
    name: "Programa\nCoração em Equilíbrio",
    description:
      "Hipertensão arterial. Monitora pressão arterial e peso com simplicidade; integra-se ao app para alertas e protocolo.",
    items: [
      "Tensiômetro",
      "Balança de bioimpedância",
      "Smartwatch exclusivo",
      "Coach de saúde IA - app",
      "Conexão com apps de saúde",
      "Relatórios automatizados",
    ],
    featured: false,
  },
  {
    badge: "EM BREVE",
    badgeVariant: "soon" as const,
    name: "Programa\nSaúde Total Conectada",
    description:
      "Para pacientes com múltiplas condições; centraliza todos os dados em uma única solução.",
    items: [
      "Tensiômetro",
      "Glicosímetro",
      "Balança de bioimpedância",
      "Smartwatch exclusivo",
      "Coach de saúde IA - app",
      "Conexão com apps de saúde",
      "Relatórios automatizados",
    ],
    featured: false,
  },
];

export default function PlansSection() {
  return (
    <section id="kits" className="bg-plans-gradient py-16 md:py-[72px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[72px] px-7 md:px-14 lg:px-28">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[26px] font-bold leading-[1.133] text-white md:text-[30px]">
            Nossos kits
          </h2>
          <p className="max-w-[592px] text-[15px] font-medium leading-[1.4] text-white/80 md:text-[16px]">
            A CINCO disponibiliza um ecossistema de saúde conectado, combinando
            dispositivos médicos homologados, inteligência artificial via
            WhatsApp e suporte remoto para transformar dados em cuidado prático.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col justify-between gap-4 rounded-lg p-4 transition-transform duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border-2 border-primary bg-white"
                  : "bg-white/95"
              }`}
            >
              {/* Badge */}
              <div className="flex justify-end">
                <span
                  className={`rounded-full px-2.5 py-1 text-[12px] font-bold leading-[1.3] ${
                    plan.badgeVariant === "launch"
                      ? "bg-primary tracking-[0.25em] text-white"
                      : "bg-cta/20 tracking-[0.4167em] text-cta"
                  }`}
                >
                  {plan.badge}
                </span>
              </div>

              {/* Name + description */}
              <div className="flex flex-col gap-5">
                <h3 className="whitespace-pre-line text-[17px] font-semibold leading-[1.3] text-cinza-01">
                  {plan.name}
                </h3>
                <p className="text-[13px] font-medium leading-[1.4] text-cinza-03">
                  {plan.description}
                </p>
              </div>

              {/* Contains */}
              <div className="flex flex-col gap-2 rounded-2xl bg-bg-light p-4">
                <p className="text-[13px] font-bold leading-[1.3] text-cinza-01">
                  Contém
                </p>
                <ul className="flex flex-col gap-1.5">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[13px] font-medium leading-[1.3] text-cinza-01"
                    >
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cta" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA for featured */}
              {plan.featured && (
                <Link
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center justify-center gap-2 rounded-full bg-cta py-3 text-[14px] font-bold text-white transition-all hover:bg-cta/90 active:scale-95"
                >
                  Experimente agora
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
