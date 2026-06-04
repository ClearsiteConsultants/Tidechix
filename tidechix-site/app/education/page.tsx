import Link from "next/link";
import Footer from "@/app/components/Footer";
import { EDUCATION_ITEMS } from "@/app/lib/education";

export default function EducationPage() {
  const categories = Array.from(
    new Set(EDUCATION_ITEMS.map((item) => item.category))
  );

  return (
    <>
      <main className="min-h-screen bg-[#fff5fa] px-6 py-16 text-[#06395c]">
        <div className="mx-auto max-w-6xl">
          <a href="/" className="text-sm font-semibold text-[#ec4aa3]">
            ← Back to Home
          </a>

          <h1 className="mt-6 text-4xl font-light md:text-6xl">
            Peptide Education
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
            Browse educational peptide information by category. This content is
            for informational purposes only and is not medical advice.
          </p>

          <div className="mt-12 space-y-10">
            {categories.map((category) => (
              <section key={category} className="rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="text-2xl font-semibold">{category}</h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {EDUCATION_ITEMS.filter(
                    (item) => item.category === category
                  ).map((item) => (
                    <Link
                      key={item.slug}
                      href={`/education/${item.slug}`}
                      className="rounded-xl border border-gray-200 p-5 transition hover:border-[#ec4aa3] hover:shadow-md"
                    >
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.summary}
                      </p>
                      <p className="mt-4 text-sm font-semibold text-[#ec4aa3]">
                        Read more →
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}