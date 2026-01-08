"use client";

import { icons } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const technologies = [
  { name: "React", category: "Frontend", icon: "reactjs" },
  { name: "Next.js", category: "Framework", icon: "nextjs" },
  { name: "TypeScript", category: "Lenguaje", icon: "typescript" },
  { name: "Java", category: "Lenguaje", icon: "java" },
  { name: "Spring Boot", category: "Backend", icon: "springboot" },
  { name: "Node.js", category: "Backend", icon: "nodejs" },
  { name: "Python", category: "Backend", icon: "python" },
  { name: "AWS", category: "Cloud", icon: "aws" },
  // { name: "Azure", category: "Cloud" },
  // { name: "Kubernetes", category: "DevOps" },
  { name: "Docker", category: "DevOps", icon: "docker" },
  { name: "PostgreSQL", category: "Database", icon: "postgresql" },
  { name: "MySQL", category: "Database", icon: "mysql" },
  { name: "Oracle", category: "Database", icon: "oracle" },
  // { name: "MongoDB", category: "Database" },
  // { name: "GraphQL", category: "API" },
];

export function Technologies() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tecnologias"
      className="relative bg-secondary/20 py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2
            className={`mb-4 text-balance text-4xl font-bold text-foreground transition-all duration-700 md:text-5xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Stack tecnológico de{" "}
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              última generación
            </span>
          </h2>
          <p
            className={`text-balance text-lg text-muted-foreground transition-all duration-700 delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Trabajamos con las herramientas y plataformas más avanzadas del
            mercado
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`group cursor-default relative overflow-hidden rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-700 hover:border-primary/50 hover:bg-card ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="relative flex items-center gap-2 justify-between z-10">
                  <div>
                    <div className="mb-2 text-sm md:text-lg font-semibold text-foreground">
                      {tech.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {tech.category}
                    </div>
                  </div>
                  
                  <Image
                    src={`/icons/${tech.icon}.svg`}
                    alt={tech.name}
                    width={30}
                    height={30}
                    className="w-7 md:w-10"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

