"use client"

import { Button } from "@/components/ui/button"
import clsx from "clsx";
import { ArrowRight, Sparkles, Rocket, Code2, Cpu, Network, Database, Cloud, BrainCircuit } from "lucide-react"
import Image from "next/image";
import { useEffect, useState } from "react"

type Star = {
  left: string;
  top: string;
  delay: string;
  duration: string;
};

export function Hero() {
  const [mounted, setMounted] = useState(false)
   const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setMounted(true);
    const generated = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 2}s`,
    }));

    setStars(generated);
  }, [])

  const orbitIcons = [
    {
      icon: Rocket,
      color: "text-primary",
      borderColor: "border-primary/30",
      angle: 0,
    },
    {
      icon: Code2,
      color: "text-cyan-500",
      borderColor: "border-cyan-500/30",
      angle: 51,
    },
    {
      icon: Cpu,
      color: "text-purple-500",
      borderColor: "border-purple-500/30",
      angle: 102,
    },
    {
      icon: Network,
      color: "text-primary",
      borderColor: "border-primary/30",
      angle: 153,
    },
    {
      icon: Database,
      color: "text-cyan-500",
      borderColor: "border-cyan-500/30",
      angle: 204,
    },
    {
      icon: Cloud,
      color: "text-purple-500",
      borderColor: "border-purple-500/30",
      angle: 255,
    },
    {
      icon: BrainCircuit,
      color: "text-primary",
      borderColor: "border-primary/30",
      angle: 306,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-14">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background">
        {/* Animated stars */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/40 animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-size[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-float rounded-full bg-linear-to-br from-primary/30 to-purple-500/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-80 w-80 animate-float rounded-full bg-linear-to-br from-cyan-500/20 to-primary/20 blur-3xl [animation-delay:2s]" />
        <div className="absolute bottom-1/4 left-1/3 h-72 w-72 animate-float rounded-full bg-linear-to-br from-primary/25 to-indigo-500/15 blur-3xl [animation-delay:4s]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center pb-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className={`mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm transition-all duration-1000 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Tecnología de Vanguardia
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-foreground transition-all duration-1000 delay-100 md:text-7xl ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              El futuro de la{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-primary via-cyan-500 to-primary/60 bg-clip-text text-transparent">
                  tecnología
                </span>
                <span className="absolute inset-0 animate-pulse-glow bg-primary/20 blur-xl" />
              </span>{" "}
              está aquí
            </h1>

            {/* Description */}
            <p
              className={`mb-10 text-balance text-lg leading-relaxed text-muted-foreground transition-all duration-1000 delay-200 md:text-xl ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Transformamos ideas en soluciones digitales innovadoras.
              Consultoría estratégica, desarrollo de software a medida e
              infraestructura cloud de última generación.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col items-start gap-4 sm:flex-row transition-all duration-1000 delay-300 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Button
                size="lg"
                className="group gap-2 px-8"
              >
                Comenzar ahora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-8 bg-transparent"
              >
                Ver servicios
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-400 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative aspect-square max-w-2xl mx-auto">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-purple-500/20 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />

              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin-slow" />
              <div
                className="absolute inset-8 rounded-full border border-primary/15 animate-spin-reverse"
                style={{ animationDuration: "15s" }}
              />
              <div
                className="absolute inset-16 rounded-full border-2 border-cyan-500/20 animate-spin-slow"
                style={{ animationDuration: "20s" }}
              />
              <div
                className="absolute inset-24 rounded-full border border-purple-500/15 animate-spin-reverse"
                style={{ animationDuration: "25s" }}
              />
              <div
                className="absolute inset-32 rounded-full border-2 border-primary/10 animate-spin-slow"
                style={{ animationDuration: "30s" }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                {/* Astronaut Image */}
                <div className="relative flex items-center justify-center z-20 w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-500/30 via-primary/20 to-cyan-500/30 blur-xl animate-pulse-slow" />
                  <Image
                    src="/icons/astronaut-gravity.svg"
                    alt="Astronaut"
                    width={250}
                    height={250}
                    className="animate-float"
                  />
                </div>

                <div
                  className="absolute top-1/4 left-0 w-16 h-16 rounded-full bg-linear-to-br from-cyan-500/40 to-blue-600/40 blur-sm animate-float shadow-lg shadow-cyan-500/20"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute bottom-1/4 right-0 w-20 h-20 rounded-full bg-linear-to-br from-purple-500/40 to-pink-600/40 blur-sm animate-float shadow-lg shadow-purple-500/20"
                  style={{ animationDelay: "2s" }}
                />
                <div
                  className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-linear-to-br from-primary/50 to-cyan-500/50 blur-sm animate-float shadow-lg shadow-primary/20"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute bottom-1/3 left-1/3 w-14 h-14 rounded-full bg-linear-to-br from-indigo-500/40 to-purple-500/40 blur-sm animate-float shadow-lg shadow-indigo-500/20"
                  style={{ animationDelay: "3s" }}
                />
                <div
                  className="absolute top-1/2 left-0 w-10 h-10 rounded-full bg-linear-to-br from-pink-500/40 to-rose-500/40 blur-sm animate-float shadow-lg shadow-pink-500/20"
                  style={{ animationDelay: "2.5s" }}
                />

                {orbitIcons.map((item, index) => {
                  const Icon = item.icon;
                  // Calculate position on a circle (orbit radius is 45% of container)
                  const orbitRadius = 45;
                  const radians = (item.angle * Math.PI) / 180;
                  const x = Number(
                    (Math.cos(radians) * orbitRadius).toFixed(3)
                  );
                  const y = Number(
                    (Math.sin(radians) * orbitRadius).toFixed(3)
                  );

                  return (
                    <div
                      key={index}
                      className={` absolute p-3 rounded-full border hover:scale-110 ${item.borderColor} bg-background/80 backdrop-blur-sm animate-orbit-float transition-transform duration-700`}
                      style={{
                        left: `calc(50% + ${x}%)`,
                        top: `calc(50% + ${y}%)`,
                        transform: "translate(-50%, -50%)",
                        animationDelay: `${index * 0.5}s`,
                      }}
                    >
                      <Icon />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
