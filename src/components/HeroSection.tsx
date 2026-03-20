import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-hero-gradient"
      style={{
        backgroundImage:
          "linear-gradient(133deg, rgba(5,46,177,1) 0%, rgba(6,53,202,1) 100%), url(/images/hero-bg-76e17d.png)",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-7 py-16 md:flex-row md:items-center md:gap-6 md:px-14 md:py-24 lg:px-28 lg:py-[100px]">
        {/* Left content */}
        <div className="flex w-full flex-col gap-10 md:w-[538px] md:shrink-0">
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="flex flex-col gap-2">
              <span className="inline-flex w-fit items-center rounded-lg bg-cta px-2 py-2 text-sm font-semibold uppercase tracking-[0.1875em] text-white">
                Bem-estar Cardiometabólico
              </span>

              {/* H1 */}
              <h1 className="text-shadow-hero text-[32px] font-bold leading-[1.1] text-white md:text-[40px]">
                Cuidado inteligente contra hipertensão, diabetes e excesso de
                peso
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-shadow-hero text-[16px] font-medium leading-[1.4] text-white/90 md:text-[20px]">
              CINCO é muito mais que um coach. É um aliado que funciona direto
              no seu WhatsApp e que coloca seu bem-estar em primeiro lugar,
              todos os dias, para você viver mais e melhor, começando hoje.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="#kits"
            className="flex w-full items-center justify-center rounded-full bg-white py-4 text-[18px] font-bold text-cta transition-all hover:bg-white/90 active:scale-95 md:w-[280px]"
          >
            Experimente agora
          </Link>
        </div>

        {/* Right illustration */}
        <div className="flex w-full justify-center md:flex-1 md:justify-end">
          <Image
            src="/images/hero-illustration.svg"
            alt="Aplicativo CINCO no smartphone"
            width={790}
            height={544}
            priority
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
