import { LOGO_ALT, LOGO_SHAPE, LOGO_URL } from "@/config/branding";
import { cn } from "@/lib/utils";

type SalonLogoProps = {
  className?: string;
};

export function SalonLogo({ className }: SalonLogoProps) {
  return (
    <div
      className={cn(
        "size-28 sm:size-32 md:size-36 overflow-hidden bg-brand-surface outline outline-1 outline-brand-text/5 shadow-sm",
        LOGO_SHAPE === "circle" ? "rounded-full" : "rounded-3xl",
        className,
      )}
    >
      {LOGO_URL ? (
        <img
          src={LOGO_URL}
          alt={LOGO_ALT}
          width={144}
          height={144}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-serif text-2xl italic text-brand-muted">
          SC
        </div>
      )}
    </div>
  );
}
