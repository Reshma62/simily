/** Smily brand mark — tooth icon in a teal rounded square + wordmark. */
export default function Logo({ light = false }) {
  return (
    <a href="#" className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
          <path d="M12 2C8.5 2 5 3.6 5 7c0 2.2.8 3.6 1.4 5 .5 1.2.8 2.7 1 4.6.2 1.7.5 3.4 1.6 3.4 1.6 0 1-4 3-4s1.4 4 3 4c1.1 0 1.4-1.7 1.6-3.4.2-1.9.5-3.4 1-4.6.6-1.4 1.4-2.8 1.4-5 0-3.4-3.5-5-7-5Z" />
        </svg>
      </span>
      <span
        className={`font-display text-[1.35rem] font-bold ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Smily
      </span>
    </a>
  );
}
