"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Props {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-colors duration-200 active:scale-[0.98]";

  const styles = {
    primary:
      "bg-[#4a9eff] text-[#0c0c0f] hover:bg-[#6ab4ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]",
    secondary:
      "border border-white/[0.1] text-[#6a6a74] hover:border-white/[0.18] hover:text-[#f0f0f4]",
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
