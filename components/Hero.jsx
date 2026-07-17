import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pb-28">
      <div className="wrap flex  flex-col items-end md:h-[40rem]  justify-end gap-10 lg:flex-row">
        {/* ---- Copy ---- */}
        <div className="pt-24 lg:pt-0 w-full lg:max-w-1/2">
          <p className="kicker">Changing life with one smile</p>

          <h1 className="heading-xl mt-4">
            Discover your best smile with our dentist
          </h1>

          <p className="text-body mt-5 max-w-xl">
            Experience enhanced efficiency, heightened productivity, and a
            greater edge over your competitors with these advanced capabilities.
            We have considered our solutions for all of a support.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a href="#appointment" className="btn btn-solid">
              Book An Appointment
            </a>
            <a href="tel:+19403943344" className="btn btn-outline">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1Z" />
              </svg>
              Call us: 940-394-3344
            </a>
          </div>

          {/* Address / opening hours */}
          <div className="mt-9 flex flex-wrap gap-10">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-cyan">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>
              </span>
              <div>
                <p className="text-xs text-stone">Address</p>
                <p className="text-[0.9rem] font-medium">
                  Brandenburgische Str. 87
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-cyan">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.2 14.2L11 13.4V7h1.5v5.6l4.5 2.7Z" />
                </svg>
              </span>
              <div>
                <p className="text-xs text-stone">Opening Hours</p>
                <p className="text-[0.9rem] font-medium">
                  Mon-Fri 8:00 - 16:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Image (stretches to the top, under the fixed header) ---- */}
        <div className="relative w-full lg:w-1/2 lg:max-w-1/2">
          <div className="h-full overflow-hidden rounded-bl-[3rem]">
            <Image
              src="/hero.png"
              alt="Smiling woman with a healthy smile"
              width={900}
              height={1000}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
