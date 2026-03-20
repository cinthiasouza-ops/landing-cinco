import Image from "next/image";
import Link from "next/link";

const features = [
  {
    image: "/images/sensors.png",
    imageWidth: 344,
    imageHeight: 200,
    title: "Sensores e wearables",
    description:
      "A CINCO funciona como um hub que conecta informações de diferentes dispositivos do seu dia a dia. De forma simples e prática, reúne seus dados em um só lugar e ajusta suas orientações de bem-estar conforme as respostas do seu corpo, em tempo real.",
  },
  {
    image: "/images/ia-cinco.png",
    imageWidth: 209,
    imageHeight: 253,
    title: "Cintia, muito mais que uma IA",
    description:
      "A CintIA é seu coach digital de bem-estar que conversa com você direto pelo WhatsApp. Sem apps complicados: ela envia lembretes, faz check-ins gentis, celebra pequenas conquistas e sugere passos simples para manter sua rotina no trilho. Além disso, ela te orienta com linguagem clara, como uma conversa amiga, todos os dias.",
  },
  {
    image: "/images/insights-graphic.svg",
    imageWidth: 370,
    imageHeight: 230,
    title: "Insights e rastreamento",
    description:
      "A CINCO transforma os dados do seu corpo e dos seus hábitos em informações fáceis de entender. Você acompanha sua evolução em tempo real, identifica padrões e recebe orientações práticas para ajustar sua rotina. Assim, cada dado se torna um passo a mais rumo ao seu equilíbrio e bem-estar.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 md:py-[72px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[72px] px-7 md:px-14 lg:px-28">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[26px] font-bold leading-[1.133] text-cinza-01 md:text-[30px]">
            Seu corpo fala, a CINCO escuta
          </h2>
          <p className="max-w-[600px] text-[15px] font-medium leading-[1.5] text-cinza-03 md:text-[16px]">
            Cuidamos de todos os corpos com inteligência e conexão,
            transformando dados em prevenção, adesão e resultados reais em
            saúde.
          </p>
        </div>

        {/* Feature cards */}
        <div className="flex w-full flex-col items-stretch gap-8 md:flex-row">
          {features.map((feat) => (
            <article
              key={feat.title}
              className="shadow-card flex flex-1 flex-col items-start gap-5 rounded-2xl bg-white p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Card image */}
              <div className="flex w-full items-center justify-center overflow-hidden rounded-xl bg-bg-light">
                <Image
                  src={feat.image}
                  alt={feat.title}
                  width={feat.imageWidth}
                  height={feat.imageHeight}
                  className="h-[200px] w-full object-cover"
                />
              </div>

              {/* Card text */}
              <h3 className="text-[18px] font-bold leading-[1.3] text-cinza-01">
                {feat.title}
              </h3>
              <p className="text-[15px] font-semibold leading-[1.5] tracking-[-0.011em] text-cinza-03">
                {feat.description}
              </p>
            </article>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <Link
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-full bg-primary px-10 py-4 text-[18px] font-bold text-white transition-all hover:bg-primary/90 active:scale-95"
        >
          <WhatsAppIcon />
          <span>Experimente agora</span>
        </Link>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
