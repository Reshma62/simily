/* Dark-teal section listing the four core services. */

const services = [
  {
    title: "Dental Implant",
    icon: (
      <path d="M12 2C8.5 2 6 3.8 6 7c0 2 .7 3.3 1.3 4.6.5 1.1.8 2.5 1 4.3.2 1.6.4 3.1 1.4 3.1 1.5 0 .9-3.7 2.8-3.7s1.3 3.7 2.8 3.7c1 0 1.2-1.5 1.4-3.1.2-1.8.5-3.2 1-4.3C18.3 10.3 19 9 19 7c0-3.2-3.5-5-7-5Z" />
    ),
  },
  {
    title: "Plaque Removal",
    icon: (
      <path d="M4 3h16v2H4Zm2 4h12l-1 14H7Zm4 3v8h1.5v-8Zm3 0v8h1.5v-8Z" />
    ),
  },
  {
    title: "Root Canal Treatment",
    icon: (
      <path d="M12 2C8.5 2 6 3.8 6 7c0 2 .7 3.3 1.3 4.6.5 1.1.8 2.5 1 4.3.2 1.6.4 3.1 1.4 3.1 1.5 0 .9-3.7 2.8-3.7s1.3 3.7 2.8 3.7c1 0 1.2-1.5 1.4-3.1.2-1.8.5-3.2 1-4.3C18.3 10.3 19 9 19 7c0-3.2-3.5-5-7-5Zm0 4v9h-.01L12 6Z" />
    ),
  },
  {
    title: "Oral Surgery",
    icon: (
      <path d="M19 3h-4.2a3 3 0 0 0-5.6 0H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-7 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm1 14h-2v-3H8v-2h3V9h2v3h3v2h-3Z" />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-teal">
      <div className="wrap">
        <p className="kicker">Professional and trained</p>
        <h2 className="heading mt-4 text-white">Services We Provide</h2>
        <p className="mt-4 max-w-md text-[0.9rem] leading-relaxed text-white/60">
          We consider all the drivers of change gives you the blocks &amp;
          components you need to change to create a truly professional website.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title}>
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-coral text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                  {service.icon}
                </svg>
              </span>

              <h3 className="mt-5 font-display text-[1.05rem] font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-[0.85rem] leading-relaxed text-white/60">
                In the new era of technology we look in the future with
                certainty and pride, that&apos;s why our theme looks so good.
              </p>

              <a
                href="#appointment"
                className="mt-4 inline-flex items-center gap-2 text-[0.8rem] font-medium text-white transition-colors hover:text-aqua"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/40 text-[0.6rem]">
                  →
                </span>
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
