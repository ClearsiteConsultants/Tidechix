const stripeShopLink = "YOUR_STRIPE_LINK_HERE";

const productSections = [
  {
    title: "Weight Loss & Metabolic Support",
    products: [
      {
        name: "Retatrutide 15mg",
        desc: "GLP support for weight management goals.",
        price: "$100",
      },
      {
        name: "Retatrutide 30mg",
        desc: "GLP support for weight management goals.",
        price: "$135",
      },
      {
        name: "Tirzepatide 15mg",
        desc: "Metabolic and weight management support.",
        price: "$60",
      },
    ],
  },
  {
    title: "Muscle Performance, Strength & Recovery",
    products: [
      {
        name: "CJC-1295 + Ipamorelin 10mg",
        desc: "Growth hormone pathway support for recovery, sleep quality, body composition, and performance.",
        price: "$75",
      },
      {
        name: "Sermorelin 5mg",
        desc: "Supports natural growth hormone signaling, recovery, sleep, and body composition goals.",
        price: "$60",
      },
      {
        name: "Tesamorelin 10mg",
        desc: "Supports natural growth hormone signaling and metabolic support.",
        price: "$65",
      },
      {
        name: "Wolverine Stack 10mg",
        desc: "BPC-157 + TB-500. Comprehensive recovery and soft tissue support.",
        price: "$65",
      },
    ],
  },
  {
    title: "Skin, Hair & Aesthetic Wellness",
    products: [
      {
        name: "GHK-CU 50mg",
        desc: "Supports collagen health, skin texture, wound recovery, and hair wellness.",
        price: "$50",
      },
      {
        name: "Melanotan 1 10mg",
        desc: "Associated with skin tanning and secondary libido effects.",
        price: "$40",
      },
      {
        name: "Glow Stack 70mg",
        desc: "BPC-157 + TB-500 + GHK-CU. Skin, collagen, and tissue wellness support.",
        price: "$100",
      },
      {
        name: "Klow Stack 80mg",
        desc: "BPC-157 + TB-500 + GHK-CU + KPV. Combined recovery, gut, inflammatory, and aesthetic support.",
        price: "$120",
      },
    ],
  },
  {
    title: "Cognitive Wellness, Mood & Sleep Support",
    products: [
      {
        name: "Semax 10mg",
        desc: "Supports focus, memory, mental clarity, and cognitive performance.",
        price: "$50",
      },
      {
        name: "Selank 10mg",
        desc: "Associated with calm focus, mood balance, and stress resilience.",
        price: "$40",
      },
      {
        name: "DSIP 10mg",
        desc: "Supports sleep quality and nervous system recovery.",
        price: "$40",
      },
      {
        name: "MOTS-C 10mg",
        desc: "Investigational mitochondrial peptide associated with metabolic efficiency and energy production.",
        price: "$60",
      },
      {
        name: "NAD+ 1000mg",
        desc: "Supports mitochondrial energy production, cognitive performance, and cellular health.",
        price: "$75",
      },
      {
        name: "SS-31 10mg",
        desc: "Investigational mitochondrial support compound associated with cellular energy and longevity research.",
        price: "$50",
      },
    ],
  },
  {
    title: "Gut Health & Inflammatory Support",
    products: [
      {
        name: "KPV 10mg",
        desc: "Associated with gastrointestinal inflammatory support.",
        price: "$40",
      },
      {
        name: "Glutathione 1500mg",
        desc: "Supports detoxification and immune wellness.",
        price: "$45",
      },
    ],
  },
  {
    title: "Sexual Wellness & Intimacy Support",
    products: [
      {
        name: "Kisspeptin-10",
        desc: "Supports libido, hormone communication, and reproductive wellness.",
        price: "$65",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#fff5fa] text-[#06395c]">
      <header className="flex items-center justify-between border-b bg-white px-4 py-4 md:px-10">
        <div className="flex items-center gap-3">
          <img
            src="/peptide-chix-logo.png"
            alt="The Peptide Chix"
            className="h-16 w-auto md:h-20"
          />

          <div>
            <h1 className="text-lg font-bold text-[#06395c] md:text-2xl">
              THE PEPTIDE CHIX
            </h1>
            <p className="text-xs tracking-[0.2em] text-[#ec4aa3]">
              PRODUCTS • PRICING • WELLNESS
            </p>
          </div>
        </div>

        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="/">Home</a>
          <a href="/products">Products & Pricing</a>
          <a href="/#education">Education</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <section className="relative">
        <div
          className="relative h-[280px] bg-cover bg-center md:h-[420px]"
          style={{
            backgroundImage: "url('/peptide.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-[#06395c]/30"></div>
          <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#fff5fa] to-transparent"></div>
        </div>

        <div className="mx-auto -mt-28 max-w-5xl rounded-2xl bg-white/95 px-6 py-12 text-center shadow-2xl backdrop-blur-sm md:px-12">
          <a
            href="/"
            className="mb-8 inline-block rounded-md border border-[#06395c] px-6 py-3 text-sm font-semibold text-[#06395c] transition hover:bg-[#06395c] hover:text-white"
          >
            ← Return to Home
          </a>

          <p className="uppercase tracking-[0.3em] text-[#ec4aa3]">
            Product Menu
          </p>

          <h1 className="mt-5 text-4xl font-light md:text-6xl">
            PRODUCTS & PRICING
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Browse our complete peptide catalog, product descriptions, and
            pricing. Products are sold per vial.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={stripeShopLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#ec4aa3] px-10 py-4 font-semibold text-white transition hover:opacity-90"
            >
              SHOP NOW
            </a>

            <a
              href="/"
              className="rounded-md border border-[#06395c] px-10 py-4 font-semibold text-[#06395c] transition hover:bg-[#06395c] hover:text-white"
            >
              RETURN TO HOME
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="space-y-12">
          {productSections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl bg-white p-6 shadow-lg md:p-10"
            >
              <h2 className="border border-[#06395c]/30 px-4 py-3 text-xl font-semibold uppercase tracking-[0.12em] md:text-2xl">
                {section.title}
              </h2>

              <div className="mt-8 space-y-7">
                {section.products.map((product) => (
                  <div
                    key={product.name}
                    className="grid gap-3 border-b border-gray-100 pb-6 md:grid-cols-[1fr_auto]"
                  >
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-[0.12em]">
                        {product.name}
                      </h3>

                      <p className="mt-2 max-w-3xl text-sm uppercase tracking-[0.08em] text-gray-600">
                        {product.desc}
                      </p>
                    </div>

                    <p className="text-2xl font-bold text-[#06395c]">
                      {product.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-white px-6 py-12 text-center shadow-lg">
          <p className="text-2xl font-semibold tracking-[0.12em]">
            READY TO ORDER?
          </p>

          <p className="mt-3 text-lg text-gray-600">
            Browse available products and complete your order online.
          </p>

          <a
            href={stripeShopLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-md bg-[#ec4aa3] px-10 py-4 font-semibold text-white transition hover:opacity-90"
          >
            SHOP NOW
          </a>

          <div className="mt-8">
            <p className="text-xl font-semibold">Questions?</p>

            <p className="mt-2 text-2xl font-bold text-[#ec4aa3]">
              (801) 900-3711
            </p>
          </div>

          <a
            href="/"
            className="mt-8 inline-block rounded-md border border-[#06395c] px-8 py-4 font-semibold text-[#06395c] transition hover:bg-[#06395c] hover:text-white"
          >
            RETURN TO HOME
          </a>
        </div>
      </section>
    </main>
  );
}