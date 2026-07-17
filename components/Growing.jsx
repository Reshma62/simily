import Image from "next/image";

/* Bright aqua band — split copy + full-bleed image on the right. */
export default function Growing() {
  return (
    <section className="bg-cyan py-7 md:py-0 md:pb-[7rem] px-6 md:px-24 ">
      <div className="wrap grid gap-12 items-stretch lg:grid-cols-2">
        {/* ---- Copy ---- */}
        <div className="pt-3 md:pt-24 lg:pt-32">
          <p className="kicker text-ink before:bg-ink">Benefits from flox</p>

          <h2 className="heading mt-4">
            We&apos;re one of the most fastest-growing dental care companies
          </h2>

          <p className="text-body mt-5 max-w-xl text-ink/70">
            Our team of skilled and experienced dental professionals strives to
            create comfortable and welcoming environment for each and every
            patient. From routine cleanings to complex procedures.
          </p>

          <div className="mt-5 md:mt-[6rem] grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="heading-xs">Easy appointment system</h3>
              <p className="text-small mt-2 text-ink/70">
                Use and re-use responsive sections too a main create the perfect
                layout. Find all the solutions here.
              </p>
            </div>
            <div>
              <h3 className="heading-xs">Get membership discount</h3>
              <p className="text-small mt-2 text-ink/70">
                Use and re-use responsive sections too a main create the perfect
                layout. Find all the solutions here.
              </p>
            </div>
          </div>
        </div>

        {/* ---- Image ---- */}
        <div className="relative ">
          <Image
            src="/image-2.png"
            alt="Dentist performing a dental procedure"
            fill
            className="object-cover rounded-2xl md:rounded-b-2xl"
          />
        </div>
      </div>
    </section>
  );
}
