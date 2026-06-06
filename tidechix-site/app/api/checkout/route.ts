import { NextResponse } from "next/server";
import { Resend } from "resend";

function toNumber(value: any) {
  if (typeof value === "number") return value;
  if (typeof value === "string") return Number(value.replace("$", ""));
  return 0;
}

function getItemName(item: any) {
  return item.name || item.title || item.productName || item.product?.name || "Item";
}

function getItemQuantity(item: any) {
  return toNumber(item.quantity || item.qty || 1);
}

function getItemPrice(item: any) {
  return toNumber(item.price || item.unitPrice || item.amount || item.product?.price || 0);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const customer = body.customer;
    const cart = body.cart || body.items || [];

    if (!customer) {
      return NextResponse.json({ error: "Customer information is required." }, { status: 400 });
    }

    if (!cart || cart.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    if (!customer.name || !customer.email || !customer.phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    if (!customer.paymentMethod) {
      return NextResponse.json({ error: "Payment method is required." }, { status: 400 });
    }

    if (
      customer.deliveryMethod === "Shipping" &&
      (!customer.address || !customer.city || !customer.state || !customer.zip)
    ) {
      return NextResponse.json(
        { error: "Shipping address is required for shipping orders." },
        { status: 400 }
      );
    }

    const orderNumber = `TC-${Date.now()}`;

    const finalSubtotal = cart.reduce((sum: number, item: any) => {
      const price = getItemPrice(item);
      const quantity = getItemQuantity(item);
      return sum + price * quantity;
    }, 0);

    const finalShippingCost = customer.deliveryMethod === "Shipping" ? 10 : 0;
    const finalTotal = finalSubtotal + finalShippingCost;

    const itemsText = cart
      .map((item: any) => {
        const name = getItemName(item);
        const quantity = getItemQuantity(item);
        const price = getItemPrice(item);
        return `${name} x ${quantity} - $${(price * quantity).toFixed(2)}`;
      })
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
Payment must be received before any Venmo or Cash App orders are shipped or available for pickup.

If Cash Pickup was selected, customer should contact The Tide Chix for pickup instructions.
      `,
    });

    await resend.emails.send({
      from: "The Tide Chix <onboarding@resend.dev>",
      to: customer.email,
      subject: `Tide Chix Order Confirmation ${orderNumber}`,
      text: `
Thank you for your order from The Tide Chix!

ORDER NUMBER
${orderNumber}

CUSTOMER INFORMATION
Name: ${customer.name}
Email: ${customer.email}
Phone: ${customer.phone}

DELIVERY METHOD
${customer.deliveryMethod}

PAYMENT METHOD
${customer.paymentMethod}

ITEMS ORDERED
${itemsText}

ORDER TOTALS
Subtotal: $${finalSubtotal.toFixed(2)}
Shipping: $${finalShippingCost.toFixed(2)}
Total: $${finalTotal.toFixed(2)}

${
  customer.paymentMethod === "Venmo" || customer.paymentMethod === "Cash App"
    ? `IMPORTANT:
Payment is still required before your order can be processed.

Please include Order #${orderNumber} in your payment notes.`
    : ""
}

LOCAL PICKUP
If you selected Local Pickup, please contact The Tide Chix to arrange pickup instructions.

Phone: (385) 269-9260
Email: thetidechix@gmail.com

Thank you,
The Tide Chix
      `,
    });

    return NextResponse.json({
      orderNumber,
      payment: customer.paymentMethod,
      delivery: customer.deliveryMethod,
      total: finalTotal.toFixed(2),
    });
  } catch (error: any) {
    console.error("Order error:", error);

    return NextResponse.json(
      { error: error.message || "Unable to submit order" },
      { status: 500 }
    );
  }
}