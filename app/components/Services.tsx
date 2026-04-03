import { SERVICES } from "../lib/data";

/* Icon color cycle — one per card, repeats if needed */
const ICON_STYLES = [
  { bg: "bg-brand-cyan/12", text: "text-brand-cyan-dark" },
  { bg: "bg-brand-purple/10", text: "text-brand-purple" },
  { bg: "bg-emerald-50", text: "text-emerald-600" },
  { bg: "bg-blue-50", text: "text-blue-600" },
  { bg: "bg-rose-50", text: "text-rose-500" },
  { bg: "bg-amber-50", text: "text-amber-600" },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-brand-cyan font-semibold text-sm lg:text-base uppercase tracking-widest">
            Lo que ofrezco
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Servicios de Pediatría
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto">
            Atención completa para el crecimiento, desarrollo y bienestar de tu
            hijo — desde el primer día de vida.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const style = ICON_STYLES[i % ICON_STYLES.length];
            return (
              <article
                key={service.id}
                className="group bg-white border border-slate-100 rounded-2xl p-6 lg:p-8 hover:border-brand-cyan/40 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-5 ${style.bg} ${style.text}`}
                >
                  <ServiceIcon index={i} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-slate-900 text-base lg:text-xl mb-2 group-hover:text-brand-purple transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Per-service SVG icons ──────────────────────────────────── */

function ServiceIcon({ index }: { index: number }) {
  const props = {
    className: "w-5 h-5",
    fill: "none" as const,
    viewBox: "0 0 24 24",
    stroke: "currentColor" as const,
    strokeWidth: 1.75,
  };

  const icons = [
    /* 0 – Recién nacido: heart */
    <svg key={0} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>,

    /* 1 – Crecimiento: trending up */
    <svg key={1} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
      />
    </svg>,

    /* 2 – Vacunación: shield check */
    <svg key={2} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>,

    /* 3 – Consulta: stethoscope (globe stand-in) */
    <svg key={3} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>,

    /* 4 – Seguimiento: calendar */
    <svg key={4} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>,

    /* 5 – Evaluación: clipboard */
    <svg key={5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
      />
    </svg>,
  ];

  return icons[index] ?? icons[0];
}
