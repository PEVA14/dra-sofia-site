import { DOCTOR } from "../lib/data";

export default function About() {
  const paragraphs = DOCTOR.bio.split("\n\n").filter(Boolean);

  return (
    <section id="sobre-mi" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-brand-cyan font-semibold text-sm lg:text-base uppercase tracking-widest">
            Sobre mí
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Conoce a la{" "}
            <span className="text-brand-purple">{DOCTOR.shortName}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* ── Photo placeholder ───────────────────────────── */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative offset card */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-brand-purple/10"
              />

              {/* Photo frame */}
              <div className="relative w-72 sm:w-80 lg:w-96 h-80 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/doctor-photo.jpg"
                  alt="Consulta pediátrica — bebé durante revisión con estetoscopio"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-brand-cyan rounded-2xl p-3.5 shadow-lg shadow-brand-cyan/30">
                <ShieldCheckIcon />
              </div>
            </div>
          </div>

          {/* ── Content ─────────────────────────────────────── */}
          <div>
            <h3 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-2">
              {DOCTOR.name}
            </h3>
            <p className="text-brand-cyan font-semibold text-sm lg:text-base mb-6 uppercase tracking-wide">
              {DOCTOR.title}
            </p>

            <div className="space-y-4 text-slate-600 leading-relaxed mb-8 text-base lg:text-lg">
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Philosophy quote */}
            <blockquote className="relative border-l-4 border-brand-purple pl-5 py-1 mb-8">
              <p className="text-slate-700 italic leading-relaxed text-base lg:text-lg">
                &ldquo;{DOCTOR.philosophy}&rdquo;
              </p>
            </blockquote>

            {/* Credential cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <CredentialCard
                label="Cédula de Especialidad"
                value="14966705"
                icon={<DocumentIcon />}
              />
              <CredentialCard
                label="Certificado CMeP"
                value="No. 28082"
                icon={<BadgeIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ─────────────────────────────────────────── */

function CredentialCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
      <div className="shrink-0 w-9 h-9 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-0.5">
          {label}
        </p>
        <p className="text-slate-800 font-bold text-sm">{value}</p>
      </div>
    </div>
  );
}


function ShieldCheckIcon() {
  return (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
      />
    </svg>
  );
}
