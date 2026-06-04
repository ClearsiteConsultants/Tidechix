import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PRODUCTS } from "@/app/lib/products";

type CartItem = {
  id: string;
  quantity: number;
};

export async function POST(req: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY in .env.local" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secretKey);

    const { cart, acknowledgedResearchUse, agreedToTerms } = await req.json();

    if (!cart || cart.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    if (!acknowledgedResearchUse || !agreedToTerms) {
      return NextResponse.json(
        {
          error:
            "You must accept the required acknowledgements and terms before checkout.",
        },
        { status: 400 }
      );
    }

    const line_items = cart.map((item: CartItem) => {
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
      custom_text: {
        submit: {
          message:
            "By submitting this order, you confirm that you are at least 18 years old and agree to The Peptide Chix Terms & Conditions, Privacy Policy, Refund Policy, and Shipping Policy.",
        },
      },
      metadata: {
        acknowledgedResearchUse: "true",
        agreedToTerms: "true",
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