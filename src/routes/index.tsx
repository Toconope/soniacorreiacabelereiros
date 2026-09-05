import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Facebook, ArrowRight, AtSign } from "lucide-react";
import { SalonLogo } from "@/components/SalonLogo";
import { Ornament } from "@/components/Ornament";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import salonBg from "@/assets/salon-bg.jpg.asset.json";
import galeria2 from "@/assets/galeria-2.jpg.asset.json";
import galeria3 from "@/assets/galeria-3.jpg.asset.json";
import galeria4 from "@/assets/galeria-4.jpg.asset.json";
import galeria5 from "@/assets/galeria-5.jpg.asset.json";
import galeria6 from "@/assets/galeria-6.jpg.asset.json";
import galeria7 from "@/assets/galeria-7.jpg.asset.json";
import galeria8 from "@/assets/galeria-8.jpg.asset.json";
import galeria9 from "@/assets/galeria-9.jpg.asset.json";
import galeria10 from "@/assets/galeria-10.jpg.asset.json";
import galeriaVideo from "@/assets/galeria-video.mp4.asset.json";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.834h-.004c-1.632 0-3.238-.433-4.642-1.253l-.333-.198-3.45.905 1.92-3.355-.202-.32c-.893-1.42-1.365-3.074-1.365-4.79 0-5.047 4.108-9.155 9.155-9.155 2.447 0 4.747.953 6.475 2.684 1.729 1.729 2.684 4.028 2.684 6.475 0 5.047-4.108 9.155-9.155 9.155M12.003 2C6.478 2 2.003 6.475 2.003 12c0 1.89.525 3.708 1.515 5.286L2 22l4.908-1.461A9.95 9.95 0 0012.003 22c5.525 0 10-4.475 10-10S17.528 2 12.003 2" />
    </svg>
  );
}


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sónia Correia Cabeleireiros — São João da Madeira" },
      { name: "description", content: "Link oficial do Instagram de Sónia Correia Cabeleireiros. Telefone, morada, horário e serviços em São João da Madeira." },
      { property: "og:title", content: "Sónia Correia Cabeleireiros — São João da Madeira" },
      { property: "og:description", content: "Link oficial do Instagram de Sónia Correia Cabeleireiros. Telefone, morada, horário e serviços em São João da Madeira." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const PHONE_NUMBER = "+351256385045";
const WHATSAPP_NUMBER = "+351923349258";
const ADDRESS = "Rua da Banda da Música 94, São João da Madeira";
const INSTAGRAM_URL = "https://www.instagram.com/soniacorreiacabeleireiros";
const FACEBOOK_URL = "https://www.facebook.com/share/1LhgAJ1v3v/";
const THREADS_URL = "https://www.threads.com/@soniacorreiacabeleireiros";
const MAPS_URL = "https://maps.app.goo.gl/KcxL4je6UDotA8QLA?g_st=aw";
const WHATSAPP_MESSAGE = "Olá! Gostaria de marcar uma consulta/tratamento. Podem ajudar-me?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
const waUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(message)}`;

const services = [
  { title: "Corte Feminino", subtitle: "Corte e acabamento", message: "Olá! Gostaria de marcar um Corte Feminino. Podem ajudar-me com a disponibilidade?" },
  { title: "Coloração", subtitle: "Permanente e semi-permanente", message: "Olá! Tenho interesse em Coloração (permanente ou semi-permanente). Podem indicar-me a disponibilidade?" },
  { title: "Tratamentos Capilares", subtitle: "Hidratação e reconstrução", message: "Olá! Gostaria de saber mais sobre os Tratamentos Capilares e marcar uma sessão." },
  { title: "Alisamento", subtitle: "Queratina e Progressiva", message: "Olá! Tenho interesse em Alisamento (queratina/progressiva). Qual a vossa disponibilidade?" },
  { title: "Penteados Artísticos", subtitle: "Para ocasiões especiais", message: "Olá! Preciso de um Penteado Artístico para uma ocasião especial. Podem ajudar-me a marcar?" },
  { title: "Brushing", subtitle: "Modelagem e brilho", message: "Olá! Gostaria de marcar um Brushing. Qual a vossa disponibilidade?" },
];

const externalLink = { target: "_blank", rel: "noopener noreferrer" } as const;

const gallery = [
  { type: "video" as const, url: galeriaVideo.url },
  { type: "image" as const, url: galeria8.url },
  { type: "image" as const, url: galeria9.url },
  { type: "image" as const, url: galeria10.url },
  { type: "image" as const, url: galeria2.url },
  { type: "image" as const, url: galeria3.url },
  { type: "image" as const, url: galeria4.url },
  { type: "image" as const, url: galeria5.url },
  { type: "image" as const, url: galeria6.url },
  { type: "image" as const, url: galeria7.url },
];

const socials = [
  { href: INSTAGRAM_URL, label: "Instagram", Icon: Instagram, external: true },
  { href: FACEBOOK_URL, label: "Facebook", Icon: Facebook, external: true },
  { href: THREADS_URL, label: "Threads", Icon: AtSign, external: true },
  { href: `tel:${PHONE_NUMBER}`, label: "Telefone", Icon: Phone, external: false },
];

function Index() {
  return (
    <div className="relative min-h-screen font-sans text-brand-text flex flex-col items-center px-5 pb-16">
      {/* Fundo fotográfico com véu para legibilidade */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-paper" aria-hidden="true">
        <img
          src={salonBg.url}
          alt=""
          width={1280}
          height={1920}
          className="h-full w-full object-cover object-[50%_25%] opacity-[0.85]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--brand-bg)_10%,transparent)_0%,color-mix(in_oklab,var(--brand-bg)_70%,transparent)_50%,var(--brand-bg)_100%)]" />
      </div>

      <header className="w-full max-w-md pt-14 sm:pt-20 pb-10 flex flex-col items-center text-center">
        <div className="rise" style={{ animationDelay: "0ms" }}>
          <SalonLogo />
        </div>

        <div
          className="rise mt-8 inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-brand-bg/60 px-4 py-1.5 backdrop-blur-sm"
          style={{ animationDelay: "120ms" }}
        >
          <span className="size-1 rotate-45 bg-brand-gold" aria-hidden="true" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
            Desde há 20+ anos
          </span>
          <span className="size-1 rotate-45 bg-brand-gold" aria-hidden="true" />
        </div>

        <h1 className="rise mt-8 font-serif text-5xl font-bold tracking-tight" style={{ animationDelay: "220ms" }}>
          Sónia Correia
        </h1>
        <p
          className="rise mt-2 text-brand-accent font-medium uppercase text-[12px] tracking-[0.45em] pl-[0.45em]"
          style={{ animationDelay: "300ms" }}
        >
          Cabeleireiros
        </p>

        <Ornament className="rise mt-7" style={{ animationDelay: "380ms" }} />

        <p
          className="rise mt-6 max-w-xs font-serif italic text-[16px] leading-relaxed text-brand-muted"
          style={{ animationDelay: "440ms" }}
        >
          <span className="font-serif text-3xl leading-none text-brand-gold/70 align-[-0.15em]">“</span>
          Mais de 20 anos a cuidar do seu cabelo
          <span className="font-serif text-3xl leading-none text-brand-gold/70 align-[-0.15em]">”</span>
        </p>
      </header>

      <main className="w-full max-w-md">
        {/* CTA principal — WhatsApp */}
        <a
          href={WHATSAPP_URL}
          {...externalLink}
          aria-label="Marcar via WhatsApp"
          style={{ animationDelay: "540ms" }}
          className="rise group flex items-center justify-between w-full surface-dark text-primary-foreground py-6 px-7 rounded-2xl ring-1 ring-brand-gold/40 shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.015] hover:ring-brand-gold/80 active:scale-[0.985]"
        >
          <span className="flex items-center gap-3.5 font-medium tracking-wide">
            <WhatsAppIcon className="size-5 shrink-0 text-brand-gold transition-transform duration-300 group-hover:scale-110" />
            Marcar via WhatsApp
          </span>
          <ArrowRight className="size-5 text-brand-gold transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </a>

        {/* Serviços */}
        <section className="pt-14 pb-8">
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-3">
            Salão
          </p>
          <h2 className="font-serif text-2xl italic text-center">Nossos Serviços</h2>
          <Ornament className="mt-5 mb-8" />
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
              <a
                key={service.title}
                href={waUrl(service.message)}
                {...externalLink}
                aria-label={`Marcar ${service.title} via WhatsApp`}
                className="surface-card border border-brand-gold/15 p-5 rounded-xl flex flex-col items-center text-center shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/50 hover:shadow-gold active:scale-[0.97]"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-brand-accent font-semibold mb-1.5">
                  {service.title}
                </span>
                <span className="text-[10px] text-brand-muted leading-tight">
                  {service.subtitle}
                </span>
                <span className="mt-2.5 inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.15em] text-brand-gold/80">
                  <WhatsAppIcon className="size-3" />
                  Marcar
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Galeria */}
        <section className="pb-10">
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-3">
            Trabalhos
          </p>
          <h2 className="font-serif text-2xl italic text-center">Galeria</h2>
          <Ornament className="mt-5 mb-8" />
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3">
              {gallery.map((photo, i) => (
                <CarouselItem key={photo.url} className="pl-3 basis-4/5 sm:basis-1/2">
                  <div className="relative overflow-hidden rounded-2xl border border-brand-gold/30 shadow-soft aspect-[4/5] bg-brand-surface">
                    {photo.type === "video" ? (
                      <video
                        src={photo.url}
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                        aria-label="Vídeo de trabalhos do salão"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={photo.url}
                        alt={`Trabalho do salão ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--brand-bg)_45%,transparent)_0%,transparent_45%)]" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 border-brand-gold/40 text-brand-gold surface-card" />
            <CarouselNext className="hidden sm:flex -right-4 border-brand-gold/40 text-brand-gold surface-card" />
          </Carousel>
        </section>

        {/* Horário + Morada */}
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
            {...externalLink}
            className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-brand-gold/40 py-3.5 text-sm font-medium tracking-wide text-brand-text transition-all duration-300 hover:bg-brand-gold/10 hover:border-brand-gold/80"
          >
            <MapPin className="size-4 mr-2 text-brand-gold" aria-hidden="true" />
            Abrir no Google Maps
          </a>
        </section>

        {/* Contactos */}
        <section className="pt-14">
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-3">
            Fale connosco
          </p>
          <h2 className="font-serif text-2xl italic text-center">Contactos</h2>
          <Ornament className="mt-5 mb-8" />
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label="Ligar para o salão: 256 385 045"
            className="group flex items-center justify-between w-full surface-card border border-brand-gold/25 py-6 px-7 rounded-2xl shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/70 hover:shadow-gold active:scale-[0.985]"
          >
            <span className="flex items-center gap-3.5 font-medium tracking-wide text-brand-text">
              <Phone className="size-5 shrink-0 text-brand-gold transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              +351 256 385 045
            </span>
            <ArrowRight className="size-4 text-brand-gold/70 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer className="w-full max-w-md mt-12 text-center">
        <Ornament className="mb-8" />
        <div className="flex justify-center items-center gap-4 mb-6">
          {socials.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? externalLink : {})}
              aria-label={label}
              className="flex size-11 items-center justify-center rounded-full border border-brand-gold/35 surface-card text-brand-gold transition-all duration-300 hover:bg-brand-gold/10 hover:scale-110 hover:border-brand-gold/80"
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
