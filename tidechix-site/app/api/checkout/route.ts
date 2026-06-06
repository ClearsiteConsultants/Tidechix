import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PRODUCTS } from "@/app/lib/products";

type CartItem = {
  id: string;
  quantity: number;
};

export async function POST(req: Request) {
  try {
    const { cart, customer, subtotal, shippingCost, total } = await req.json();

    if (!cart || cart.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    if (!customer?.name || !customer?.email || !customer?.phone) {
      return NextResponse.json(
        { error: "Missing customer information" },
        { status: 400 }
      );
    }

    const orderNumber = `TC-${Date.now()}`;

    const cartProducts = cart.map((item: CartItem) => {
      const product = PRODUCTS.find((p) => p.id === item.id);

      if (!product) {
        throw new Error(`Product not found: ${item.id}`);
      }

      return {
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        subtotal: product.price * item.quantity,
      };
    });

const calculatedSubtotal = cartProducts.reduce(
  (sum: number, item: { subtotal: number }) => sum + item.subtotal,
  0
);

    const finalSubtotal =
      typeof subtotal === "number" ? subtotal : calculatedSubtotal;

    const finalShippingCost =
      typeof shippingCost === "number"
        ? shippingCost
        : customer.deliveryMethod === "Shipping"
        ? 10
        : 0;

    const finalTotal =
      typeof total === "number" ? total : finalSubtotal + finalShippingCost;

  const itemsText = cartProducts
  .map(
    (item: {
      name: string;
      price: number;
      quantity: number;
      subtotal: number;
    }) =>
      `${item.quantity} x ${item.name} — $${item.price.toFixed(
        2
      )} each — $${item.subtotal.toFixed(2)}`
  )
  .join("\n");

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "The Tide Chix <onboarding@resend.dev>",
      to: "thetidechix@gmail.com",
      subject: `New Tide Chix Order ${orderNumber}`,
      text: `
NEW ORDER RECEIVED

Order Number:
${orderNumber}

CUSTOMER INFORMATION
Name: ${customer.name}
Email: ${customer.email}
Phone: ${customer.phone}

DELIVERY METHOD
${customer.deliveryMethod}

SHIPPING ADDRESS
${customer.address || ""}
${customer.city || ""}, ${customer.state || ""} ${customer.zip || ""}

PAYMENT METHOD
${customer.paymentMethod}

ITEMS ORDERED
${itemsText}

ORDER TOTALS
Subtotal: $${finalSubtotal.toFixed(2)}
Shipping: $${finalShippingCost.toFixed(2)}
Total: $${finalTotal.toFixed(2)}

CUSTOMER NOTES
${customer.notes || "None"}

IMPORTANT
Payment must be received before any Venmo or Zelle orders are shipped or available for pickup.

If Cash Pickup was selected, customer should contact The Tide Chix for pickup instructions.
      `,
    });

    return NextResponse.json({ orderNumber });
  } catch (error: any) {
    console.error("Order error:", error);

    return NextResponse.json(
      { error: error.message || "Unable to submit order" },
      { status: 500 }
    );
  }
}
