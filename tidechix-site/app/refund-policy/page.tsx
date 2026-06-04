import Footer from "@/app/components/Footer";

export default function RefundPolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fff5fa] px-6 py-16 text-[#06395c]">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-light">Refund Policy</h1>

          <p className="mt-6 text-gray-700">
            Due to the nature of our products, all sales are final once an order
            is placed.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Cancellations</h2>
          <p className="mt-3 text-gray-700">
            Orders that have already shipped cannot be cancelled. If you need to
            request a cancellation, contact us as soon as possible.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Damaged or Incorrect Items</h2>
          <p className="mt-3 text-gray-700">
            If you receive an incorrect item or damaged shipment, contact us
            within 48 hours of delivery with your order details and photos if
            applicable.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Shipping Delays</h2>
          <p className="mt-3 text-gray-700">
            Carrier delays do not automatically qualify for a refund.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Contact</h2>
        <div className="mt-3 space-y-2 text-gray-700">
  <div>
    📞{" "}
    <a
      href="tel:+13852699260"
      className="text-[#ec4aa3] hover:underline"
    >
      (385) 269-9260
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