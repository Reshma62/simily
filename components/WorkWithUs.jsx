import Image from "next/image";

export default function WorkWithUs() {
  return (
    <section id="about" className="section">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2">
        {/* ---- Image card with floating badge ---- */}
        <div className="relative">
          <div className="overflow-hidden rounded-[1.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80"
              alt="Dentist treating a patient in a modern clinic"
              width={900}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>

          {/* 2000+ happy clients badge */}
          <div className="absolute right-6 top-6 flex items-center gap-3 rounded-xl bg-white p-3 shadow-lg">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-coral text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M2 20h3V9H2Zm20-10a2 2 0 0 0-2-2h-5.3l.9-4.3v-.3a1.5 1.5 0 0 0-.44-1.06L14.1 1.3 7.6 7.9A2 2 0 0 0 7 9.3V18a2 2 0 0 0 2 2h8a2 2 0 0 0 1.85-1.22l3-7A2 2 0 0 0 22 11Z" />
              </svg>
            </span>
            <div>
              <p className="heading-xs leading-none">2000+</p>
              <p className="mt-1 text-tiny text-stone">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* ---- Copy ---- */}
        <div>
          <p className="kicker">Work with us</p>
          <h2 className="heading mt-4">
            Our team has only one mission that is to take care your smile
          </h2>
          <p className="text-body mt-5 max-w-xl">
            Experience enhanced efficiency, heightened productivity and a
            greater edge over your competitors..
          </p>
          <a href="#services" className="btn btn-solid mt-7">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
