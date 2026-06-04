import Footer from "@/app/components/Footer";

export default function ShippingPolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fff5fa] px-6 py-16 text-[#06395c]">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-light">Shipping Policy</h1>

          <p className="mt-6 text-gray-700">
            The Peptide Chix currently offers free shipping within the United
            States.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Processing Time</h2>
          <p className="mt-3 text-gray-700">
            Orders are processed as quickly as possible. Processing times may
            vary due to weekends, holidays, inventory, or carrier delays.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Shipping Address</h2>
          <p className="mt-3 text-gray-700">
            Customers are responsible for entering accurate shipping
            information. The Peptide Chix is not responsible for delays or lost
            shipments due to incorrect addresses.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Carrier Delays</h2>
          <p className="mt-3 text-gray-700">
            Delivery times may vary based on carrier availability, weather,
            holidays, or circumstances outside our control.
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