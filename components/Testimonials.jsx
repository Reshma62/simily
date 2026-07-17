"use client";

import { useEffect, useRef, useState } from "react";
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
  {
    name: "Marvin McKinney",
    quote:
      "Our visual designer lets you quickly an of drag and drop your own way to customapps for both keep desktop, mobile & also tab for th both of it has been useful analytics report.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Jenny Wilson",
    quote:
      "Our visual designer lets you quickly an of drag and drop your own. has been useful analytics report that we can use to improve future campaigns for hours to minutes.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
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
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(3);

  /* 1 card per view on mobile, 2 on tablet, 3 on desktop. */
  useEffect(() => {
    const update = () =>
      setPerView(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pageCount = Math.ceil(testimonials.length / perView);

  const goTo = (next) => {
    const track = trackRef.current;
    if (!track) return;
    const target = ((next % pageCount) + pageCount) % pageCount; // loop
    track.scrollTo({ left: target * track.clientWidth, behavior: "smooth" });
    setPage(target);
  };

  /* Autoplay — advance every 5s, pause while hovering. */
  const paused = useRef(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) goTo(page + 1);
    }, 5000);
    return () => clearInterval(id);
  });

  /* Keep dots in sync when the user swipes manually. */
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setPage(Math.round(track.scrollLeft / track.clientWidth));
  };

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

        {/* ---- Slider ---- */}
        <div
          className="relative mt-12"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-10 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="w-full shrink-0 snap-start sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.7rem)]"
              >
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

          {/* ---- Controls ---- */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => goTo(page - 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="m14.7 5.3-6.7 6.7 6.7 6.7 1.4-1.4-5.3-5.3 5.3-5.3Z" />
              </svg>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page ? "w-6 bg-cyan" : "w-2 bg-ink/20 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => goTo(page + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="m9.3 5.3-1.4 1.4 5.3 5.3-5.3 5.3 1.4 1.4 6.7-6.7Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
