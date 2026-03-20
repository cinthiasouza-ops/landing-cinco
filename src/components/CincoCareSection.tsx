import Image from "next/image";

const kitItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 3H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3" />
        <path d="M18 3h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3" />
        <path d="M4 11V8" />
        <path d="M20 11V8" />
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M9 9h6" />
        <path d="M9 13h3" />
      </svg>
    ),
    label: "Balança de bioimpedância",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="7" />
        <path d="M12 10v4" />
        <path d="M10 12h4" />
      </svg>
    ),
    label: "Smartwatch",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
    label: "Cintia, coach de saúde com IA direto no WhatsApp",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    label: "Tensiômetro (em breve)",
    soon: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: "Glicosímetro (em breve)",
    soon: true,
  },
];

export default function CincoCareSection() {
  return (
    <section id="conheca" className="overflow-hidden bg-bg-light">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-7 py-16 md:flex-row md:items-start md:gap-0 md:px-0 md:py-0 lg:min-h-[600px]">
        {/* Left: product image */}
        <div className="flex w-full shrink-0 items-center justify-center md:w-[50%] md:py-12 md:pl-14 lg:pl-28">
          <Image
            src="/images/cinco-care-img.svg"
            alt="Kit CINCO Care com dispositivos de saúde"
            width={590}
            height={598}
            className="max-w-[400px] md:max-w-full"
          />
        </div>

        {/* Right: content */}
        <div className="flex w-full flex-col justify-center gap-8 md:w-[50%] md:py-16 md:pr-14 lg:pr-28">
          {/* Title */}
          <div className="flex flex-col gap-1">
            <span className="text-[16px] font-medium leading-[1.4] text-cinza-01">
              Kit de saúde
            </span>
            <div className="relative">
              <h2 className="text-[28px] font-extrabold leading-[0.933] text-cinza-01 md:text-[30px]">
                CINCO Care
              </h2>
              <span
                className="pointer-events-none absolute left-0 top-0 text-[28px] font-extrabold leading-[0.933] text-primary opacity-0 md:text-[30px]"
                aria-hidden="true"
              >
                CINCO Care
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[15px] font-medium leading-[1.6] text-cinza-03 md:text-[16px]">
            A experiência de cuidados digitais CINCO começa com o CINCO Care,
            que conecta seus sinais vitais à IA da CINCO para transformar dados
            em cuidado.
            <br />
            <br />
            Os dispositivos contidos são programados e integrados à tecnologia
            CINCO para coletar dados periodicamente. O CINCO Care é composto
            por:
          </p>

          {/* Kit items */}
          <ul className="flex flex-col gap-4">
            {kitItems.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    item.soon ? "bg-cinza-09 text-cinza-03" : "bg-primary text-white"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-[15px] font-semibold leading-[1.25] ${
                    item.soon ? "text-cinza-03" : "text-cinza-01"
                  }`}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
