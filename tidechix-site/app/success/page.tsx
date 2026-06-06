"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();

  const orderNumber = searchParams.get("order") || "N/A";
  const payment = searchParams.get("payment") || "";
  const delivery = searchParams.get("delivery") || "";
  const total = searchParams.get("total") || "";

  const zelleEmail = "thetidechix@gmail.com";

  return (
    <main className="min-h-screen bg-pink-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="text-5xl">✓</div>

        <h1 className="mt-4 text-4xl font-bold text-[#06395c]">
          Order Received
        </h1>

        <p className="mt-4 text-lg">Thank you for your purchase!</p>

        <p className="mt-2 text-gray-700">
          Your order has been successfully submitted.
        </p>

        <p className="mt-2 text-gray-700">
          A confirmation receipt will be sent shortly.
        </p>

        <div className="mt-8 rounded-xl border bg-gray-50 p-5">
          <p className="text-lg font-bold text-[#06395c]">
            Order #{orderNumber}
          </p>

          {total && (
            <p className="mt-2 text-lg font-semibold">
              Total Due: ${total}
            </p>
          )}

          {payment && (
            <p className="mt-1 text-sm text-gray-600">
              Payment Method: {payment}
            </p>
          )}

          {delivery && (
            <p className="mt-1 text-sm text-gray-600">
              Delivery Method: {delivery}
            </p>
          )}
        </div>

        {(payment === "Venmo" || payment === "Zelle") && (
          <div className="mt-8 rounded-xl border p-6">
            <h2 className="text-2xl font-bold text-[#06395c]">
              Complete Your Payment
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Use one of the payment methods below and include your order number
              in the payment note.
            </p>

            <p className="mt-4 text-sm font-semibold text-red-600">
              Orders are not processed until payment is received.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-bold">Venmo</h3>

              <img
                src="/venmo-qr.png"
                alt="Venmo QR Code"
                className="mx-auto mt-3 h-56 w-56 rounded-lg border object-contain"
              />

              <p className="mt-2 text-sm font-medium">
                Scan the QR code to pay with Venmo.
              </p>
            </div>

            <div className="mt-8 border-t pt-6">
              <h3 className="text-lg font-bold">Zelle</h3>

              <p className="mt-2 text-sm text-gray-600">
                Send Zelle payment to:
              </p>

              <p className="mt-1 font-semibold text-[#06395c]">
                {zelleEmail}
              </p>

              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(zelleEmail)}
                className="mt-3 rounded-lg bg-[#ec4aa3] px-5 py-2 text-sm font-semibold text-white hover:bg-[#d83f93]"
              >
                Copy Zelle Email
              </button>

              <img
                src="/zelle-qr.png"
                alt="Zelle QR Code"
                className="mx-auto mt-4 h-56 w-56 rounded-lg border object-contain"
              />

              <p className="mt-2 text-sm font-medium">
                Scan the QR code or use the email above to pay with Zelle.
              </p>
            </div>
          </div>
        )}

        {delivery === "Local Pickup" && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#06395c]">
              Local Pickup Orders
            </h2>

            <p className="mt-4 text-gray-700">
              If you selected Local Pickup at checkout, please contact The
              Peptide Chix to arrange pickup instructions.
            </p>

            <p className="mt-4 text-lg font-medium">
              📞{" "}
              <a
                href="tel:+13852699260"
                className="text-[#06395c] hover:text-[#ec4aa3] hover:underline"
              >
                (385) 269-9260
              </a>
            </p>

            <p className="mt-2 text-lg">
              ✉{" "}
              <a
                href="mailto:thetidechix@gmail.com"
                className="text-[#ec4aa3] hover:underline"
              >
                thetidechix@gmail.com
              </a>
            </p>
          </div>
        )}

        <div className="mt-8 rounded-xl border p-5">
          <h2 className="text-xl font-bold text-[#06395c]">Questions?</h2>

          <p className="mt-3 text-gray-700">
            For order questions, shipping updates, or product support, contact
            us anytime.
          </p>
        </div>

        <Link
          href="/products"
          className="mt-8 inline-block rounded-lg bg-[#ec4aa3] px-8 py-3 font-semibold text-white hover:bg-[#d83f93]"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}