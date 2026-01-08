"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const partners = [
  { name: "alibaba", logo: "alibaba" },
  { name: "autopista rio magdalena", logo: "autopista_rio_magdalena" },
  { name: "bestcosmetics", logo: "bestcosmetics" },
  { name: "cohan", logo: "cohan" },
  { name: "construcrisma", logo: "construcrisma" },
  { name: "cv digital", logo: "cv_digital" },
  { name: "ess", logo: "ess" },
  { name: "excelec", logo: "excelec" },
  { name: "gamaa", logo: "gamaa" },
  { name: "icomtelco", logo: "icomtelco" },
  { name: "mkd", logo: "mkd" },
  { name: "orience", logo: "orience" },
  { name: "pascual_bravo", logo: "pascual_bravo" },
  { name: "telemetrik", logo: "telemetrik" },
  { name: "unica", logo: "unica" },
  { name: "wi-calling", logo: "wi-calling" },
];

export function PartnersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-muted/50 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm font-medium mb-8 uppercase tracking-wider">
          Empresas que confían en nosotros
        </p>

        <div
          ref={scrollRef}
          className="flex gap-12 overflow-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="group shrink-0 flex items-center justify-center w-32 h-32 bg-white rounded-lg hover:border hover:border-border transition-all"
            >
              <div className="flex items-center gap-2 group-hover:scale-110 transition-transform">
                {/* <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"> */}
                {/* <span className="text-primary font-bold text-sm">{partner.logo}</span> */}
                <Image
                  src={`/clients/${partner.logo}.png`}
                  width={100}
                  height={100}
                  alt={partner.name}
                />
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
