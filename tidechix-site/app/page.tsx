import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-white text-[#06395c]">
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
                WELLNESS • RECOVERY • LONGEVITY
              </p>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="/">Home</a>
            <a href="/products">Products & Pricing</a>
            <a href="/education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="relative">
          <div
            className="relative h-[420px] bg-cover bg-center md:h-[700px]"
            style={{ backgroundImage: "url('/peptide.jpeg')" }}
          >
            <div className="absolute inset-0 bg-[#06395c]/15"></div>

            <div
              className="absolute bottom-0 left-0 h-72 w-full"
              style={{
                background:
                  "linear-gradient(to top, rgba(236,74,163,.28), rgba(255,255,255,.85), transparent)",
              }}
            ></div>

            <div className="absolute bottom-0 left-0 h-44 w-full bg-gradient-to-t from-white to-transparent"></div>
          </div>

          <div className="mx-4 -mt-20 rounded-2xl bg-white/90 px-6 py-10 text-center shadow-2xl backdrop-blur-sm md:absolute md:left-1/2 md:top-[430px] md:mx-0 md:w-[850px] md:-translate-x-1/2 md:px-16 md:py-14">
            <p className="text-sm tracking-wide text-[#ec4aa3] md:text-lg">
              Longevity • Rejuvenation • Healing • Weight Loss
            </p>

            <h2 className="mt-6 text-3xl font-light tracking-wide md:text-5xl">
              Unlock the Power of
            </h2>

            <h1 className="mt-3 text-5xl font-bold leading-tight text-[#06395c] md:text-7xl">
              Peptide Therapy
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              Premium peptide solutions designed to support healthy aging,
              recovery, wellness, longevity, body composition, and overall
              vitality.
            </p>

            <a
              href="/products"
              className="mt-8 inline-block rounded-md bg-[#ec4aa3] px-10 py-4 font-semibold text-white transition hover:opacity-90"
            >
              SHOP PEPTIDES
            </a>
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-7xl gap-8 px-6 pb-20 md:mt-56 md:grid-cols-3 md:px-10">
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-3xl font-light tracking-[0.2em]">
              WEIGHT LOSS
            </h3>
            <p className="mt-6 leading-8 text-gray-600">
              GLP peptide options designed to support appetite control,
              metabolism, and healthy weight management goals.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-3xl font-light tracking-[0.2em]">RECOVERY</h3>
            <p className="mt-6 leading-8 text-gray-600">
              Wellness peptides focused on recovery, tissue support, body
              composition, performance, and overall vitality.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-3xl font-light tracking-[0.2em]">LONGEVITY</h3>
            <p className="mt-6 leading-8 text-gray-600">
              Peptides focused on healthy aging, rejuvenation, energy, cellular
              wellness, and quality of life.
            </p>
          </div>
        </section>

        <section
          id="about"
          className="bg-[#fff5fa] px-6 py-20 text-center md:px-10"
        >
          <p className="uppercase tracking-[0.3em] text-[#ec4aa3]">
            Science • Wellness • Results
          </p>

          <h2 className="mt-6 text-4xl font-light md:text-5xl">
            WHY PEPTIDES?
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-700">
            Peptides are specialized compounds being explored for their role in
            wellness, recovery, longevity, body composition, performance, and
            overall quality of life.
          </p>

          <a
           href="/education"
          className="mt-10 inline-block rounded-md border border-[#06395c] px-10 py-4 font-semibold text-[#06395c] transition hover:bg-[#06395c] hover:text-white"
>
           VIEW EDUCATION LIBRARY
          </a>
        </section>

        <section id="education" className="bg-[#f7fbff] px-6 py-20 md:px-10">
          <h2 className="text-center text-4xl font-light md:text-5xl">
            PEPTIDE EDUCATION
          </h2>

          <div className="mx-auto mt-12 max-w-5xl rounded-2xl bg-white p-10 shadow-lg">
            <p className="text-center text-lg leading-9 text-gray-700">
              Educational information sheets can be added for every peptide,
              including benefits, product details, FAQs, usage information, and
              supporting research.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="bg-[#06395c] px-6 py-20 text-center text-white"
        >
          <h2 className="text-4xl font-light md:text-5xl">
            CONTACT THE PEPTIDE CHIX
          </h2>

<p className="mt-8 text-2xl font-semibold">
  📞{" "}
  <a
    href="tel:+18013864110"
    className="hover:text-[#ec4aa3] hover:underline"
  >
    (801) 386-4110
  </a>
</p>

<p className="mt-3 text-xl font-medium">
  ✉{" "}
  <a
    href="mailto:thetidechix@gmail.com"
    className="text-[#ec4aa3] hover:underline"
  >
    thetidechix@gmail.com
  </a>
</p>

          <p className="mt-4 text-lg text-gray-300">
            Premium peptide products shipped throughout the United States.
          </p>

          <a
            href="/products"
            className="mt-10 inline-block rounded-md bg-white px-10 py-4 font-semibold text-[#06395c] transition hover:opacity-90"
          >
            VIEW PRODUCTS
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}