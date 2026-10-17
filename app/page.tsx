import Image from "next/image";

// All copy below is taken word-for-word from the original sinthani.co.th site.

const LINE_ID = "TNL-SIC";
const LINE_URL = `https://line.me/R/ti/p/~${LINE_ID}`;
const PHONE_TEL = "tel:+6627544190";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=13.650753,100.574692";

const features = [
  { icon: "factory", title: "Modern Facility", text: "State-of-the-art equipment" },
  { icon: "shield", title: "Quality Certified", text: "ISO 9001:2015 certified" },
  { icon: "globe", title: "Global Reach", text: "Worldwide distribution" },
  { icon: "team", title: "Expert Team", text: "Skilled professionals" },
] as const;

const products = [
  {
    name: "Cold Draw Steel Wire",
    image: "/media/products/cold-draw.jpg",
    text: "High-quality cold-drawn steel wire for various industrial applications",
    diameter: "0.80 - 7.00 mm.",
    material: "Low carbon wire rod: SWRM6, M8, M12 and M15",
    packages: "In coils of 50 - 200 kg. / In carriers up to 900 kg.",
  },
  {
    name: "Galvanized Steel Wire",
    image: "/media/products/galvanized.jpg",
    text: "Corrosion-resistant hot-dip galvanized wire for outdoor use",
    diameter: "1.00 - 6.00 mm.",
    material: "Low or high carbon steel wires",
    packages: "In coils of 50 - 250 kg. / In spools up to 600 kg.",
  },
  {
    name: "Galvanized Steel Wire Strand",
    image: "/media/products/galvanized-strand.jpg",
    text: "Durable wire strand for electricity and communication cables",
    diameter: "3.00 - 14.00 mm.",
    material: "Hot-dip galvanized low or high carbon steel wires",
    packages: "In coils up to 300 kg.",
  },
  {
    name: "Packing Wire",
    image: "/media/products/packing-wire.jpg",
    text: "Quick link bale tie for packing fibrous material",
    diameter: "2.30 - 3.20 mm.",
    material: "Hot dip galvanized high carbon steel wires",
    packages: "In bundles by count or by weight",
  },
  {
    name: "Annealed Steel Wire",
    image: "/media/products/annealed.jpg",
    text: "Heat-treated soft wire for artificial flowers and construction",
    diameter: "0.80 - 5.00 mm.",
    material: "Low carbon steel wires",
    packages: "In coils of 50 - 200 kg.",
  },
  {
    name: "Straightened & Cut Wire",
    image: "/media/products/straightened-cut.jpg",
    text: "Wire straightened and cut to desired length for automotive and industrial use",
    diameter: "1.80 - 6.00 mm.",
    material: "Low or high carbon steel wires / galvanized steel wires",
    packages: "In bundles by count or weight",
  },
];

const industries = [
  "Cable & Telecommunication",
  "Wireware",
  "Packing",
  "Artificial Flower",
  "Stationery",
  "Automotive",
  "Mattress",
  "Outer Wire",
  "Spoke",
  "Netting & Fencing",
];

const clients = [
  { name: "Provincial Electricity Authority (PEA)", logo: "/media/clients/pea.png" },
  { name: "Metropolitan Electricity Authority (MEA)", logo: "/media/clients/mea.png" },
  { name: "Bangkok Cable Co., Ltd.", logo: "/media/clients/bangkok-cable.png" },
  { name: "Hilding Anders (Thailand) Ltd.", logo: "/media/clients/hilding-anders.png" },
  { name: "Charoong Thai Wire & Cable PLC.", logo: "/media/clients/charoong-thai.png" },
  { name: "Thai Yazaki Electric Wire Co., Ltd.", logo: "/media/clients/thai-yazaki.png" },
  { name: "Phelps Dodge Thailand Limited", logo: "/media/clients/phelps-dodge.png" },
  { name: "Toyota Boshoku Gateway (Thailand) Co., Ltd.", logo: "/media/clients/toyota-boshoku.png" },
  { name: "NHK Spring (Thailand) Co., Ltd.", logo: "/media/clients/nhk-spring.png" },
  { name: "Jaspal Public Co., Ltd.", logo: "/media/clients/jaspal.png" },
];

const keyContacts = [
  { role: "Chief Executive Officer", email: "tiraphat@sinthani.co.th" },
  { role: "Chief Operating Officer", email: "supakan@sinthani.co.th" },
  { role: "HR Manager", email: "keratisak@sinthani.co.th" },
];

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "factory":
      return (
        <svg {...common}>
          <path d="M3 21V10l6 4V10l6 4V5h6v16H3z" />
          <path d="M7 17h2M12 17h2M17 17h1" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
          <path d="M8.5 12l2.5 2.5 4.5-5" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
        </svg>
      );
    case "team":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M16 14.2c2.9.4 5 2.8 5 5.8" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s-7-6.2-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5h4" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
}

function LineIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5s6-3.5 8.2-6C21.4 14.2 22 12.7 22 11c0-4.4-4.5-8-10-8zM8.3 13.4H6.4c-.3 0-.5-.2-.5-.5V9.1c0-.3.2-.5.5-.5s.5.2.5.5v3.3h1.4c.3 0 .5.2.5.5s-.2.5-.5.5zm2 -.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9.1c0-.3.2-.5.5-.5s.5.2.5.5v3.8zm4.6 0c0 .2-.1.4-.3.5h-.2c-.2 0-.3-.1-.4-.2l-1.9-2.6v2.3c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9.1c0-.2.1-.4.3-.5h.2c.2 0 .3.1.4.2l1.9 2.6V9.1c0-.3.2-.5.5-.5s.5.2.5.5v3.8zm3.1-2.4c.3 0 .5.2.5.5s-.2.5-.5.5h-1.4v.9h1.4c.3 0 .5.2.5.5s-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5V9.1c0-.3.2-.5.5-.5H18c.3 0 .5.2.5.5s-.2.5-.5.5h-1.4v.9H18z" />
    </svg>
  );
}

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-line px-6 py-3 font-semibold text-white shadow-lg shadow-line/25 transition hover:bg-line-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-line ${className}`}
    >
      <LineIcon />
      LINE ID: {LINE_ID}
    </a>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && <p className="text-eyebrow font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>}
      <h2 className="mt-2 text-h2 font-bold text-ink">{title}</h2>
      {text && <p className="mt-3 text-lead text-ink-soft">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b border-line-border/70 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <Image src="/media/logo.png" alt="SIC logo" width={72} height={54} className="h-12 w-auto" />
            <span className="truncate font-bold leading-tight text-ink">
              SINTHANI INDUSTRY
              <span className="block text-xs font-medium text-muted">CO., LTD.</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-ink-soft md:flex">
            <a href="#about" className="hover:text-brand">PROFILE</a>
            <a href="#products" className="hover:text-brand">PRODUCTS</a>
            <a href="#clients" className="hover:text-brand">CLIENTS</a>
            <a href="#contact" className="hover:text-brand">CONTACT US</a>
          </nav>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-line px-4 py-2 text-sm font-semibold text-white hover:bg-line-dark"
          >
            <LineIcon className="h-4 w-4" />
            LINE
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-steel text-white">
          <Image
            src="/media/theme.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-40"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-steel/40 via-steel/70 to-steel" />
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-24">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-eyebrow font-medium ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-brand" />
              &ldquo;We customize your wire&rdquo; · The Quality Connection
            </p>
            <h1 className="mt-5 max-w-3xl text-h1 font-bold">
              Leading Manufacturer of <span className="text-[#ff8a80]">Quality Wire Products</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lead text-white/85">
              Delivering excellence in wire manufacturing since 1964, serving clients worldwide with premium quality products
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LineButton />
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20"
              >
                <Icon name="phone" className="h-5 w-5" />
                +66 (0) 2754-4190-4
              </a>
            </div>
            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-3 text-center sm:gap-6">
              {[
                ["Established", "1964"],
                ["Annual Sales", "35,000 MT"],
                ["Quality", "ISO 9001:2015"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col-reverse rounded-2xl bg-white/5 px-2 py-4 ring-1 ring-white/10">
                  <dt className="mt-1 text-xs text-white/70 sm:text-sm">{label}</dt>
                  <dd className="text-lg font-bold sm:text-2xl">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-lg">
              <Image
                src="/media/manufacturing.jpg"
                alt="Sinthani Industry manufacturing facility"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-eyebrow font-semibold uppercase tracking-wider text-brand">About Us</p>
              <h2 className="mt-2 text-h2 font-bold">Excellence in Wire Manufacturing</h2>
              <p className="mt-4 text-body text-ink-soft">
                SINTHANI INDUSTRY CO., LTD. is a leading manufacturer of high-quality wire products in Thailand.
                Established in 1964 through a joint venture between Thai and Japanese partners (Kobe Steel, Mitsui
                &amp; Co., Ltd.), we have over 40 years of experience in wire drawing and hot-dip galvanizing.
              </p>
              <p className="mt-3 text-body text-ink-soft">
                Our state-of-the-art manufacturing facility and dedicated team ensure that every product meets the
                highest standards of quality and reliability. We have become one of the top quality steel wire
                manufacturers in Thailand.
              </p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-card bg-white p-5 shadow-sm ring-1 ring-line-border">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-3 font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="products" className="bg-sand py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Over 50 years of quality"
              title="Our Products"
              text="We offer a comprehensive range of wire products to meet diverse industrial needs"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <article key={p.name} className="flex flex-col overflow-hidden rounded-card bg-white shadow-sm ring-1 ring-line-border">
                  <div className="relative aspect-[4/3] bg-sand">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-h3 font-semibold">{p.name}</h3>
                    <p className="mt-2 flex-1 text-body text-ink-soft">{p.text}</p>
                    <dl className="mt-4 grid gap-2 rounded-xl bg-paper p-3 text-sm">
                      {[
                        ["Wire Diameter", p.diameter],
                        ["Material", p.material],
                        ["Packages", p.packages],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</dt>
                          <dd className="font-medium">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-card bg-steel p-6 text-center text-white md:p-10">
              <h3 className="text-h3 font-semibold">Need a custom specification?</h3>
              <p className="mx-auto mt-2 max-w-xl text-white/80">
                Please allow Sinthani to review your requirements or specifications and design a custom steel wire
                product to meet your specific needs.
              </p>
              <LineButton className="mt-6" />
            </div>
          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading title="Our Clients" text="Trusted by leading companies across various industries" />

            <div className="mx-auto mt-10 max-w-3xl rounded-card bg-white p-6 text-center shadow-sm ring-1 ring-line-border">
              <h3 className="text-h3 font-semibold">Committed to Customer Satisfaction</h3>
              <p className="mt-2 text-body text-ink-soft">
                Due to our high commitment to customer satisfaction, we always serve in compliance with our
                customers&apos; requests to maintain their loyalty. Our customers who request better quality for
                their products spread over the entire domestic wire industry.
              </p>
            </div>

            <h3 className="mt-12 text-center text-h3 font-semibold">Industries We Serve</h3>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {industries.map((i) => (
                <span key={i} className="rounded-full bg-white px-3 py-1 text-sm text-ink-soft ring-1 ring-line-border">
                  {i}
                </span>
              ))}
            </div>

            <h3 className="mt-12 text-center text-h3 font-semibold">Our Reputable Clients</h3>
            <p className="mt-1 text-center text-ink-soft">Some of our quality-oriented customers</p>
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {clients.map((c) => (
                <li key={c.name} className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 text-center ring-1 ring-line-border">
                  <div className="relative h-14 w-full">
                    <Image src={c.logo} alt={c.name} fill sizes="160px" className="object-contain" />
                  </div>
                  <span className="text-xs text-muted">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="bg-steel py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
            <div>
              <p className="text-eyebrow font-semibold uppercase tracking-wider text-[#ff8a80]">Contact Us</p>
              <h2 className="mt-2 text-h2 font-bold">Contact Information</h2>
              <p className="mt-3 text-lead text-white/80">
                Get in touch with us for inquiries and business opportunities. Feel free to reach out to us through
                any of the following channels.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <LineButton />
                <a
                  href={PHONE_TEL}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink transition hover:bg-sand"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  Telephone
                </a>
              </div>

              <h3 className="mt-10 font-semibold">Key Contacts</h3>
              <ul className="mt-3 space-y-2">
                {keyContacts.map((k) => (
                  <li key={k.email} className="flex flex-col rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <span className="text-sm text-white/70">{k.role}</span>
                    <a href={`mailto:${k.email}`} className="break-all font-medium underline-offset-4 hover:underline">
                      {k.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <Icon name="pin" className="h-6 w-6 shrink-0 text-[#ff8a80]" />
                <div>
                  <p className="font-semibold">Head Office &amp; Factory</p>
                  <p className="text-white/75">
                    21 Moo 5 Soi Sukhapibal 18, Poochaosamingprai Road, Samrongklang, Prapradang, Samutprakarn 10130
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    Parking available on-site · Please contact us before visiting for security check-in
                  </p>
                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-medium text-[#ff8a80] underline underline-offset-4">
                    Google Map
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <Icon name="phone" className="h-6 w-6 shrink-0 text-[#ff8a80]" />
                <div>
                  <p className="font-semibold">Telephone</p>
                  <p className="text-white/75">
                    <a href={PHONE_TEL} className="underline-offset-4 hover:underline">+66 (0) 2754-4190-4</a>
                    <br />
                    <a href="tel:+6623940749" className="underline-offset-4 hover:underline">+66-2394-0749</a>
                  </p>
                  <p className="mt-1 text-sm text-white/60">Fax +66 (0) 2384-2719</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <LineIcon className="h-6 w-6 shrink-0 text-line" />
                <div>
                  <p className="font-semibold">LINE</p>
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="text-white/75 underline-offset-4 hover:underline">
                    {LINE_ID}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <Icon name="clock" className="h-6 w-6 shrink-0 text-[#ff8a80]" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-white/75">Monday – Saturday, 8:00 AM – 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#14161a] pb-24 pt-10 text-sm text-white/60 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <span className="shrink-0 rounded-lg bg-white p-1">
              <Image src="/media/logo.png" alt="" width={40} height={30} className="h-7 w-auto" />
            </span>
            <span className="max-w-md">
              <span className="block font-semibold text-white">SINTHANI INDUSTRY CO., LTD.</span>
              Leading manufacturer of quality wire products in Thailand, serving clients worldwide with excellence and
              reliability since 1964.
            </span>
          </div>
          <p>© 2026 SINTHANI INDUSTRY CO., LTD. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating LINE button on mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line-border bg-paper/95 p-3 backdrop-blur md:hidden">
        <LineButton className="w-full" />
      </div>
    </>
  );
}
