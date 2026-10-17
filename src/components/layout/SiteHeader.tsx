"use client";

import { CircleUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/cursos/", label: "Cursos" },
  { href: "/herramientas/", label: "Herramientas" },
] as const;

function isActive(pathname: string, href: string) {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return href === "/" ? path === "/" : path.startsWith(href);
}

/** `currentPath` overrides the router path (only for the design page demo). */
export function SiteHeader({ currentPath }: { currentPath?: string } = {}) {
  const routerPath = usePathname();
  const pathname = currentPath ?? routerPath ?? "/";
  const profileActive = isActive(pathname, "/perfil/");
  return (
    <header className="border-b border-line bg-bg">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between px-4 sm:h-16 sm:flex-nowrap sm:px-6">
        <Link href="/" className="flex h-14 items-center rounded-sm sm:h-auto" aria-label="Finaula, inicio">
          <Logo size="md" />
        </Link>
        <Link
          href="/perfil/"
          aria-label="Perfil"
          aria-current={profileActive ? "page" : undefined}
          className={`order-2 grid size-11 place-items-center rounded-full sm:order-3 ${
            profileActive ? "bg-soft text-on-soft" : "text-ink hover:bg-sunken"
          }`}
        >
          <CircleUser size={24} strokeWidth={1.8} aria-hidden="true" />
        </Link>
        <nav aria-label="Principal" className="order-3 -mx-1 w-full sm:order-2 sm:mx-0 sm:ml-auto sm:w-auto sm:pr-2">
          <ul className="flex gap-1 sm:gap-2">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative flex min-h-11 items-center px-2 text-small font-medium sm:px-3 ${
                      active
                        ? "text-ink after:absolute after:inset-x-2 after:bottom-0 after:h-[3px] after:rounded-full after:bg-accent sm:after:-bottom-[10px] sm:after:inset-x-3"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
