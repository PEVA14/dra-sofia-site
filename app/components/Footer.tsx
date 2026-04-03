import { DOCTOR, CONTACT } from "../lib/data";

const NAV_LINKS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que-yo", label: "¿Por qué yo?" },
  { href: "#contacto", label: "Contacto" },
  { href: "#preguntas", label: "Preguntas" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    CONTACT.whatsapp_message
  )}`;

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* ── Brand column ────────────────────────────────── */}
          <div className="lg:col-span-2">
            <p className="text-white font-bold text-lg mb-1">{DOCTOR.name}</p>
            <p className="text-brand-cyan text-sm font-semibold mb-4">
              {DOCTOR.title}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Atención pediátrica personalizada, cálida y basada en evidencia
              para bebés, niños y adolescentes en Durango.
            </p>
            {/* Social link */}
            <a
              href={CONTACT.instagram_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand-cyan transition-colors"
            >
              <InstagramIcon />
              {CONTACT.instagram}
            </a>
          </div>

          {/* ── Navigation ──────────────────────────────────── */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navegación
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ─────────────────────────────────────── */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors"
                >
                  WhatsApp: {CONTACT.phone_citas_display}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+52${CONTACT.phone_urgencias}`}
                  className="hover:text-white transition-colors"
                >
                  Urgencias: {CONTACT.phone_urgencias_display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="pt-1 leading-relaxed text-slate-500">
                {CONTACT.clinic_name}
                <br />
                {CONTACT.office}
                <br />
                {CONTACT.address}
                <br />
                {CONTACT.city}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {currentYear} {DOCTOR.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-2 text-xs">
            <span>{DOCTOR.cedula}</span>
            <span>·</span>
            <span>{DOCTOR.certificado}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
