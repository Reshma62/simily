"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/services" },
  { label: "Appointment", href: "/appointment" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  /* Track scroll — after 10px the header gets a solid bg + shadow. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* "/" matches exactly; other links also match their sub-routes
     (e.g. /services/dental-care keeps "Service" active). */
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* Home: fixed + transparent, overlapping the hero; turns solid on scroll.
     Other pages: normal sticky white header, shadow appears on scroll. */
  const headerBg = isHome
    ? scrolled
      ? "fixed inset-x-0 bg-white/95 shadow-md backdrop-blur"
      : "fixed inset-x-0 bg-transparent"
    : scrolled
      ? "sticky bg-white/95 shadow-md backdrop-blur"
      : "sticky bg-white";

  return (
    <header
      className={`top-0 z-50 w-full py-4 px-[1.5rem] md:px-[6rem] pr-3
        transition-[background-color,box-shadow] duration-300 ${headerBg}`}
    >
      <div className="wrap flex items-center justify-between gap-4">
        <div className="flex items-center gap-9">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative pb-1 text-sm transition-colors hover:text-cyan
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                after:origin-left after:bg-cyan after:transition-transform after:duration-300
                ${
                  isActive(link.href)
                    ? "text-cyan after:scale-x-100"
                    : "text-ink after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="pr-3">
          <a href="/appointment" className="btn btn-solid">
            Book An Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
