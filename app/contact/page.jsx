import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Smily Dental Care",
  description: "Contact us today — phone, email, address and contact form.",
};

const contactRows = [
  {
    label: "0123-456-7890",
    href: "tel:01234567890",
    icon: (
      <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1Z" />
    ),
  },
  {
    label: "247service@gmail.com",
    href: "mailto:247service@gmail.com",
    icon: (
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z" />
    ),
  },
  {
    label: "37 Drake Rd #APT 710 Arlington, near the road.",
    href: null,
    icon: (
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    ),
  },
];

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* ---- Contact info ---- */}
      <section className="section pt-8">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[1rem]">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
              alt="Friendly clinic receptionist"
              width={1000}
              height={760}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="kicker">Contact info</p>
            <h1 className="heading-xl mt-4">
              Contact us today
            </h1>
            <p className="text-body mt-5 max-w-lg">
              Fill out the form below and we will contact you in the shortest
              time possible. We consider all the drivers of change gives you
              the blocks &amp; components you need to change to create.
            </p>

            <ul className="mt-8 space-y-5">
              {contactRows.map((row) => (
                <li key={row.label} className="flex items-center gap-4">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-coral" aria-hidden="true">
                    {row.icon}
                  </svg>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="max-w-xs text-base font-semibold hover:text-cyan"
                    >
                      {row.label}
                    </a>
                  ) : (
                    <span className="max-w-xs text-base font-semibold">
                      {row.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Get in touch: form + map ---- */}
      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div>
            <p className="kicker">Write us</p>
            <h2 className="heading mt-4">Get in touch</h2>
            <p className="text-body mt-4 max-w-lg">
              We consider all the drivers of change gives you the blocks &amp;
              components you need to change to create a truly professional
              website.
            </p>

            <form className="mt-8 max-w-md space-y-4" action="#" method="post">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="field"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="field"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="field resize-none"
                required
              />
              <button type="submit" className="btn btn-solid">
                Send Message
              </button>
            </form>
          </div>

          <div className="overflow-hidden rounded-xl border border-ink/10">
            <iframe
              title="Clinic location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=13.28%2C52.48%2C13.34%2C52.51&layer=mapnik&marker=52.495%2C13.31"
              className="h-full min-h-[24rem] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
