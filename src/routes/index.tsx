import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";
import { SalonLogo } from "@/components/SalonLogo";
import { Ornament } from "@/components/Ornament";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sónia Correia Cabeleireiros — São João da Madeira" },
      { name: "description", content: "Link oficial do Instagram de Sónia Correia Cabeleireiros. Telefone, morada, horário e serviços em São João da Madeira." },
      { property: "og:title", content: "Sónia Correia Cabeleireiros" },
      { property: "og:description", content: "Mais de 20 anos a cuidar do seu cabelo em São João da Madeira." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const PHONE_NUMBER = "+351256000000";
const ADDRESS = "Rua da Banda da Música 94, São João da Madeira";
const INSTAGRAM_URL = "https://www.instagram.com/soniacorreiacabeleireiros?igsh=MWExczQyMGV3OHE3OA==";
const FACEBOOK_URL = "https://www.facebook.com/share/1N5PRLCdZA/";
const MAPS_URL = "https://maps.app.goo.gl/KcxL4je6UDotA8QLA?g_st=aw";
const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

const services = [
  { title: "Corte", subtitle: "Feminino e Masculino" },
  { title: "Coloração", subtitle: "Madeixas e Balayage" },
  { title: "Tratamentos", subtitle: "Hidratação Profunda" },
  { title: "Alisamento", subtitle: "Queratina e Progressiva" },
  { title: "Penteados", subtitle: "Para ocasiões especiais" },
];

function Index() {
  return (
    <div className="min-h-screen bg-paper font-sans text-brand-text flex flex-col items-center px-5 pb-16">
      <header className="w-full max-w-md pt-14 sm:pt-20 pb-10 flex flex-col items-center text-center">
        <SalonLogo />

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-brand-bg/60 px-4 py-1.5 backdrop-blur-sm">
          <span className="size-1 rotate-45 bg-brand-gold" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
            Desde há 20+ anos
          </span>
          <span className="size-1 rotate-45 bg-brand-gold" aria-hidden="true" />
        </div>

        <h1 className="mt-8 font-serif text-4xl font-bold tracking-tight">
          Sónia Correia
        </h1>
        <p className="mt-2 text-brand-accent font-medium uppercase text-[11px] tracking-[0.45em] pl-[0.45em]">
          Cabeleireiros
        </p>

        <Ornament className="mt-7" />

        <p className="mt-6 max-w-xs font-serif italic text-[15px] leading-relaxed text-brand-muted">
          <span className="font-serif text-2xl leading-none text-brand-gold/70 align-[-0.15em]">“</span>
          Mais de 20 anos a cuidar do seu cabelo
          <span className="font-serif text-2xl leading-none text-brand-gold/70 align-[-0.15em]">”</span>
        </p>
      </header>

      <main className="w-full max-w-md space-y-3.5">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="group flex items-center justify-between w-full surface-dark text-primary-foreground py-6 px-7 rounded-2xl ring-1 ring-brand-gold/40 shadow-gold active:scale-[0.985] transition-all"
          aria-label="Ligar para o salão"
        >
          <span className="flex items-center gap-3.5 font-medium tracking-wide">
            <Phone className="size-5 shrink-0 text-brand-gold" aria-hidden="true" />
            Ligar agora
          </span>
          <ArrowRight className="size-5 text-brand-gold group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </a>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between w-full surface-card border border-brand-gold/25 py-6 px-7 rounded-2xl shadow-soft active:scale-[0.985] transition-all"
          aria-label="Ver localização no Google Maps"
        >
          <span className="flex items-center gap-3.5 font-medium tracking-wide text-brand-text">
            <MapPin className="size-5 shrink-0 text-brand-gold" aria-hidden="true" />
            Ver localização
          </span>
          <ArrowRight className="size-4 text-brand-gold/70 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </a>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between w-full surface-card border border-brand-gold/25 py-6 px-7 rounded-2xl shadow-soft active:scale-[0.985] transition-all"
          aria-label="Seguir Sónia Correia Cabeleireiros no Instagram"
        >
          <span className="flex items-center gap-3.5 font-medium tracking-wide text-brand-text">
            <Instagram className="size-5 shrink-0 text-brand-gold" aria-hidden="true" />
            Seguir no Instagram
          </span>
          <ArrowRight className="size-4 text-brand-gold/70 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </a>

        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between w-full surface-card border border-brand-gold/25 py-6 px-7 rounded-2xl shadow-soft active:scale-[0.985] transition-all"
          aria-label="Seguir Sónia Correia Cabeleireiros no Facebook"
        >
          <span className="flex items-center gap-3.5 font-medium tracking-wide text-brand-text">
            <Facebook className="size-5 shrink-0 text-brand-gold" aria-hidden="true" />
            Facebook
          </span>
          <ArrowRight className="size-4 text-brand-gold/70 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </a>

        <section className="pt-14 pb-8">
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-3">
            Salão
          </p>
          <h2 className="font-serif text-2xl italic text-center">Nossos Serviços</h2>
          <Ornament className="mt-5 mb-8" />
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="surface-card border border-brand-gold/15 p-5 rounded-xl flex flex-col items-center text-center shadow-soft"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-brand-accent font-semibold mb-1.5">
                  {service.title}
                </span>
                <span className="text-[10px] text-brand-muted leading-tight">
                  {service.subtitle}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="surface-card rounded-3xl p-8 border border-brand-gold/25 shadow-soft">
          <h3 className="font-serif text-lg italic">Horário</h3>
          <span className="mt-2 mb-5 block h-px w-full bg-gradient-to-r from-brand-gold/50 to-transparent" />
          <div className="space-y-2.5 text-sm">
            <div className="flex justify-between">
              <span className="text-brand-muted">Terça a Sexta</span>
              <span className="font-medium text-right">09:00 – 12:30<br />14:00 – 19:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-muted">Sábado</span>
              <span className="font-medium">09:00 – 12:30</span>
            </div>
            <div className="flex justify-between text-brand-accent font-medium">
              <span>Segunda e Domingo</span>
              <span>Encerrado</span>
            </div>
          </div>

          <h3 className="font-serif text-lg italic mt-10">Onde Estamos</h3>
          <span className="mt-2 mb-5 block h-px w-full bg-gradient-to-r from-brand-gold/50 to-transparent" />
          <p className="text-sm text-brand-muted mb-5">
            Rua da Banda da Música 94,<br />
            São João da Madeira
          </p>
          <div className="w-full aspect-[2/1] bg-brand-surface rounded-2xl overflow-hidden ring-1 ring-brand-gold/25">
            <iframe
              title="Localização de Sónia Correia Cabeleireiros"
              src={MAPS_EMBED_URL}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-brand-gold/40 py-3.5 text-sm font-medium tracking-wide text-brand-text transition-colors hover:bg-brand-gold/10"
          >
            <MapPin className="size-4 mr-2 text-brand-gold" aria-hidden="true" />
            Abrir no Google Maps
          </a>
        </section>
      </main>

      <footer className="w-full max-w-md mt-16 text-center">
        <Ornament className="mb-8" />
        <div className="flex justify-center items-center gap-4 mb-6">
          {[
            { href: INSTAGRAM_URL, label: "Instagram", Icon: Instagram, external: true },
            { href: FACEBOOK_URL, label: "Facebook", Icon: Facebook, external: true },
            { href: `tel:${PHONE_NUMBER}`, label: "Telefone", Icon: Phone, external: false },
          ].map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={label}
              className="flex size-11 items-center justify-center rounded-full border border-brand-gold/35 surface-card text-brand-gold transition-colors hover:bg-brand-gold/10"
            >
              <Icon className="size-[18px]" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="font-serif text-sm italic text-brand-muted">
          Sónia Correia Cabeleireiros
        </p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-brand-muted/70">
          São João da Madeira · Portugal
        </p>
        <p className="mt-4 text-[9px] text-brand-muted/50">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
