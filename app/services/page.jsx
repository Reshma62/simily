import Image from "next/image";
import Navbar from "@/components/Navbar";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services — Smily Dental Care",
  description:
    "Dental care, implants, plaque removal, oral surgery, root canal treatment and cavity protection.",
};

/* Tooth icon reused across the six service cards. */
function ToothIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M12 2C8.5 2 6 3.8 6 7c0 2 .7 3.3 1.3 4.6.5 1.1.8 2.5 1 4.3.2 1.6.4 3.1 1.4 3.1 1.5 0 .9-3.7 2.8-3.7s1.3 3.7 2.8 3.7c1 0 1.2-1.5 1.4-3.1.2-1.8.5-3.2 1-4.3C18.3 10.3 19 9 19 7c0-3.2-3.5-5-7-5Z" />
    </svg>
  );
}

const services = [
  "Dental Care",
  "Dental Implant",
  "Plaque Removal",
  "Oral Surgery",
  "Root Canal Treatment",
  "Cavity Protection",
];

const reasons = [
  {
    title: "Highly trained dental team",
    text: "In the new era of technology we look in the future with certainty and for any post types.",
  },
  {
    title: "Advanced treatment facilities",
    text: "In the new era of technology we look in the future with the certainty and for any post types.",
  },
  {
    title: "Guaranteed brighter smiles",
    text: "In the new era of technology we look in the future with certainty and for any post types.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* ---- Services grid ---- */}
      <section className="section pt-8">
        <div className="wrap text-center">
          <p className="kicker justify-center">Professional and trained</p>
          <h1 className="heading mt-4">Services We Provide</h1>
          <p className="mx-auto mt-4 max-w-md text-[0.9rem] leading-relaxed text-stone">
            We consider all the drivers of change gives you the blocks &amp;
            components you need to change to create a truly professional
            website.
          </p>

          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((title) => (
              <article key={title} className="mx-auto max-w-xs">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-coral text-white">
                  <ToothIcon />
                </span>
                <h2 className="mt-5 font-display text-[1rem] font-bold">
                  {title}
                </h2>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-stone">
                  In the new era of technology we look in the future with
                  certainty and pride, that&apos;s why our theme looks so good
                  whatever device you use.
                </p>
                <a
                  href="/services/dental-care"
                  className="mt-4 inline-block text-[0.8rem] font-medium text-cyan hover:text-cyan-dark"
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Why choose us ---- */}
      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="kicker">Why choose us</p>
            <h2 className="heading mt-4">
              Taking care of your smile with best possible services
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-stone">
              Experience enhanced efficiency, heightened productivity and a
              greater edge over your competitors..
            </p>

            <div className="mt-8 space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title}>
                  <h3 className="font-display text-[0.95rem] font-bold">
                    {reason.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[0.85rem] leading-relaxed text-stone">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
              alt="Dental team treating a patient"
              width={1000}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Appointment />
      <Footer />
    </main>
  );
}
