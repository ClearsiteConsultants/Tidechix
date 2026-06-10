export default function Footer() {
  return (
    <footer className="border-t bg-white px-6 py-8 text-center text-sm text-gray-600">
      <div className="flex flex-wrap justify-center gap-4">
        <a href="/terms" className="text-[#ec4aa3] underline">
          Terms & Conditions
        </a>
        <a href="/privacy" className="text-[#ec4aa3] underline">
          Privacy Policy
        </a>
        <a href="/refund-policy" className="text-[#ec4aa3] underline">
          Refund Policy
        </a>
        <a href="/shipping-policy" className="text-[#ec4aa3] underline">
          Shipping Policy
        </a>
      </div>

      <p className="mt-4">
        © {new Date().getFullYear()} The Peptide Chix. All rights reserved.
      </p>

     <div className="mt-2 flex flex-wrap justify-center gap-4">
  <a
    href="tel:+18013864110"
    className="hover:text-[#ec4aa3] hover:underline"
  >
    📞 (801) 386-4110
  </a>

  <a
    href="mailto:thetidechix@gmail.com"
    className="hover:text-[#ec4aa3] hover:underline"
  >
    ✉ thetidechix@gmail.com
  </a>
</div>
    </footer>
  );
}