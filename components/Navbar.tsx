"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",        label: "Home"    },
  { href: "/midterm", label: "Midterm" },
];

function LogoMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="0.75" y="0.75" width="14.5" height="14.5" rx="3.25"
        stroke="currentColor" strokeWidth="1.1" />
      <path d="M4.5 8.5h3M8 5.5l3.5 3-3.5 3"
        stroke="currentColor" strokeWidth="1.1"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0d12]/85 backdrop-blur-md border-b border-white/[0.06]"
          : ""
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-8 py-3.5 grid grid-cols-3 items-center">

        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[#8a8a94] hover:text-[#c0c0c8] transition-colors duration-300 w-fit"
        >
          <LogoMark />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
            Franz Emmanuel Baes
          </span>
        </Link>

        {/* Center: Nav links */}
        <div className="flex items-center justify-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-md text-[13px] transition-colors duration-200 ${
                  isActive
                    ? "text-[#e8e8f0]"
                    : "text-[#8a8a9a] hover:text-[#c8c8d4]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3.5 -bottom-[1px] h-px bg-[#4a9eff]/50 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
