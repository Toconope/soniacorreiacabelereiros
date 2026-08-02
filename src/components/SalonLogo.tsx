import { LOGO_ALT, LOGO_SHAPE, LOGO_URL } from "@/config/branding";
import { cn } from "@/lib/utils";

type SalonLogoProps = {
  className?: string;
};

export function SalonLogo({ className }: SalonLogoProps) {
  return (
    <div
      className={cn(
        "relative p-[3px] bg-gradient-gold shadow-gold",
        LOGO_SHAPE === "circle" ? "rounded-full" : "rounded-[2rem]",
        className,
      )}
    >
      <div
        className={cn(
          "size-36 sm:size-40 md:size-44 overflow-hidden bg-brand-surface ring-1 ring-brand-bg/80",
          LOGO_SHAPE === "circle" ? "rounded-full" : "rounded-[1.85rem]",
        )}
      >
        {LOGO_URL ? (
          <img
            src={LOGO_URL}
            alt={LOGO_ALT}
            width={176}
            height={176}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-serif text-3xl italic text-brand-muted">
            SC
          </div>
        )}
      </div>
    </div>
  );
}
