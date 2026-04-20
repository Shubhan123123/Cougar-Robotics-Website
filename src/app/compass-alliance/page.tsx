import type { Metadata } from "next";
import CompassAlliancePage from "@/components/pages/CompassAlliancePage";

export const metadata: Metadata = {
  title: "The Compass Alliance | Cougar Robotics",
  description:
    "The Compass Alliance is a global FRC resource initiative supported by Team 1403 Cougar Robotics.",
};

export default function Page() {
  return <CompassAlliancePage />;
}
