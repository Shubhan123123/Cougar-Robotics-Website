import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

import ClientShell from "@/components/layout/ClientShell";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/sections/Footer";
import { SafeDevProvider } from "@/lib/SafeDevContext";
import { getDevFlags } from "@/lib/devFlags";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cougar Robotics — Team 1403",
  description: "Team 1403 Cougar Robotics official site experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const devFlags = getDevFlags();

  return (
    <html
      lang="en"
      data-safe-dev={devFlags.safeDev ? "true" : "false"}
      data-enable-glass={devFlags.enableGlass ? "true" : "false"}
    >
      <body className={`${spaceGrotesk.variable} ${plexSans.variable} antialiased`}>
        <div className="relative min-h-screen overflow-x-hidden bg-background">
          <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-background" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                background:
                  "radial-gradient(900px circle at 20% 10%, rgba(255,255,255,0.10), transparent 55%)",
              }}
            />
          </div>
          <SafeDevProvider flags={devFlags}>
            <ClientShell>
              <div className="relative z-10">
                <Navbar />
                {children}
                <Footer />
              </div>
            </ClientShell>
          </SafeDevProvider>
        </div>
      </body>
    </html>
  );
}
