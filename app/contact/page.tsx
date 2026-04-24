"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import type { Metadata } from "next";

const CONTACT_LINKS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
    val: "franzemmanuelbaes@email.com",
    href: "mailto:franzemmanuelbaes@email.com",
    external: false,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    val: "github.com/znrfrnz",
    href: "https://github.com/znrfrnz",
    external: true,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
    val: "facebook.com/znrfrnz",
    href: "https://facebook.com/znrfrnz",
    external: true,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.609.074-3.177.48-4.278 1.581C1.674 2.754 1.268 4.322 1.194 5.931 1.136 7.211 1.122 7.619 1.122 12c0 4.381.014 4.789.072 6.069.074 1.609.48 3.177 1.581 4.278 1.101 1.101 2.669 1.507 4.278 1.581 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.609-.074 3.177-.48 4.278-1.581 1.101-1.101 1.507-2.669 1.581-4.278.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.074-1.609-.48-3.177-1.581-4.278-1.101-1.101-2.669-1.507-4.278-1.581C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    val: "instagram.com/franzmatigasulo",
    href: "https://instagram.com/franzmatigasulo",
    external: true,
  },
];

type Status = "idle" | "sent";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate() {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email address.";
    if (!message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:franzemmanuelbaes@email.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] flex flex-col">

        {/* ── Page header ── */}
        <section className="pt-36 pb-14 max-w-[1400px] mx-auto w-full px-6 md:px-12 border-b border-white/[0.06]">
          <RevealOnScroll>
            <div className="flex items-end gap-3 mb-6">
              <span className="font-mono text-[10px] text-[#525260] tracking-[0.2em] uppercase">
                Contact
              </span>
              <span className="h-px w-8 bg-[#3a3a48] mb-0.5" />
            </div>
            <h1 className="font-serif italic text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-tight text-[#f0f0f4]">
              Get in touch.
            </h1>
          </RevealOnScroll>
        </section>

        {/* ── Two-column layout ── */}
        <section className="flex-1 max-w-[1400px] mx-auto w-full px-6 md:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-16 md:gap-24 items-start">

            {/* Left: intro + links */}
            <RevealOnScroll>
              <div className="flex flex-col gap-10">
                <p className="text-[#8a8a9a] text-[0.9375rem] leading-relaxed max-w-[42ch]">
                   If you have any questions, want to collaborate, or just want to say hello, feel free to reach out.
                </p>

                <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-8">
                  {CONTACT_LINKS.map(({ icon, val, href, external }) => (
                    <a
                      key={val}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 text-[#7a7a88] hover:text-[#4a9eff] transition-colors duration-200 w-fit group"
                    >
                      <span className="transition-colors duration-200">{icon}</span>
                      <span className="text-[0.9rem] text-[#b0b0bc] group-hover:text-[#4a9eff] transition-colors duration-200">
                        {val}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Right: form */}
            <RevealOnScroll>
              {status === "sent" ? (
                <div className="rounded-xl border border-white/[0.09] bg-white/[0.02] px-8 py-12 flex flex-col gap-3">
                  <div className="font-mono text-[10px] text-[#4a9eff] tracking-[0.18em] uppercase mb-1">
                    Message sent
                  </div>
                  <p className="text-[#e8e8f4] text-[0.9375rem] leading-relaxed">
                    Your mail client should have opened. If not, reach out directly at{" "}
                    <a href="mailto:franzbaes@email.com" className="text-[#4a9eff] hover:underline">
                      franzemmanuelbaes@email.com
                    </a>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-6"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="font-mono text-[10px] text-[#525260] uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
                      placeholder="Franz Baes"
                      className={`w-full bg-white/[0.03] border rounded-lg px-4 py-3 text-[0.9375rem] text-[#e8e8f4] placeholder:text-[#3a3a48] outline-none transition-colors duration-200 focus:border-[#4a9eff]/40 focus:bg-white/[0.05] ${
                        errors.name ? "border-red-500/50" : "border-white/[0.09]"
                      }`}
                    />
                    {errors.name && (
                      <span className="font-mono text-[11px] text-red-400">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="font-mono text-[10px] text-[#525260] uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                      placeholder="you@example.com"
                      className={`w-full bg-white/[0.03] border rounded-lg px-4 py-3 text-[0.9375rem] text-[#e8e8f4] placeholder:text-[#3a3a48] outline-none transition-colors duration-200 focus:border-[#4a9eff]/40 focus:bg-white/[0.05] ${
                        errors.email ? "border-red-500/50" : "border-white/[0.09]"
                      }`}
                    />
                    {errors.email && (
                      <span className="font-mono text-[11px] text-red-400">{errors.email}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="font-mono text-[10px] text-[#525260] uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: undefined })); }}
                      placeholder="Hi Franz, I wanted to reach out about..."
                      className={`w-full resize-none bg-white/[0.03] border rounded-lg px-4 py-3 text-[0.9375rem] text-[#e8e8f4] placeholder:text-[#3a3a48] outline-none transition-colors duration-200 focus:border-[#4a9eff]/40 focus:bg-white/[0.05] ${
                        errors.message ? "border-red-500/50" : "border-white/[0.09]"
                      }`}
                    />
                    {errors.message && (
                      <span className="font-mono text-[11px] text-red-400">{errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="self-start flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-[#4a9eff]/10 border border-[#4a9eff]/20 text-[#4a9eff] text-[13px] font-medium hover:bg-[#4a9eff]/18 hover:border-[#4a9eff]/35 active:scale-[0.98] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4a9eff]"
                  >
                    Send message
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                      <path d="M2.5 6.5h8M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              )}
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
