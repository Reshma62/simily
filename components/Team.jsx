import Image from "next/image";

const members = [
  {
    name: "Tony Williamson",
    role: "Dental Specialists",
    photo:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Emily Haden",
    role: "Surgery Expert",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Mercedes Wallace",
    role: "Root Canal Expert",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Team() {
  return (
    <section className="section">
      <div className="wrap text-center">
        <p className="kicker justify-center">Experienced and skilled</p>
        <h2 className="heading mt-4">Our Dental Team</h2>
        <p className="text-body mx-auto mt-4 max-w-md">
          We consider all the drivers of change gives you the blocks &amp;
          components you need to change to create a truly professional website.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <article
              key={member.name}
              className="card overflow-hidden p-0"
            >
              <div className="relative h-72">
                <Image
                  src={member.photo}
                  alt={`Portrait of ${member.name}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="py-5">
                <h3 className="heading-xs">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-stone">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
