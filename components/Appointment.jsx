/* Pale-mint contact section — booking form + clinic location map. */

export default function Appointment() {
  return (
    <section id="appointment" className="section bg-mint">
      <div className="wrap">
        <p className="kicker">Contact us</p>
        <h2 className="heading mt-4">Book for appointment</h2>
        <p className="text-body mt-4 max-w-md">
          We consider all the drivers of change gives you the blocks you need
          to change to create a truly professional website.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* ---- Form ---- */}
          <form className="space-y-4" action="#" method="post">
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
              <option value="dental-implant">Dental Implant</option>
              <option value="plaque-removal">Plaque Removal</option>
              <option value="root-canal">Root Canal Treatment</option>
              <option value="oral-surgery">Oral Surgery</option>
            </select>

            <div className="grid gap-4 sm:grid-cols-2">
              <input type="date" name="date" className="field text-stone" />
              <input type="time" name="time" className="field text-stone" />
            </div>

            <button type="submit" className="btn btn-solid w-full">
              Book Now
            </button>
          </form>

          {/* ---- Map ---- */}
          <div className="overflow-hidden rounded-xl border border-ink/10 bg-white">
            <iframe
              title="Clinic location — Brandenburgische Str. 87, Berlin"
              src="https://www.openstreetmap.org/export/embed.html?bbox=13.28%2C52.48%2C13.34%2C52.51&layer=mapnik&marker=52.495%2C13.31"
              className="h-full min-h-[20rem] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
