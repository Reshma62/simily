import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Appointment — Smily Dental Care",
  description: "Book an appointment with our expert dentists.",
};

export default function AppointmentPage() {
  return (
    <main>
      <Navbar />

      {/* ---- Centered booking form ---- */}
      <section className="section pt-12">
        <div className="wrap text-center">
          <p className="kicker justify-center">Contact us</p>
          <h1 className="heading mt-4 text-[clamp(2rem,3.5vw,2.75rem)]">
            Book for appointment
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[0.9rem] leading-relaxed text-stone">
            We consider all the drivers of change gives you the blocks &amp;
            components you need to change to create a truly professional
            website.
          </p>

          <form
            className="mx-auto mt-10 max-w-3xl space-y-4 text-left"
            action="#"
            method="post"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="field"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="field"
              required
            />
            <select name="service" className="field text-stone" defaultValue="">
              <option value="" disabled>
                Select Service
              </option>
              <option value="dental-care">Dental Care</option>
              <option value="dental-implant">Dental Implant</option>
              <option value="plaque-removal">Plaque Removal</option>
              <option value="oral-surgery">Oral Surgery</option>
              <option value="root-canal">Root Canal Treatment</option>
              <option value="cavity-protection">Cavity Protection</option>
            </select>

            <div className="grid gap-4 sm:grid-cols-2">
              <input type="date" name="date" className="field text-stone" />
              <input type="time" name="time" className="field text-stone" />
            </div>

            <button type="submit" className="btn btn-solid w-full">
              Book An Appointment
            </button>
          </form>
        </div>
      </section>

      {/* ---- Full-width map ---- */}
      <section className="section pt-0">
        <div className="wrap overflow-hidden rounded-xl border border-ink/10">
          <iframe
            title="Clinic location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=13.28%2C52.48%2C13.34%2C52.51&layer=mapnik&marker=52.495%2C13.31"
            className="h-[clamp(20rem,45vw,32rem)] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
