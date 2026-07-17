import Image from "next/image";

/* Bright aqua band — split copy + full-bleed image on the right. */
export default function Growing() {
  return (
    <section className="bg-aqua">
      <div className="wrap grid items-stretch lg:grid-cols-2">
        {/* ---- Copy ---- */}
        <div className="section">
          <p className="kicker text-ink before:bg-ink">Benefits from flox</p>

          <h2 className="heading mt-4">
            We&apos;re one of the most fastest-growing dental care companies
          </h2>

          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink/70">
            Our team of skilled and experienced dental professionals strives to
            create comfortable and welcoming environment for each and every
            patient. From routine cleanings to complex procedures.
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-[0.95rem] font-bold">
                Easy appointment system
              </h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/70">
                Use and re-use responsive sections too a main create the
                perfect layout. Find all the solutions here.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[0.95rem] font-bold">
                Get membership discount
              </h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/70">
                Use and re-use responsive sections too a main create the
                perfect layout. Find all the solutions here.
              </p>
            </div>
          </div>
        </div>

        {/* ---- Image ---- */}
        <div className="relative min-h-[20rem]">
          <Image
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=80"
            alt="Dentist performing a dental procedure"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
