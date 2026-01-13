import { Facebook } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <svg className="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold">TechFlow</span> */}
              <Image
                src="/logo.png"
                alt="Sytem Tech SAS"
                width={200}
                height={200}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Innovación tecnológica al servicio de tu negocio
            </p>
            {/* Social Networks */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                Síguenos
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary hover:bg-primary transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                {/* <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary hover:bg-primary transition-colors group"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary hover:bg-primary transition-colors group"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary hover:bg-primary transition-colors group"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.663.072-4.949.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Consultoría
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Desarrollo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Infraestructura
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Seguridad
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Empresa
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Nosotros
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Casos de éxito
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Carreras
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Términos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} SystemTech. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
