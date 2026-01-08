"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code2, Server, Smartphone, Database, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Brain,
    title: "Consultoría Estratégica",
    description: "Asesoramiento experto para optimizar procesos y adoptar las mejores tecnologías para tu negocio.",
  },
  {
    icon: Code2,
    title: "Desarrollo a Medida",
    description: "Creamos software personalizado que se adapta perfectamente a tus necesidades específicas.",
  },
  {
    icon: Server,
    title: "Infraestructura Cloud",
    description: "Diseño e implementación de arquitecturas escalables y resilientes en la nube.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Desarrollo de apps nativas y multiplataforma con experiencias de usuario excepcionales.",
  },
  {
    icon: Database,
    title: "Big Data & Analytics",
    description: "Soluciones de análisis de datos para tomar decisiones inteligentes basadas en información.",
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Protección integral de tus sistemas con las últimas tecnologías en seguridad informática.",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="servicios" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2
            className={`mb-4 text-balance text-4xl font-bold text-foreground transition-all duration-700 md:text-5xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Servicios que impulsan tu{" "}
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              transformación digital
            </span>
          </h2>
          <p
            className={`text-balance text-lg text-muted-foreground transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Ofrecemos un ecosistema completo de soluciones tecnológicas para llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`group cursor-default border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-200 hover:border-primary/50 hover:scale-105 hover:bg-card ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
