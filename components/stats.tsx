"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "500+", label: "Proyectos completados", suffix: "" },
  { value: "98", label: "Satisfacción del cliente", suffix: "%" },
  { value: "50+", label: "Tecnologías dominadas", suffix: "" },
  { value: "24/7", label: "Soporte disponible", suffix: "" },
]

export function Stats() {
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
    <section ref={sectionRef} className="relative border-y border-border/40 bg-secondary/20 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
