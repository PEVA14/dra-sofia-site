import { CONTACT } from "../lib/data";

export default function FinalCTA() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    CONTACT.whatsapp_message
  )}`;
  const phoneUrl = `tel:+52${CONTACT.phone_citas}`;

  return (
    <section className="py-20 lg:py-24 bg-brand-purple relative overflow-hidden">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
          Estamos listos para atenderte
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
          Tu hijo merece la mejor{" "}
          <span className="text-brand-cyan">atención pediátrica</span>
        </h2>

        {/* Sub */}
        <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl mx-auto">
          No dejes pasar más tiempo con dudas. Un mensaje es todo lo que necesitas
          para agendar una cita con la Dra. Sofía.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Escribir por WhatsApp
          </a>
          <a
            href={phoneUrl}
            className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            <PhoneIcon />
            {CONTACT.phone_citas_display}
          </a>
        </div>

        {/* Reassurance text */}
        <p className="text-sm text-white/50 mt-8">
          Respondemos a la brevedad · Horario flexible · Sin lista de espera interminable
        </p>
      </div>
    </section>
  );
}

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
