import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function SuccessPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fff5fa] px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-10 text-center shadow-lg">
          <div className="text-6xl">✓</div>

          <h1 className="mt-4 text-4xl font-bold text-[#06395c]">
            Order Received
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Thank you for your purchase!
          </p>

          <p className="mt-4 text-gray-600">
            Your order has been successfully submitted.
          </p>

          <p className="mt-2 text-gray-600">
            A confirmation receipt will be sent shortly.
          </p>

          <div className="mt-10 rounded-xl bg-[#f7fbff] p-6">
            <h2 className="text-xl font-semibold text-[#06395c]">
              Local Pickup Orders
            </h2>

            <p className="mt-3 text-gray-700">
              If you selected Local Pickup at checkout, please contact The
              Peptide Chix to arrange pickup instructions.
            </p>

            <p className="mt-4 text-lg font-medium text-[#06395c]">
              (385) 269-9260
            </p>

            <p className="mt-2 text-lg text-[#ec4aa3]">
              thetidechix@gmail.com
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-semibold text-[#06395c]">
              Questions?
            </h2>

            <p className="mt-3 text-gray-700">
              For order questions, shipping updates, or product support, contact
              us anytime.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/products"
              className="rounded-md bg-[#ec4aa3] px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}