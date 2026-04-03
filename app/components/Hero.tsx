import { DOCTOR, CONTACT } from "../lib/data";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    CONTACT.whatsapp_message
  )}`;
  const phoneUrl = `tel:+52${CONTACT.phone_citas}`;

  return (
    <section
      id="inicio"
      className="relative pt-16 md:pt-20 overflow-hidden bg-white"
    >
      {/* Soft background blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-48 -right-48 w-[480px] h-[480px] rounded-full bg-brand-cyan/8 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ── Text ────────────────────────────────────────── */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 text-brand-cyan-dark font-medium text-base px-5 py-2 rounded-full mb-7">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-brand-cyan"
              />
              Médica Pediatra · Durango, México
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-5 tracking-tight">
              {DOCTOR.shortName}
            </h1>

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl font-semibold text-brand-purple mb-6">
              La salud de tu hijo,
              <br /> en buenas manos.
            </p>

            {/* Supporting copy */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Atención pediátrica personalizada desde el primer día de vida
              hasta la adolescencia. Un espacio donde las familias encuentran
              claridad, confianza y cuidado real.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-lg shadow-brand-cyan/30 hover:shadow-brand-cyan/50 hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                Agendar por WhatsApp
              </a>
              <a
                href={phoneUrl}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <PhoneIcon />
                {CONTACT.phone_citas_display}
              </a>
            </div>

            {/* Credentials strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-base text-slate-500 border-t border-slate-100 pt-6">
              <span className="flex items-center gap-1.5">
                <CheckIcon />
                {DOCTOR.cedula}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon />
                {DOCTOR.certificado}
              </span>
            </div>
          </div>

          {/* ── Logo visual ─────────────────────────────────── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
            <div className="relative flex items-center justify-center w-full">
              {/* Soft glow */}
              <div
                aria-hidden="true"
                className="absolute w-80 h-80 rounded-full bg-brand-cyan/12 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute w-64 h-64 rounded-full bg-brand-purple/8 blur-2xl translate-x-10 translate-y-6"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/vector_4.png"
                alt="Dra. Sofía Vargas — Pediatra"
                className="relative w-64 sm:w-80 lg:w-full h-auto object-contain drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Icons ──────────────────────────────────────────────────── */

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.338c0 9.04 7.33 16.37 16.37 16.37h1.5a2.25 2.25 0 002.247-2.118l.44-4.397a2.25 2.25 0 00-1.517-2.33l-2.613-.87a2.25 2.25 0 00-2.448.647l-.913 1.064a.75.75 0 01-.861.19 11.25 11.25 0 01-5.45-5.45.75.75 0 01.19-.861l1.064-.913a2.25 2.25 0 00.647-2.448l-.87-2.613a2.25 2.25 0 00-2.33-1.517L4.368 2.103A2.25 2.25 0 002.25 4.35v1.988z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-brand-cyan shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

