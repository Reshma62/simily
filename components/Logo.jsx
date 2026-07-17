import Image from "next/image";

/**
 * Smily brand mark — logo.png from /public.
 * `light` renders it white (brightness-0 + invert) for dark backgrounds
 * like the footer.
 */
export default function Logo({ light = false }) {
  return (
    <a href="/" className="flex items-center">
      <Image
        src="/logo.png"
        width={128}
        height={40}
        priority
        alt="Smily Dental Care logo"
        className={`h-8 w-auto ${light ? "brightness-0 invert" : ""}`}
      />
    </a>
  );
}
