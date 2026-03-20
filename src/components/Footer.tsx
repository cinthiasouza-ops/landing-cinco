import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Empresas", href: "#para-quem" },
  { label: "Planos de saúde", href: "#para-quem" },
  { label: "Indústria farmacêutica", href: "#para-quem" },
  { label: "Governo", href: "#para-quem" },
];

export default function Footer() {
  return (
    <footer className="rounded-t-[40px] bg-primary px-7 py-12 md:px-14 lg:px-28">
      <div className="mx-auto max-w-[1440px]">
        {/* Top row: CTA + links */}
        <div className="mb-12 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* CTA */}
          <Link
            href="mailto:contato@cinco.health"
            className="flex w-fit items-center justify-center rounded-full bg-white px-6 py-4 text-[16px] font-bold text-cta transition-all hover:bg-white/90 active:scale-95 md:text-[18px]"
          >
            Solicite uma demonstração
          </Link>

          {/* Footer nav */}
          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] font-bold text-white transition-opacity hover:opacity-75 md:text-[16px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <hr className="mb-8 border-white/20" />

        {/* Bottom row: logo + legal */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo + Powered by */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/footer-logo.svg"
              alt="CINCO"
              width={164}
              height={57}
            />
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-medium text-white/60">
                Powered by
              </span>
              <Image
                src="/images/powered-by-logo.svg"
                alt="Powered by"
                width={72}
                height={32}
                className="opacity-70"
              />
            </div>
          </div>

          {/* Legal */}
          <div className="flex max-w-[560px] flex-col gap-4">
            <p className="text-[11px] font-medium leading-[1.5] text-white/40 md:text-[12px]">
              A CINCO não substitui aconselhamento ou tratamento médico. É
              educativo e baseado em dados do usuário. O diagnóstico deve ser
              feito por um médico.
              <br />
              CINCO - Cuidado Inteligente Conectado LTDA | CNPJ:
              54.138.304/0001-49
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacidade"
                className="text-[12px] font-medium text-white/40 transition-opacity hover:text-white/70"
              >
                Política de privacidade
              </Link>
              <Link
                href="/termos"
                className="text-[12px] font-medium text-white/40 transition-opacity hover:text-white/70"
              >
                Termos de uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
