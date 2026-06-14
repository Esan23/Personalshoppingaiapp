import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}

/**
 * Fade-and-rise on scroll (22px), per the design system's scroll-reveal spec.
 * Uses Framer Motion's whileInView (IntersectionObserver under the hood) and
 * collapses to an instant, motionless reveal when reduced motion is requested.
 */
export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: SectionRevealProps) {
  const reduce = useReducedMotion();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = (motion as any)[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduce ? 0 : 0.6,
        delay: reduce ? 0 : delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
