import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";
import salonAvatar from "@/assets/salon-avatar.jpg";

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
const PHONE_DISPLAY = "256 000 000";
const ADDRESS = "Rua da Banda da Música 94, São João da Madeira";
const INSTAGRAM_URL = "https://instagram.com/soniacorreiacabeleireiros";
const FACEBOOK_URL = "https://facebook.com/soniacorreiacabeleireiros";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
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
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text flex flex-col items-center px-5 pb-12">
      <header className="w-full max-w-md pt-12 pb-8 flex flex-col items-center text-center">
        <div className="mb-6 relative">
          <div className="size-32 rounded-full bg-brand-surface outline outline-1 outline-brand-text/5 overflow-hidden shadow-sm">
            <img
              src={salonAvatar}
              alt="Logótipo de Sónia Correia Cabeleireiros"
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-brand-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">
            20+ Anos
          </div>
        </div>
        <h1 className="font-serif text-3xl font-bold tracking-tight mb-1">
          Sónia Correia
        </h1>
        <p className="text-brand-accent font-semibold tracking-widest text-xs uppercase">
          Cabeleireiros
        </p>
        <p className="mt-4 text-brand-muted italic font-serif text-sm leading-relaxed">
          "Mais de 20 anos a cuidar do seu cabelo"
        </p>
      </header>

      <main className="w-full max-w-md space-y-4">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="group flex items-center justify-between w-full bg-brand-text text-primary-foreground py-5 px-7 rounded-2xl shadow-xl shadow-brand-text/10 active:scale-[0.98] transition-all"
          aria-label="Ligar para o salão"
        >
          <span className="flex items-center gap-3 font-semibold tracking-wide">
            <Phone className="size-5 shrink-0" aria-hidden="true" />
            Ligar agora
          </span>
          <ArrowRight className="size-5 opacity-50 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </a>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between w-full bg-white border border-brand-surface py-5 px-7 rounded-2xl shadow-sm active:scale-[0.98] transition-all"
          aria-label="Ver localização no Google Maps"
        >
          <span className="flex items-center gap-3 font-semibold tracking-wide text-brand-text">
            <MapPin className="size-5 shrink-0 text-brand-accent" aria-hidden="true" />
            Ver localização
          </span>
          <span className="text-sm text-brand-accent">Ver Mapa</span>
        </a>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between w-full bg-white border border-brand-surface py-5 px-7 rounded-2xl shadow-sm active:scale-[0.98] transition-all"
          aria-label="Segir Sónia Correia Cabeleireiros no Instagram"
        >
          <span className="flex items-center gap-3 font-semibold tracking-wide text-brand-text">
            <Instagram className="size-5 shrink-0 text-brand-accent" aria-hidden="true" />
            Seguir no Instagram
          </span>
          <span className="text-sm text-brand-accent italic font-serif">@soniacorreiacabeleireiros</span>
        </a>

        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between w-full bg-white border border-brand-surface py-5 px-7 rounded-2xl shadow-sm active:scale-[0.98] transition-all"
          aria-label="Segir Sónia Correia Cabeleireiros no Facebook"
        >
          <span className="flex items-center gap-3 font-semibold tracking-wide text-brand-text">
            <Facebook className="size-5 shrink-0 text-brand-accent" aria-hidden="true" />
            Facebook
          </span>
          <span className="text-sm text-brand-accent">Seguir</span>
        </a>

        <section className="pt-10 pb-6">
          <h2 className="font-serif text-xl mb-6 text-center italic">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-brand-surface/60 p-4 rounded-xl flex flex-col items-center text-center"
              >
                <span className="text-xs uppercase tracking-widest text-brand-accent font-bold mb-1">
                  {service.title}
                </span>
                <span className="text-[10px] text-brand-muted leading-tight">
                  {service.subtitle}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-7 border border-brand-surface">
          <h3 className="font-serif text-lg mb-4 border-b border-brand-surface pb-2">
            Horário
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-brand-muted">Terça a Sábado</span>
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

          <h3 className="font-serif text-lg mt-8 mb-4 border-b border-brand-surface pb-2">
            Onde Estamos
          </h3>
          <p className="text-sm text-brand-muted mb-4">
            Rua da Banda da Música 94,<br />
            São João da Madeira
          </p>
          <div className="w-full aspect-[2/1] bg-brand-surface rounded-xl overflow-hidden outline outline-1 outline-brand-text/5">
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
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-brand-surface py-3 text-sm font-semibold text-brand-text transition-colors hover:bg-brand-surface/50"
          >
            <MapPin className="size-4 mr-2 text-brand-accent" aria-hidden="true" />
            Abrir no Google Maps
          </a>
        </section>
      </main>

      <footer className="w-full max-w-md mt-12 text-center">
        <div className="flex justify-center items-center gap-6 mb-4 text-brand-accent">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-brand-gold transition-colors"
          >
            <Instagram className="size-5" aria-hidden="true" />
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-brand-gold transition-colors"
          >
            <Facebook className="size-5" aria-hidden="true" />
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label="Telefone"
            className="hover:text-brand-gold transition-colors"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-brand-muted">
          © {new Date().getFullYear()} Sónia Correia Cabeleireiros
        </p>
        <p className="text-[9px] text-brand-muted/60 mt-2">
          São João da Madeira, Portugal
        </p>
      </footer>
    </div>
  );
}
