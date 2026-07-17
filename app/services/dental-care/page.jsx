import Image from "next/image";
import Navbar from "@/components/Navbar";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dental Care — Smily Dental Care",
  description:
    "Our dental care service overview, opening hours and how to book.",
};

const hours = [
  { day: "Monday", time: "9:00 AM - 7:00 PM" },
  { day: "Tuesday", time: "9:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "9:00 AM - 7:00 PM" },
  { day: "Thursday", time: "9:00 AM - 7:00 PM" },
  { day: "Friday", time: "11:00 AM - 5:00 PM", highlight: true },
  { day: "Saturday", time: "9:00 AM - 7:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const sedationLevels = [
  "Minimal sedation – you are awake but relaxed.",
  "Moderate sedation (formerly called “conscious sedation”) – you may slur your words when speaking and not remember much of the procedure.",
  "Deep sedation – you are on the edge of consciousness but can still be awakened.",
  "Side effects from local anesthetics are very rare, and the anesthetic usually lasts for only a couple of hours.",
  "anesthesia – you are completely unconscious.",
];

export default function DentalCarePage() {
  return (
    <main>
      <Navbar />

      <section className="section pt-8">
        <div className="wrap">
          <h1 className="heading-xl text-center">
            Dental Care
          </h1>

          {/* ---- Cover image ---- */}
          <div className="mt-10 overflow-hidden rounded-[1.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=80"
              alt="Dental care procedure in progress"
              width={1600}
              height={800}
              priority
              className="h-[26rem] max-h-[50vh] w-full object-cover"
            />
          </div>

          {/* ---- Article + sidebar ---- */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.7fr_1fr]">
            {/* Article */}
            <article>
              <p className="text-body">
                Experience enhanced efficiency, heightened productivity and a
                greater edge over your competitors. In the new era of
                technology we look in the future with certainty and pride,
                that&apos;s why our theme looks so good whatever device you
                use. We consider all the drivers of change gives you the blocks
                &amp; components you need to change to create a truly
                professional website.
              </p>

              <h2 className="heading-sm mt-8">
                Our Service Overview
              </h2>
              <p className="text-body mt-3">
                Companies seem to dislike the term &lsquo;turnaround
                consulting&rsquo; because it represents failure. The truth is
                that turnaround consulting represents success at realizing the
                company is going in the wrong direction. The only time the
                company fails is when it is not possible to do a turnaround
                anymore companies pivot into more.
              </p>

              <ul className="text-body mt-5 list-disc space-y-2 pl-5 marker:text-ink">
                {sedationLevels.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-8 overflow-hidden rounded-[1rem]">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80"
                  alt="Woman with a bright healthy smile"
                  width={900}
                  height={520}
                  className="w-full object-cover"
                />
              </div>

              <h2 className="heading-sm mt-8">
                Importance of the proper dental treatment
              </h2>
              <p className="text-body mt-3">
                A neatly maintained building is an important asset to every
                organization. It reflects who you are and influences how your
                first priority should be considered as our customers perceive
                you to complete depending on the size. A neatly maintained
                very building is an most of important asset to every
                organization. It reflects who you are and influences how your
                customers perceive you to complete depending on the size.
              </p>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
              {/* Opening hours */}
              <div className="card">
                <h2 className="heading-sm">
                  Opening Hours
                </h2>
                <ul className="mt-4">
                  {hours.map((row) => (
                    <li
                      key={row.day}
                      className={`flex items-center justify-between border-b border-ink/10 py-3 text-sm last:border-0 ${
                        row.highlight ? "text-coral" : "text-ink"
                      }`}
                    >
                      <span>{row.day}</span>
                      <span className={row.highlight ? "" : "text-stone"}>
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call us card */}
              <div className="card border-0 bg-cyan text-white">
                <h2 className="heading-sm text-white">
                  Call us today!
                </h2>
                <p className="text-small mt-2 text-white/80">
                  Fill out the form below and we will contact you in the
                  shortest time possible.
                </p>
                <a
                  href="tel:01234567890"
                  className="heading-sm mt-4 inline-flex items-center gap-3 text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1Z" />
                  </svg>
                  0123-456-7890
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Appointment />
      <Footer />
    </main>
  );
}
