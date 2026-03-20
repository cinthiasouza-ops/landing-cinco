import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="border-y-2 border-bg-light bg-white py-10 md:py-[40px]">
      <div className="mx-auto max-w-[1440px] px-7 md:px-14 lg:px-28">
        <p className="mb-8 text-center text-[16px] font-medium tracking-[0.1em] text-cinza-03 md:text-[18px]">
          PARCEIROS
        </p>
        <div className="flex items-center justify-center overflow-hidden">
          <Image
            src="/images/partners-logos.svg"
            alt="Nossos parceiros"
            width={1216}
            height={112}
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
