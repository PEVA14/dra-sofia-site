import { CONTACT, HOURS } from "../lib/data";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    CONTACT.whatsapp_message
  )}`;

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-brand-purple relative overflow-hidden">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-cyan/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-purple-dark/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            Ponte en contacto
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Agenda tu{" "}
            <span className="text-brand-cyan">cita hoy</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Escríbenos por WhatsApp, llama o envía un correo. Respondemos a la
            brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* ── Contact cards ──────────────────────────────── */}
          <div className="space-y-3">
            {/* WhatsApp */}
            <ContactCard
              href={whatsappUrl}
              external
              iconBg="bg-emerald-500/20"
              iconColor="text-emerald-300"
              icon={<WhatsAppIcon />}
              title="WhatsApp — Citas"
              value={CONTACT.phone_citas_display}
              description="La forma más rápida de agendar"
              cta="Escribir ahora"
            />

            {/* Phone citas */}
            <ContactCard
              href={`tel:+52${CONTACT.phone_citas}`}
              iconBg="bg-brand-cyan/20"
              iconColor="text-brand-cyan"
              icon={<PhoneIcon />}
              title="Teléfono — Citas"
              value={CONTACT.phone_citas_display}
              description="Llamadas en horario de consulta"
              cta="Llamar"
            />

            {/* Phone urgencias */}
            <ContactCard
              href={`tel:+52${CONTACT.phone_urgencias}`}
              iconBg="bg-rose-500/20"
              iconColor="text-rose-300"
              icon={<UrgencyIcon />}
              title="Urgencias"
              value={CONTACT.phone_urgencias_display}
              description="Número exclusivo para urgencias"
              cta="Llamar"
            />

            {/* Email */}
            <ContactCard
              href={`mailto:${CONTACT.email}`}
              iconBg="bg-white/10"
              iconColor="text-white/70"
              icon={<EmailIcon />}
              title="Correo electrónico"
              value={CONTACT.email}
              description="Para consultas no urgentes"
              cta="Enviar correo"
            />

            {/* Instagram */}
            <ContactCard
              href={CONTACT.instagram_url}
              external
              iconBg="bg-pink-500/20"
              iconColor="text-pink-300"
              icon={<InstagramIcon />}
              title="Instagram"
              value={CONTACT.instagram}
              description="Consejos de salud y novedades"
              cta="Ver perfil"
            />
          </div>

          {/* ── Location & Hours ───────────────────────────── */}
          <div className="space-y-4">
            {/* Address */}
            <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/15">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-cyan/20 text-brand-cyan flex items-center justify-center mt-0.5">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">
                    {CONTACT.clinic_name}
                  </p>
                  <p className="text-sm text-white/65">{CONTACT.office}</p>
                  <p className="text-sm text-white/65">{CONTACT.address}</p>
                  <p className="text-sm text-white/50">{CONTACT.city}</p>
                  <a
                    href={CONTACT.maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm text-brand-cyan font-medium hover:text-white transition-colors"
                  >
                    Ver en Google Maps
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/15">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 text-brand-cyan flex items-center justify-center">
                  <ClockIcon />
                </div>
                <h3 className="font-semibold text-white">
                  Horario de consulta
                </h3>
              </div>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  {HOURS.map((row) => (
                    <tr key={row.day}>
                      <td className="py-2.5 font-medium text-white/80 pr-4">
                        {row.day}
                      </td>
                      <td
                        className={`py-2.5 text-right ${
                          row.time === "Cerrado"
                            ? "text-white/35"
                            : "text-white/65"
                        }`}
                      >
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-white/35 mt-4">
                * Para urgencias fuera de este horario, llama al número de
                urgencias.
              </p>
            </div>

            {/* Map placeholder */}
            <a
              href={CONTACT.maps_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-white/15 hover:border-brand-cyan/40 transition-all group"
              aria-label="Ver ubicación en Google Maps"
            >
              <div className="h-40 bg-white/8 hover:bg-white/12 flex items-center justify-center gap-3 text-white/50 group-hover:text-brand-cyan transition-all">
                <MapPinIcon />
                <span className="text-sm font-medium">
                  Ver ubicación en mapa
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom reassurance */}
        <p className="text-sm text-white/40 text-center mt-14">
          Respondemos a la brevedad · Horario flexible · Sin lista de espera interminable
        </p>
      </div>
    </section>
  );
}

/* ── Contact card ───────────────────────────────────────────── */

function ContactCard({
  href,
  external,
  iconBg,
  iconColor,
  icon,
  title,
  value,
  description,
  cta,
}: {
  href: string;
  external?: boolean;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:border-brand-cyan/40 hover:bg-white/10 transition-all duration-200 group bg-white/6 backdrop-blur-sm"
    >
      <div
        className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-white/45 font-medium uppercase tracking-wide">
          {title}
        </p>
        <p className="font-semibold text-white text-sm truncate">{value}</p>
        <p className="text-xs text-white/45">{description}</p>
      </div>
      <span className="shrink-0 text-xs font-semibold text-brand-cyan group-hover:text-white transition-colors pr-1">
        {cta} →
      </span>
    </a>
  );
}

/* ── Icons ──────────────────────────────────────────────────── */

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.338c0 9.04 7.33 16.37 16.37 16.37h1.5a2.25 2.25 0 002.247-2.118l.44-4.397a2.25 2.25 0 00-1.517-2.33l-2.613-.87a2.25 2.25 0 00-2.448.647l-.913 1.064a.75.75 0 01-.861.19 11.25 11.25 0 01-5.45-5.45.75.75 0 01.19-.861l1.064-.913a2.25 2.25 0 00.647-2.448l-.87-2.613a2.25 2.25 0 00-2.33-1.517L4.368 2.103A2.25 2.25 0 002.25 4.35v1.988z"
      />
    </svg>
  );
}

function UrgencyIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
