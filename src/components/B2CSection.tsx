import Link from "next/link";

export default function B2CSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(133deg, rgba(1,13,50,1) 0%, rgba(3,34,144,0.6) 100%), url(/images/hero-bg-76e17d.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Dark directional overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,3,3,0.9) 0%, rgba(2,19,75,0) 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1440px] flex-col justify-center gap-10 px-7 py-20 md:min-h-[600px] md:px-14 md:py-24 lg:px-28">
        <div className="flex max-w-[560px] flex-col gap-6">
          <h2 className="text-[32px] font-extrabold leading-[1.174] text-white md:text-[40px] lg:text-[45px]">
            Para você,
            <br />
            para quem você ama
          </h2>
          <p className="text-[16px] font-medium leading-[1.4] text-white/80 md:text-[20px]">
            Quantas vezes você já se perguntou se seus pais, avós ou até você
            mesmo estão cuidando da saúde como deveriam?
            <br />
            <br />
            A rotina aperta, os exames ficam para depois… e quando percebemos,
            já é tarde. Com a CINCO, você não precisa mais se cuidar sozinho.
          </p>
        </div>

        <Link
          href="#conheca"
          className="flex w-fit items-center justify-center rounded-full bg-white px-8 py-4 text-[16px] font-bold text-primary transition-all hover:bg-white/90 active:scale-95 md:text-[18px]"
        >
          Saiba mais
        </Link>
      </div>
    </section>
  );
}
