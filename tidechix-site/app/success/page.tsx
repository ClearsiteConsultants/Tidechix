"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();

  const orderNumber = searchParams.get("order") || "N/A";
  const payment = searchParams.get("payment") || "";
  const delivery = searchParams.get("delivery") || "";
  const total = searchParams.get("total") || "";

  return (
    <main className="min-h-screen bg-pink-50 px-4 py-10 text-[#06395c]">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="text-5xl">✓</div>

        <h1 className="mt-4 text-4xl font-bold">Order Received</h1>

        <p className="mt-4 text-lg text-gray-800">
          Thank you for your purchase!
        </p>

        <p className="mt-2 text-gray-700">
          Your order has been successfully submitted.
        </p>

        <p className="mt-2 text-gray-700">
          A confirmation receipt will be sent shortly.
        </p>

        <div className="mt-8 rounded-xl border bg-gray-50 p-5">
          <p className="text-lg font-bold">Order #{orderNumber}</p>

          {total && (
            <p className="mt-2 text-lg font-semibold">Total Due: ${total}</p>
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

        {(payment === "Venmo" || payment === "Cash App") && (
          <div className="mt-8 rounded-xl border p-6">
            <h2 className="text-2xl font-bold">Complete Your Payment</h2>

            <p className="mt-2 text-sm text-gray-600">
              Include your order number in the payment note.
            </p>

            <p className="mt-4 text-sm font-semibold text-red-600">
              Orders are not processed until payment is received.
            </p>

            {payment === "Venmo" && (
              <div className="mt-6">
                <h3 className="text-lg font-bold">Venmo</h3>

                <img
                  src="/venmo.jpeg"
                  alt="Venmo QR Code"
                  className="mx-auto mt-3 max-h-80 w-auto rounded-lg border bg-white p-2"
                />

                <p className="mt-3 font-semibold">@ThePeptideChix</p>

                <p className="mt-2 text-sm font-medium">
                  Scan the QR code to pay with Venmo.
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Please include Order #{orderNumber} in the payment notes.
                </p>
              </div>
            )}

            {payment === "Cash App" && (
              <div className="mt-6">
                <h3 className="text-lg font-bold">Cash App</h3>

                <img
                  src="/cashapp.jpeg"
                  alt="Cash App QR Code"
                  className="mx-auto mt-3 max-h-80 w-auto rounded-lg border bg-white p-2"
                />

                <p className="mt-3 font-semibold">$ThePeptideChix</p>

                <p className="mt-2 text-sm font-medium">
                  Scan the QR code to pay with Cash App.
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Please include Order #{orderNumber} in the payment notes.
                </p>
              </div>
            )}
          </div>
        )}

        {delivery === "Local Pickup" && (
          <div className="mt-8">
            <h2 className="text-xl font-bold">Local Pickup Orders</h2>

            <p className="mt-4 text-gray-700">
              If you selected Local Pickup at checkout, please contact The
              Peptide Chix to arrange pickup instructions.
            </p>

            <p className="mt-4 text-lg font-medium">
              📞{" "}
              <a
                href="tel:+13852699260"
                className="hover:text-[#ec4aa3] hover:underline"
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
          <h2 className="text-xl font-bold">Questions?</h2>

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

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading order details...</div>}>
      <SuccessContent />
    </Suspense>
  );
}