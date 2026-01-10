"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  const sendEmail = () => {
    window.location.href = "mailto:info@systemtech.com.co";
  };

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[2rem_2rem] opacity-20" />
          <div className="absolute right-0 top-0 h-64 w-64 bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 bg-primary/10 blur-3xl" />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
                ¿Listo para innovar?
              </h2>
              <p className="mb-8 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
                Transforma tu visión en realidad con nuestro equipo de expertos.
                Agenda una consulta gratuita y descubre cómo podemos impulsar tu
                negocio.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="group gap-2 px-8 cursor-pointer"
                  onClick={sendEmail}
                >
                  <Mail className="h-4 w-4" />
                  Contactar ahora
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="default"
                  // onClick={sendEmail}
                  className="px-8 cursor-pointer bg-gray-600 hover:bg-gray-600/90 text-white"
                >
                  Ver casos de éxito
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
