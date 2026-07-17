import Logo from "./Logo";

const columns = [
  {
    title: "Company",
    links: ["About", "Pricing", "Blog", "Careers"],
  },
  {
    title: "Product",
    links: ["Saas Company", "Marketplace", "API"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Partner Program", "What is SaaS?", "SaaS Comparison"],
  },
  {
    title: "Support",
    links: ["Community", "Knowledge Base", "Academy", "Newsletter"],
  },
];

const socials = [
  {
    name: "Facebook",
    icon: <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.4V4.9c-.3 0-1.2-.1-2.3-.1a3.6 3.6 0 0 0-3.9 4V11H8v3h2.2v7Z" />,
  },
  {
    name: "Twitter",
    icon: <path d="M22 5.9a8.2 8.2 0 0 1-2.4.7 4.1 4.1 0 0 0 1.8-2.3 8.2 8.2 0 0 1-2.6 1A4.1 4.1 0 0 0 11.7 9 11.7 11.7 0 0 1 3.2 4.7a4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.8A8.3 8.3 0 0 1 2 18.4a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5A8.4 8.4 0 0 0 22 5.9Z" />,
  },
  {
    name: "Instagram",
    icon: <path d="M12 2.2c2.7 0 3 0 4.1.1a5.6 5.6 0 0 1 1.9.3 3.9 3.9 0 0 1 2.3 2.3 5.6 5.6 0 0 1 .3 1.9c.1 1.1.1 1.4.1 4.1s0 3-.1 4.1a5.6 5.6 0 0 1-.3 1.9 3.9 3.9 0 0 1-2.3 2.3 5.6 5.6 0 0 1-1.9.3c-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1a5.6 5.6 0 0 1-1.9-.3 3.9 3.9 0 0 1-2.3-2.3 5.6 5.6 0 0 1-.3-1.9C3.3 15 3.2 14.7 3.2 12s0-3 .1-4.1a5.6 5.6 0 0 1 .3-1.9 3.9 3.9 0 0 1 2.3-2.3 5.6 5.6 0 0 1 1.9-.3c1.1-.1 1.4-.2 4.2-.2Zm0 4.7A5.1 5.1 0 1 0 17.1 12 5.1 5.1 0 0 0 12 6.9Zm0 8.4A3.3 3.3 0 1 1 15.3 12 3.3 3.3 0 0 1 12 15.3Zm5.3-9.7a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2Z" />,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-teal text-white">
      <div className="wrap section">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <Logo light />
            <p className="mt-3 text-[0.85rem] text-white/60">
              Bring smile on your face
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.9rem] font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[0.85rem] text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-[0.8rem] text-white/60">
            Copyright © 2026 Smily. All Rights Reserved
          </p>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href="#"
                aria-label={s.name}
                className="text-white/60 transition-colors hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
