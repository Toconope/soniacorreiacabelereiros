import salonLogo from "@/assets/salon-logo.png.asset.json";

/**
 * Para trocar o logótipo mais tarde:
 * 1. Coloque o novo ficheiro em src/assets (ou use um URL público)
 * 2. Substitua o valor de LOGO_URL abaixo — mais nada precisa de ser alterado.
 */
export const LOGO_URL: string = salonLogo.url;

export const LOGO_ALT = "Logótipo de Sónia Correia Cabeleireiros";

/** "circle" para redondo, "rounded" para quadrado com cantos arredondados. */
export const LOGO_SHAPE: "circle" | "rounded" = "circle";
