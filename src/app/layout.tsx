import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CINCO — Cuidado Inteligente Conectado",
  description:
    "CINCO é seu aliado de bem-estar cardiometabólico. Funciona direto no WhatsApp e coloca sua saúde em primeiro lugar, todos os dias.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${raleway.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
