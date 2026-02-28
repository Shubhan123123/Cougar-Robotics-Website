"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import styles from "./TiltedParallaxGallery.module.css";
import { useDevFlags } from "@/lib/SafeDevContext";

const galleryImages = [
  "/images/buildseason/Copy%20of%20IMG_2121.JPG",
  "/images/buildseason/Copy%20of%20IMG_3643.JPG",
  "/images/buildseason/Copy%20of%20IMG_8613.JPG",
  "/images/buildseason/Copy%20of%20IMG_9369.JPG",
  "/images/buildseason/Copy%20of%20IMG_9026.JPG",
  "/images/buildseason/Copy%20of%20IMG_9245.JPG",
];

const TiltedParallaxGallery = () => {
  const shouldReduceMotion = useReducedMotion();
  const { enableMotion } = useDevFlags();
  const allowMotion = enableMotion && !shouldReduceMotion;

  return (
    <section className="border-b border-black/10 bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Build season</p>
            <h2 className="text-3xl uppercase tracking-[0.25em] text-black">Drifting Prototypes</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-black/70">
            Engineering snapshots from design reviews, outreach events, and competition prep.
          </p>
        </div>
        <div
          className="grid gap-6"
          style={{
            transform: allowMotion
              ? "perspective(1200px) rotateX(10deg) rotateZ(-8deg)"
              : "perspective(1200px) rotateX(2deg) rotateZ(-2deg)",
          }}
        >
          {[galleryImages.slice(0, 3), galleryImages.slice(3, 6), galleryImages.slice(1, 4)].map(
            (rowImages, rowIndex) => {
              const isReverse = rowIndex % 2 === 1;
              const loopImages = [...rowImages, ...rowImages, ...rowImages];
              const trackImages = [...loopImages, ...loopImages];
              return (
                <div
                  key={`row-${rowIndex}`}
                  className={`${styles.row} ${styles.fadeMask}`}
                  data-motion={allowMotion}
                >
                  <div className={isReverse ? styles.trackReverse : styles.track}>
                    {trackImages.map((src, index) => (
                      <div key={`${src}-${index}`} className={styles.item}>
                        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/80">
                          <Image
                            src={src}
                            alt="Cougar Robotics gallery image"
                            width={520}
                            height={320}
                            className="h-48 w-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default TiltedParallaxGallery;
