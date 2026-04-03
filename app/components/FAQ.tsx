"use client";

import { useState } from "react";
import { FAQS, CONTACT } from "../lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    CONTACT.whatsapp_message
  )}`;

  return (
    <section id="preguntas" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-18">
          <span className="text-brand-cyan font-semibold text-sm lg:text-base uppercase tracking-widest">
            Dudas frecuentes
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-slate-500">
            Si no encuentras tu respuesta aquí,{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cyan hover:text-brand-cyan-dark font-semibold underline underline-offset-2 transition-colors"
            >
              escríbenos por WhatsApp
            </a>
            .
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-brand-cyan/40 shadow-md shadow-slate-100"
                    : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left px-6 lg:px-8 py-5 lg:py-6 gap-4"
                >
                  <span
                    className={`font-semibold text-sm sm:text-base lg:text-lg leading-snug transition-colors ${
                      isOpen ? "text-brand-purple" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 lg:w-9 lg:h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "bg-brand-purple text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronIcon />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 lg:px-8 pb-5 lg:pb-7">
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon() {
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
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
