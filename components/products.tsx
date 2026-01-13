"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Route, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: MapPin,
    name: "SystemTrack",
    tagline: "Geolocalización y Rastreo Inteligente",
    description:
      "Prestamos servicios de Geolocalización y rastreo vehicular, gestión de flotas y rastreo de personas u objetos entre otros, por medio de plataformas Web y para dispositivos móviles Android, permitiendo tener información actualizada con respecto a la ubicación y operación.",
    features: [
      "Rastreo vehicular en tiempo real",
      "Gestión de flotas",
      "Rastreo de personas y objetos",
      "Plataforma Web y móvil Android",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Route,
    name: "SystemRut",
    tagline: "Gestión Inteligente de Rutas",
    description:
      "Prestamos servicios de gestión, control y administración de rutas para vehículos de servicios especiales, con la finalidad de realizar seguimiento y control a los pasajeros de estos servicios, por medio de plataformas Web y un dispositivo móvil implantado en los vehículos, permitiendo así tener la ubicación de cada pasajero mientras este se encuentre dentro de los vehículos.",
    features: [
      "Control de rutas de servicio especial",
      "Seguimiento de pasajeros",
      "Plataforma Web integrada",
      "Dispositivo móvil en vehículos",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Shield,
    name: "SystemAcces",
    tagline: "Control de Acceso Avanzado",
    description:
      "Prestamos servicios de Control de Acceso en ambientes abiertos y cerrados, donde tenemos la capacidad de asistir el acceso a edificaciones, eventos y reloj de tiempos para empleados, por medio de una plataforma Web que permite la administración y visualización de información on-line desde cualquier lugar.",
    features: [
      "Control de acceso a edificaciones",
      "Gestión de eventos",
      "Reloj de tiempos para empleados",
      "Administración en tiempo real",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

export function Products() {
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
      id="productos"
      className="relative py-24 bg-muted/30"
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
            Nuestros{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Productos Propios
            </span>
          </h2>
          <p
            className={`text-balance text-lg text-muted-foreground transition-all duration-700 delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Soluciones tecnológicas innovadoras diseñadas y desarrolladas por
            nuestro equipo para resolver necesidades específicas del mercado
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-border/50 bg-card backdrop-blur-sm transition-all duration-700 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <CardHeader className="relative">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <p className="text-sm font-semibold text-primary">
                    {product.tagline}
                  </p>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <CardDescription className="leading-relaxed text-base">
                    {product.description}
                  </CardDescription>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">
                      Características clave:
                    </p>
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                  >
                    Conocer más
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
