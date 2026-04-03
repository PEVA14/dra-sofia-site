import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sofiavargaspediatra.com"),

  title: "Dra. Sofía Vargas Astorga | Médica Pediatra en Durango",
  description:
    "Consulta pediátrica personalizada con la Dra. Sofía Vargas Astorga. Atención para bebés, niños y adolescentes en Durango. Citas al 618 187 9509.",
  keywords: [
    "pediatra Durango",
    "pediatría Durango",
    "médica pediatra Durango",
    "Dra Sofía Vargas",
    "consulta pediátrica",
    "pediatra niños Durango",
    "Centro Médico SIONÉ",
  ],

  alternates: {
    canonical: "https://www.sofiavargaspediatra.com",
  },

  openGraph: {
    title: "Dra. Sofía Vargas Astorga | Médica Pediatra en Durango",
    description:
      "Atención pediátrica cálida, profesional y personalizada para tu hijo en Durango. Agenda tu cita por WhatsApp.",
    url: "https://www.sofiavargaspediatra.com",
    siteName: "Dra. Sofía Vargas — Pediatra",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Sofía Vargas Astorga — Médica Pediatra en Durango",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
