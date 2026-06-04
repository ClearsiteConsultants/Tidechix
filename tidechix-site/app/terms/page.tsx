import Footer from "@/app/components/Footer";

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fff5fa] px-6 py-16 text-[#06395c]">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-light">Terms & Conditions</h1>

          <p className="mt-6 text-gray-700">
            By accessing this website or purchasing from The Peptide Chix, you
            agree to these Terms & Conditions.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Age Requirement</h2>
          <p className="mt-3 text-gray-700">
            You must be at least 18 years of age to purchase products from this
            website.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Product Disclaimer</h2>
          <p className="mt-3 text-gray-700">
            Products are not intended to diagnose, treat, cure, or prevent any
            disease. Information on this website is for informational purposes
            only and should not be considered medical advice.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Buyer Responsibility</h2>
          <p className="mt-3 text-gray-700">
            Buyer is responsible for understanding all applicable laws,
            regulations, handling requirements, and risks related to purchased
            products.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Indemnification</h2>
          <p className="mt-3 text-gray-700">
            Buyer agrees to indemnify, defend, and hold harmless The Peptide
            Chix, its owners, employees, contractors, and affiliates from any
            claims, damages, liabilities, losses, or expenses arising from
            purchase, handling, misuse, or use of products.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Limitation of Liability</h2>
          <p className="mt-3 text-gray-700">
            To the fullest extent permitted by law, The Peptide Chix shall not
            be liable for indirect, incidental, consequential, or punitive
            damages.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-gray-700">
            Phone: (385) 269-9260
            <br />
            Email: thetidechix@gmail.com
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}