export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#06395c]">
      <header className="flex h-24 items-center justify-between border-b bg-white px-10">
        <div className="flex items-center gap-4">
          <img
            src="/peptide-chix-logo.png"
            alt=""
            className="h-20 w-auto object-contain"
          />

          <div>
            <h1 className="text-xl font-bold text-[#06395c]">
              THE PEPTIDE CHIX
            </h1>
            <p className="text-xs tracking-widest text-[#ec4aa3]">
              WELLNESS • RECOVERY • LONGEVITY
            </p>
          </div>
        </div>

        <nav className="hidden gap-8 text-sm font-medium text-[#06395c] md:flex">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#pricing">Pricing</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="relative">
        <div
          className="h-[700px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/Peptide-Therapy.webp')",
          }}
        >
          <div className="h-full w-full bg-[#06395c]/30" />
        </div>

        <div className="absolute left-1/2 top-[420px] w-[900px] -translate-x-1/2 bg-white px-16 py-12 text-center shadow-xl">
          <p className="text-lg tracking-wide text-[#ec4aa3]">
            Longevity • Rejuvenation • Healing • Weight Loss
          </p>

          <h2 className="mt-6 text-5xl font-light tracking-wide text-[#06395c]">
            Unlock the Power of
          </h2>

          <h1 className="mt-2 text-7xl font-bold text-[#06395c]">
            Peptide Therapy
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Premium peptide solutions designed to support healthy aging,
            recovery, performance, wellness, and body composition goals.
          </p>

          <button className="mt-8 border border-[#06395c] px-12 py-4 font-semibold text-[#06395c] transition hover:bg-[#06395c] hover:text-white">
            SHOP PEPTIDES
          </button>
        </div>
      </section>

      <section
        id="products"
        className="mx-auto mt-56 grid max-w-7xl gap-12 px-10 pb-24 md:grid-cols-3"
      >
        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
          <h3 className="text-3xl font-light tracking-[0.2em] text-[#06395c]">
            WEIGHT LOSS
          </h3>
          <p className="mt-6 leading-8 text-gray-600">
            Explore advanced peptide options designed to support appetite
            control, metabolic health, and weight management goals.
          </p>
        </div>

        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
          <h3 className="text-3xl font-light tracking-[0.2em] text-[#06395c]">
            RECOVERY
          </h3>
          <p className="mt-6 leading-8 text-gray-600">
            Support recovery, healing, tissue repair, and overall wellness with
            carefully selected peptide solutions.
          </p>
        </div>

        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
          <h3 className="text-3xl font-light tracking-[0.2em] text-[#06395c]">
            LONGEVITY
          </h3>
          <p className="mt-6 leading-8 text-gray-600">
            Peptides focused on healthy aging, vitality, rejuvenation,
            performance, and quality of life.
          </p>
        </div>
      </section>

      <section id="about" className="bg-[#fff5fa] px-10 py-24 text-center">
        <p className="uppercase tracking-[0.4em] text-[#ec4aa3]">
          Science • Wellness • Results
        </p>

        <h2 className="mt-6 text-5xl font-light tracking-wide text-[#06395c]">
          WHY PEPTIDES?
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-700">
          Peptides are specialized compounds being explored for their potential
          role in recovery, wellness, longevity, body composition, performance,
          and overall quality of life.
        </p>
      </section>

      <section id="education" className="px-10 py-24">
        <h2 className="text-center text-5xl font-light tracking-wide text-[#06395c]">
          PEPTIDE EDUCATION
        </h2>

        <div className="mx-auto mt-12 max-w-5xl rounded-xl bg-white p-10 shadow-lg">
          <p className="text-center text-lg leading-9 text-gray-700">
            Educational information sheets can be added for each peptide,
            including usage information, benefits, product details, frequently
            asked questions, and supporting research.
          </p>
        </div>
      </section>

      <section id="pricing" className="bg-[#f7fbff] px-10 py-24 text-center">
        <h2 className="text-5xl font-light tracking-wide text-[#06395c]">
          PRICING
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-700">
          Products are sold per vial. Individual product pages will include
          pricing, product information, availability, and ordering options.
        </p>
      </section>

      <section
        id="contact"
        className="bg-[#06395c] px-10 py-24 text-center text-white"
      >
        <h2 className="text-5xl font-light tracking-wide">CONTACT US</h2>

        <p className="mt-10 text-2xl font-semibold">(801) 900-3711</p>

        <p className="mt-4 text-lg text-gray-300">
          Premium peptide products shipped throughout the United States.
        </p>

        <button className="mt-10 rounded-md bg-white px-12 py-4 font-semibold text-[#06395c]">
          CONTACT THE PEPTIDE CHIX
        </button>
      </section>
    </main>
  );
}