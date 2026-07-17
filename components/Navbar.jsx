import Logo from "./Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/services" },
  { label: "Appointment", href: "/appointment" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="wrap flex items-center justify-between gap-4 px-[1.5rem] py-5 md:px-[6rem]">
      <Logo />

      <nav className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[0.85rem] text-ink transition-colors hover:text-cyan"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a href="/appointment" className="btn btn-solid">
        Book An Appointment
      </a>
    </header>
  );
}
