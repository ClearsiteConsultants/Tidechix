import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PRODUCTS } from "@/app/lib/products";

export async function POST(req: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    console.log("STRIPE KEY LOADED =", secretKey ? "YES" : "NO");

    if (!secretKey) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY in .env.local" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secretKey);

    const { cart } = await req.json();

    if (!cart || cart.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const line_items = cart.map((item: { id: string; quantity: number }) => {
      const product = PRODUCTS.find((p) => p.id === item.id);

      if (!product) {
        throw new Error(`Product not found: ${item.id}`);
      }

      return {
        price: product.stripePriceId,
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free US Shipping",
          },
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/products#cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      {
        error: error.message || "Unable to create checkout session",
      },
      { status: 500 }
    );
  }
}