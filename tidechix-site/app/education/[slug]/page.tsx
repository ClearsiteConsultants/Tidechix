import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/app/components/Footer";
import { EDUCATION_ITEMS } from "@/app/lib/education";

type EducationDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return EDUCATION_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

export default async function EducationDetailPage({
  params,
}: EducationDetailPageProps) {
  const { slug } = await params;

  const item = EDUCATION_ITEMS.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-[#fff5fa] px-6 py-16 text-[#06395c]">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
          <Link
            href="/education"
            className="text-sm font-semibold text-[#ec4aa3]"
          >
            ← Back to Education Library
          </Link>

          <p className="mt-8 uppercase tracking-[0.3em] text-[#ec4aa3]">
            {item.category}
          </p>

          <h1 className="mt-4 text-4xl font-light md:text-6xl">
            {item.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            {item.summary}
          </p>

          <div className="mt-10 space-y-10">
            {item.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold">{section.heading}</h2>

                <div className="mt-4 space-y-3 text-gray-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-8">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-7 text-gray-600">
            <p className="font-semibold text-[#06395c]">Disclaimer</p>
            <p className="mt-2">
              This information is provided for educational purposes only and is
              not medical advice. It is not intended to diagnose, treat, cure, or
              prevent any disease. Consult a licensed healthcare professional
              for personal health questions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}