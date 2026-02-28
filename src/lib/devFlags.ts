export type DevFlags = {
  safeDev: boolean;
  enableMotion: boolean;
  enableScroll: boolean;
  enableObservers: boolean;
  enableHeroImage: boolean;
  enableGlass: boolean;
  enableBackground: boolean;
};

const isEnabled = (value: string | undefined) => value === "1";

export const getDevFlags = (): DevFlags => {
  const isDev = process.env.NODE_ENV !== "production";
  // Default to safe mode in dev unless explicitly disabled.
  const safeDev = isDev && process.env.SAFE_DEV !== "0" && process.env.SAFE_MODE !== "0";
  const allow = (value: string | undefined) => !safeDev || isEnabled(value);

  return {
    safeDev,
    enableMotion: allow(process.env.ENABLE_MOTION),
    enableScroll: allow(process.env.ENABLE_SCROLL),
    enableObservers: allow(process.env.ENABLE_OBSERVERS),
    enableHeroImage: allow(process.env.ENABLE_HERO_IMAGE),
    enableGlass: allow(process.env.ENABLE_GLASS),
    enableBackground: allow(process.env.ENABLE_BACKGROUND),
  };
};
