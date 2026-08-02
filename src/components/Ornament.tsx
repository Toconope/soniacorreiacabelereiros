import { cn } from "@/lib/utils";

type OrnamentProps = {
  className?: string;
};

/** Divisória decorativa fina com losango central dourado. */
export function Ornament({ className }: OrnamentProps) {
  return (
    <div
      className={cn("flex items-center justify-center gap-3", className)}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-brand-gold/60" />
      <span className="size-1.5 rotate-45 border border-brand-gold/70" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-brand-gold/60" />
    </div>
  );
}
