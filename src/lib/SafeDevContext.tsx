"use client";

import { createContext, useContext } from "react";
import type { DevFlags } from "@/lib/devFlags";

const defaultFlags: DevFlags = {
  safeDev: false,
  enableMotion: true,
  enableScroll: true,
  enableObservers: true,
  enableHeroImage: true,
  enableGlass: true,
  enableBackground: true,
};

const SafeDevContext = createContext<DevFlags>(defaultFlags);

export const SafeDevProvider = ({
  flags,
  children,
}: {
  flags: DevFlags;
  children: React.ReactNode;
}) => <SafeDevContext.Provider value={flags}>{children}</SafeDevContext.Provider>;

export const useDevFlags = () => useContext(SafeDevContext);
