import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fff5fa] px-6 py-16 text-[#06395c]">
<div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg">

  <Link
    href="/"
    className="inline-flex items-center mb-4 text-[#06395c] hover:text-[#ec4aa3] hover:underline"
  >
    ← Return to Home
  </Link>

  <h1 className="text-4xl font-light">Privacy Policy</h1>

          <p className="mt-6 text-gray-700">
            The Peptide Chix respects your privacy and is committed to
            protecting your personal information.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Information We Collect</h2>
          <p className="mt-3 text-gray-700">
            We may collect your name, email address, phone number, shipping
            address, billing details, and order information.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">How We Use Information</h2>
          <p className="mt-3 text-gray-700">
            Information is used to process orders, fulfill shipments, provide
            customer support, prevent fraud, and comply with legal obligations.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Payment Processing</h2>
<p className="mt-3 text-gray-700">
  Payments are processed through approved third-party payment providers.
  The Peptide Chix does not store banking or payment account information.
</p>

          <h2 className="mt-8 text-2xl font-semibold">Information Sharing</h2>
          <p className="mt-3 text-gray-700">
            We do not sell customer personal information. Information may be
            shared only as needed with payment processors, shipping providers,
            service providers, or as required by law.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Contact</h2>
<div className="mt-3 space-y-2 text-gray-700">
  <div>
    📞{" "}
    <a
      href="tel:+18013864110"
      className="text-[#ec4aa3] hover:underline"
    >
      (801) 386-4110
    </a>
  </div>

  <div>
    ✉{" "}
    <a
      href="mailto:thetidechix@gmail.com"
      className="text-[#ec4aa3] hover:underline"
    >
      thetidechix@gmail.com
    </a>
  </div>
</div>
        </div>
      </main>
      <Footer />
    </>
  );
}