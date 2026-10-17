import Image from "next/image";

const LINE_ID = "TNL-SIC";
const LINE_URL = `https://line.me/R/ti/p/~${LINE_ID}`;
const PHONE_DISPLAY = "+66 2 754 4190–4";
const PHONE_TEL = "tel:+6627544190";
const PHONE2_DISPLAY = "+66 2 394 0749";
const PHONE2_TEL = "tel:+6623940749";
const EMAIL = "tiraphat@sinthani.co.th";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=13.650753,100.574692";

const highlights = [
  {
    icon: "history",
    title: "60+ years of experience",
    text: "Founded in 1964 as a Thai–Japanese joint venture with Kobe Steel and Mitsui & Co. Specialists in wire drawing and hot-dip galvanizing.",
  },
  {
    icon: "shield",
    title: "ISO 9001:2015 certified",
    text: "Quality management certified by MASCI and compliant with AS/NZS standards. Every coil is inspected before delivery.",
  },
  {
    icon: "tune",
    title: "Made to your specification",
    text: "“We customize your wire.” Send us your requirements and our team will design the right wire for your application.",
  },
] as const;

const products = [
  {
    name: "Cold Draw Steel Wire",
    image: "/media/products/cold-draw.jpg",
    text: "Low- and high-carbon cold-drawn wire for a wide range of industrial uses.",
    size: "0.80 – 7.00 mm",
    pack: "Coils 50–200 kg / carriers up to 900 kg",
  },
  {
    name: "Galvanized Steel Wire",
    image: "/media/products/galvanized.jpg",
    text: "Hot-dip galvanized for corrosion resistance outdoors. Zinc coating from 25 to 350 g/m².",
    size: "1.00 – 6.00 mm",
    pack: "Coils 50–250 kg / spools up to 600 kg",
  },
  {
    name: "Galvanized Steel Wire Strand",
    image: "/media/products/galvanized-strand.jpg",
    text: "For power and communication cables and overhead ground wire. Supplied to EGAT, PEA and export markets.",
    size: "3.00 – 14.00 mm",
    pack: "Coils up to 300 kg",
  },
  {
    name: "Packing Wire",
    image: "/media/products/packing-wire.jpg",
    text: "Quick link bale tie in galvanized high-carbon wire, for baling cotton, synthetic fiber, wool and more.",
    size: "2.30 – 3.20 mm",
    pack: "Bundles by count or weight",
  },
  {
    name: "Annealed Steel Wire",
    image: "/media/products/annealed.jpg",
    text: "Heat-treated in electric ovens for soft, workable wire. Used for artificial flowers and construction.",
    size: "0.80 – 5.00 mm",
    pack: "Coils 50–200 kg",
  },
  {
    name: "Straightened & Cut Wire",
    image: "/media/products/straightened-cut.jpg",
    text: "Cold-drawn or galvanized wire straightened and cut to length for automotive and industrial use.",
    size: "1.80 – 6.00 mm",
    pack: "Bundles by count or weight",
  },
];

const industries = [
  "Cable & telecom",
  "Automotive",
  "Mattress & springs",
  "Packing",
  "Artificial flowers",
  "Stationery",
  "Netting & fencing",
  "Spokes",
  "Wireware",
];

const clients = [
  { name: "Provincial Electricity Authority (PEA)", logo: "/media/clients/pea.png" },
  { name: "Metropolitan Electricity Authority (MEA)", logo: "/media/clients/mea.png" },
  { name: "Bangkok Cable", logo: "/media/clients/bangkok-cable.png" },
  { name: "Thai Yazaki Electric Wire", logo: "/media/clients/thai-yazaki.png" },
  { name: "Phelps Dodge Thailand", logo: "/media/clients/phelps-dodge.png" },
  { name: "Charoong Thai Wire & Cable", logo: "/media/clients/charoong-thai.png" },
  { name: "Toyota Boshoku Gateway", logo: "/media/clients/toyota-boshoku.png" },
  { name: "NHK Spring (Thailand)", logo: "/media/clients/nhk-spring.png" },
  { name: "Hilding Anders (Thailand)", logo: "/media/clients/hilding-anders.png" },
  { name: "Jaspal", logo: "/media/clients/jaspal.png" },
];

const faqs = [
  {
    q: "Can you make wire to our own specification?",
    a: "Yes. Send us the diameter, steel grade, zinc coating and application via LINE or phone, and our team will review it and design a wire to suit your needs.",
  },
  {
    q: "What wire sizes can you produce?",
    a: "From 0.80 mm up to 14.00 mm, depending on the wire type. See the size range for each product in the “Our Products” section above.",
  },
  {
    q: "How do I request a quotation?",
    a: `Message us on LINE (${LINE_ID}) or call ${PHONE_DISPLAY} with the wire type, size and quantity you need. Pricing depends on specification and order volume.`,
  },
  {
    q: "Can I visit the factory?",
    a: "Yes. Please contact us in advance so we can arrange security check-in. On-site parking is available. Open Monday–Saturday, 8:00 AM–5:00 PM.",
  },
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
    case "history":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
          <path d="M8.5 12l2.5 2.5 4.5-5" />
        </svg>
      );
    case "tune":
      return (
        <svg {...common}>
          <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" />
          <circle cx="16" cy="6" r="2" />
          <circle cx="10" cy="12" r="2" />
          <circle cx="18" cy="18" r="2" />
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
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
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

function LineButton({ label = "Chat on LINE", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-line px-6 py-3 font-semibold text-white shadow-lg shadow-line/25 transition hover:bg-line-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-line ${className}`}
    >
      <LineIcon />
      {label}
    </a>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-eyebrow font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>
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
              Sinthani Industry
              <span className="block text-xs font-medium text-muted">The Quality Connection</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-ink-soft md:flex">
            <a href="#products" className="hover:text-brand">Products</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
            <a href="#contact" className="hover:text-brand">Contact</a>
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
              Thai steel wire manufacturer since 1964
            </p>
            <h1 className="mt-5 max-w-3xl text-h1 font-bold">
              Quality steel wire,
              <br />
              <span className="text-[#ff8a80]">made to your specification</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lead text-white/85">
              Cold-drawn, galvanized, stranded and annealed wire from our factory in Samutprakarn —
              trusted for decades by Thailand&apos;s electricity authorities and leading cable makers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LineButton label="Chat on LINE for a quote" />
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20"
              >
                <Icon name="phone" className="h-5 w-5" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-3 text-center sm:gap-6">
              {[
                ["60+", "Years of experience"],
                ["35,000", "Tons sold per year"],
                ["ISO", "9001:2015"],
              ].map(([num, label]) => (
                <div key={label} className="rounded-2xl bg-white/5 px-2 py-4 ring-1 ring-white/10">
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-2xl font-bold sm:text-3xl">{num}</dd>
                  <dd className="mt-1 text-xs text-white/70 sm:text-sm">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Highlights */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading eyebrow="Why Sinthani" title="A partner you can trust, coil after coil" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-card bg-white p-6 shadow-sm ring-1 ring-line-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon name={h.icon} />
                </div>
                <h3 className="mt-4 text-h3 font-semibold">{h.title}</h3>
                <p className="mt-2 text-body text-ink-soft">{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="products" className="bg-sand py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Our Products"
              title="Six types of steel wire for every industry"
              text="Pricing depends on specification and volume. Tell us what you need on LINE and we’ll reply with a quotation."
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
                      <div className="flex justify-between gap-3">
                        <dt className="text-muted">Diameter</dt>
                        <dd className="text-right font-medium">{p.size}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-muted">Packing</dt>
                        <dd className="text-right font-medium">{p.pack}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-card bg-steel p-6 text-center text-white md:p-10">
              <h3 className="text-h3 font-semibold">Need a custom specification?</h3>
              <p className="mx-auto mt-2 max-w-xl text-white/80">
                Let us review your requirements — our team will design a steel wire product to fit your exact needs.
              </p>
              <LineButton className="mt-6" />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-lg">
            <Image
              src="/media/manufacturing.jpg"
              alt="Wire drawing machine inside the Sinthani Industry factory"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-eyebrow font-semibold uppercase tracking-wider text-brand">About Us</p>
            <h2 className="mt-2 text-h2 font-bold">A Thai wire maker growing for over 60 years</h2>
            <p className="mt-4 text-body text-ink-soft">
              Sinthani Industry Co., Ltd. was established in 1964 as a joint venture between Thai and Japanese
              partners (Kobe Steel and Mitsui &amp; Co.). We delivered our first cold-drawn wire in 1965 and started
              our first hot-dip galvanizing line in 1970.
            </p>
            <p className="mt-3 text-body text-ink-soft">
              Since 1990 we have been 100% Thai-owned, supplying wire for automotive, electrical appliances,
              power and telephone cables, fiber optic cables, mattresses and more.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {industries.map((i) => (
                <span key={i} className="rounded-full bg-white px-3 py-1 text-sm text-ink-soft ring-1 ring-line-border">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="border-y border-line-border bg-white py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Our Clients" title="Trusted by leading organizations" />
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {clients.map((c) => (
                <li key={c.name} className="flex flex-col items-center gap-2 rounded-2xl bg-paper p-4 text-center">
                  <div className="relative h-14 w-full">
                    <Image src={c.logo} alt={c.name} fill sizes="160px" className="object-contain" />
                  </div>
                  <span className="text-xs text-muted">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading eyebrow="FAQ" title="Questions? We have answers" />
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white p-5 ring-1 ring-line-border">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition">
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3 text-body text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-steel py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
            <div>
              <p className="text-eyebrow font-semibold uppercase tracking-wider text-[#ff8a80]">Contact Us</p>
              <h2 className="mt-2 text-h2 font-bold">The easiest way to reach us is LINE</h2>
              <p className="mt-3 text-lead text-white/80">
                Add LINE ID <strong className="text-white">{LINE_ID}</strong> and send us your specification or question.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <LineButton />
                <a
                  href={PHONE_TEL}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink transition hover:bg-sand"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  Call us
                </a>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <Icon name="pin" className="h-6 w-6 shrink-0 text-[#ff8a80]" />
                <div>
                  <p className="font-semibold">Head Office &amp; Factory</p>
                  <p className="text-white/75">
                    21 Moo 5, Soi Sukhapibal 18, Poochaosamingprai Road, Samrongklang, Prapradang, Samutprakarn 10130, Thailand
                  </p>
                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-medium text-[#ff8a80] underline underline-offset-4">
                    Open in Google Maps
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <Icon name="phone" className="h-6 w-6 shrink-0 text-[#ff8a80]" />
                <div>
                  <p className="font-semibold">Telephone</p>
                  <p className="text-white/75">
                    <a href={PHONE_TEL} className="underline-offset-4 hover:underline">{PHONE_DISPLAY}</a>
                    {" · "}
                    <a href={PHONE2_TEL} className="underline-offset-4 hover:underline">{PHONE2_DISPLAY}</a>
                  </p>
                  <p className="text-sm text-white/60">Fax +66 2 384 2719</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <Icon name="mail" className="h-6 w-6 shrink-0 text-[#ff8a80]" />
                <div className="min-w-0">
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${EMAIL}`} className="break-all text-white/75 underline-offset-4 hover:underline">{EMAIL}</a>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <Icon name="clock" className="h-6 w-6 shrink-0 text-[#ff8a80]" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-white/75">Monday – Saturday, 8:00 AM – 5:00 PM</p>
                  <p className="text-sm text-white/60">Parking on-site · Please contact us before visiting</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#14161a] pb-24 pt-10 text-sm text-white/60 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-white p-1">
              <Image src="/media/logo.png" alt="" width={40} height={30} className="h-7 w-auto" />
            </span>
            <span>
              <span className="block font-semibold text-white">SINTHANI INDUSTRY CO., LTD.</span>
              The Quality Connection · Since 1964
            </span>
          </div>
          <p>© Sinthani Industry Co., Ltd. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating LINE button on mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line-border bg-paper/95 p-3 backdrop-blur md:hidden">
        <LineButton className="w-full" label="Chat on LINE for a quote" />
      </div>
    </>
  );
}
