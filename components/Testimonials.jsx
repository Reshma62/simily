import Image from "next/image";

const testimonials = [
  {
    name: "Kevin Martin",
    quote:
      "Our visual designer lets you quickly an of drag and drop your own way to customapps for both keep desktop, mobile & also tab for th both of it has been useful analytics report.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Julia Yunge",
    quote:
      "Our visual designer lets you quickly an of drag and drop your own way to customapps for both keep desktop, mobile & also tab for th both of it has been useful analytics report.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rayna Smith",
    quote:
      "Our visual designer lets you quickly an of drag and drop your own. has been useful analytics report that we can use to improve future campaigns for hours to minutes.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M12 17.3 6.2 21l1.5-6.6L2.5 9.9l6.7-.6L12 3l2.8 6.3 6.7.6-5.2 4.5L17.8 21Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="text-center">
          <p className="kicker justify-center">Testimonials</p>
          <h2 className="heading mt-4">What our clients say</h2>
          <p className="text-body mx-auto mt-4 max-w-md">
            We consider all the drivers of change gives you the blocks &amp;
            components you need to change to create a truly professional
            website.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name}>
              <Stars />
              <blockquote className="text-small mt-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={`Photo of ${t.name}`}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </span>
                <span className="text-sm font-semibold">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
