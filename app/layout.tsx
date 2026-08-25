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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Sofía Vargas Astorga",
  description:
    "Médica pediatra certificada por el Consejo Mexicano de Pediatría. Atención para bebés, niños y adolescentes en Durango.",
  url: "https://www.sofiavargaspediatra.com",
  telephone: "+526181879509",
  image: "https://www.sofiavargaspediatra.com/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Paseo de los Pinos #501, Col. Esperanza",
    addressLocality: "Durango",
    addressRegion: "Dgo.",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.0277,
    longitude: -104.6532,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "16:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  medicalSpecialty: "Pediatric",
  availableService: [
    { "@type": "MedicalTherapy", name: "Atención al Recién Nacido" },
    { "@type": "MedicalTherapy", name: "Control de Crecimiento y Desarrollo" },
    { "@type": "MedicalTherapy", name: "Orientación en Vacunación" },
    { "@type": "MedicalTherapy", name: "Consulta Pediátrica General" },
    { "@type": "MedicalTherapy", name: "Seguimiento de Salud Infantil" },
    { "@type": "MedicalTherapy", name: "Evaluación Integral" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
