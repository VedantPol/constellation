import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * GlowingShadow — an animated glowing border/halo around its children.
 *
 * Adapted from the 21st.dev "glowing-shadow" showpiece (which is a fixed-size,
 * full-rainbow standalone card and can't wrap a responsive card grid) into a
 * flexible wrapper: it sizes to its child, runs a slow green→teal conic glow,
 * and intensifies on hover. The animated-border styles live in app/globals.css
 * (`.gs-wrap`) so they aren't duplicated per card.
 */
export function GlowingShadow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("gs-wrap", className)}>{children}</div>;
}
