import { WHY_CHOOSE } from "../lib/data";

export default function WhyChoose() {
  return (
    <section id="por-que-yo" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-brand-cyan font-semibold text-sm lg:text-base uppercase tracking-widest">
            Mi compromiso
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            ¿Por qué elegir a la{" "}
            <span className="text-brand-purple">Dra. Sofía?</span>
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto">
            Más que una consulta pediátrica — una relación de confianza con tu
            familia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-purple/20 transition-all duration-300"
            >
              {/* Number accent */}
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-brand-purple/10 text-brand-purple font-bold text-sm lg:text-base flex items-center justify-center mb-4">
                {i + 1}
              </div>

              <h3 className="font-semibold text-slate-900 text-base lg:text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-sm lg:text-base text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="mt-14 grid sm:grid-cols-3 gap-6 text-center">
          <TrustStat
            number="100%"
            label="Atención personalizada"
            sub="Sin consultas genéricas"
          />
          <TrustStat
            number="CMeP"
            label="Certificación vigente"
            sub="Consejo Mexicano de Pediatría"
          />
          <TrustStat
            number="0–18"
            label="Años de edad atendidos"
            sub="Desde el recién nacido"
          />
        </div>
      </div>
    </section>
  );
}

function TrustStat({
  number,
  label,
  sub,
}: {
  number: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="bg-white rounded-2xl px-6 py-8 border border-slate-100 shadow-sm">
      <p className="text-3xl font-bold text-brand-purple mb-1">{number}</p>
      <p className="font-semibold text-slate-800 text-sm">{label}</p>
      <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
    </div>
  );
}
