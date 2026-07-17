import Image from "next/image";
import Navbar from "@/components/Navbar";
import WorkWithUs from "@/components/WorkWithUs";
import Team from "@/components/Team";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Smily Dental Care",
  description:
    "We have expert dentists you can trust. Meet the Smily dental team.",
};

const stats = [
  { value: "100+", label: "Professional Dentists" },
  { value: "78%", label: "Successful Surgery Rate" },
  { value: "854", label: "Happy Clients With Smile" },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* ---- Intro: heading left, blurb right ---- */}
      <section className="section pt-8">
        <div className="wrap">
          <div className="grid items-end gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="kicker">About our clinic</p>
              <h1 className="heading mt-4 text-[clamp(2rem,3.5vw,2.75rem)]">
                We have expert dentists,
                <br />
                You can trust us.
              </h1>
            </div>
            <p className="max-w-sm text-[0.85rem] leading-relaxed text-stone">
              Experience enhanced efficiency, heightened productivity, and a
              greater edge over your competitors with these advanced
              capabilities to support all the patients.
            </p>
          </div>

          {/* ---- Video-style image with play button ---- */}
          <div className="relative mt-10 overflow-hidden rounded-[1.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80"
              alt="Dentists treating a patient in the clinic"
              width={1600}
              height={760}
              priority
              className="h-[clamp(18rem,42vw,30rem)] w-full object-cover"
            />
            <button
              type="button"
              aria-label="Play clinic video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-coral" aria-hidden="true">
                <path d="M8 5v14l11-7Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ---- Statement + stats ---- */}
      <section className="section pt-0">
        <div className="wrap text-center">
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.15rem,2vw,1.5rem)] font-bold leading-snug">
            We consider all the patients as our responsibility and try to solve
            each and every problems with our expert dentist .
          </h2>

          <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[clamp(2rem,3vw,2.5rem)] font-bold text-coral">
                  {stat.value}
                </p>
                <p className="mt-1 text-[0.85rem] text-ink">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkWithUs />
      <Team />
      <Appointment />
      <Footer />
    </main>
  );
}
