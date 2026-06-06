"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PRODUCTS } from "@/app/lib/products";

type CartItem = {
  id: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [acknowledgedAge, setAcknowledgedAge] = useState(false);
  const [agreedToLiability, setAgreedToLiability] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    deliveryMethod: "Shipping",
    paymentMethod: "Venmo",
    address: "",
    city: "",
    state: "",
    zip: "",
    notes: "",
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id: string) => {
    saveCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    saveCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    saveCart(cart.filter((item) => item.id !== id));
  };

  const cartProducts = cart
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      if (!product) return null;

      return {
        ...product,
        quantity: item.quantity,
      };
    })
    .filter(Boolean) as Array<(typeof PRODUCTS)[number] & { quantity: number }>;

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingCost = customer.deliveryMethod === "Shipping" ? 10 : 0;
  const total = subtotal + shippingCost;

  const updateDeliveryMethod = (deliveryMethod: string) => {
    setCustomer((current) => ({
      ...current,
      deliveryMethod,
      paymentMethod:
        deliveryMethod === "Shipping" && current.paymentMethod === "Cash Pickup"
          ? "Venmo"
          : current.paymentMethod,
    }));
  };

  const placeOrder = async () => {
    if (!acknowledgedAge || !agreedToLiability) {
      alert(
        "Please accept the age and liability acknowledgements before placing your order."
      );
      return;
    }

    if (!customer.name || !customer.email || !customer.phone) {
      alert("Please enter your name, email, and phone number.");
      return;
    }

    if (customer.deliveryMethod === "Shipping") {
      if (
        !customer.address ||
        !customer.city ||
        !customer.state ||
        !customer.zip
      ) {
        alert("Please enter your full shipping address.");
        return;
      }

      if (customer.paymentMethod === "Cash Pickup") {
        alert("Cash payment is only available for local pickup.");
        return;
      }
    }

    try {
      setLoading(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart,
          customer,
          subtotal,
          shippingCost,
          total,
          acknowledgedAge,
          agreedToLiability,
        }),
      });

      const data = await response.json();

      if (data.orderNumber) {
        localStorage.removeItem("cart");

        window.location.href = `/success?order=${
          data.orderNumber
        }&payment=${encodeURIComponent(
          customer.paymentMethod
        )}&delivery=${encodeURIComponent(
          customer.deliveryMethod
        )}&total=${total.toFixed(2)}`;

        return;
      }

      alert(data.error || "Order failed. Please try again.");
    } catch (error) {
      console.error("Order error:", error);
      alert("Order failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const buttonDisabled = loading || !acknowledgedAge || !agreedToLiability;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff5fa",
        padding: "40px 20px",
      }}
    >
      <section
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "40px",
          maxWidth: "950px",
          margin: "0 auto",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <Link
          href="/products"
          style={{
            display: "inline-block",
            marginBottom: "25px",
            color: "#ec4aa3",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          ← Continue Shopping
        </Link>

        <h1
          style={{
            color: "#073b5c",
            fontSize: "34px",
            marginBottom: "30px",
            letterSpacing: "1px",
          }}
        >
          YOUR CART
        </h1>

        {cartProducts.length === 0 ? (
          <p style={{ color: "#073b5c" }}>Your cart is empty.</p>
        ) : (
          <>
            {cartProducts.map((item) => (
              <div
                key={item.id}
                style={{
                  borderBottom: "1px solid #eee",
                  padding: "20px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <h3
                    style={{
                      color: "#073b5c",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.name}
                  </h3>

                  <p style={{ margin: 0, color: "#334155" }}>
                    ${item.price.toFixed(2)} each
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>

                  <span style={{ color: "#073b5c", fontWeight: "bold" }}>
                    {item.quantity}
                  </span>

                  <button onClick={() => increaseQuantity(item.id)}>+</button>

                  <strong style={{ color: "#073b5c" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </strong>

                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "#ec4aa3",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div style={{ marginTop: "35px", color: "#073b5c" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span>
                  {customer.deliveryMethod === "Shipping"
                    ? "Shipping"
                    : "Local Pickup"}
                </span>
                <strong>
                  {customer.deliveryMethod === "Shipping"
                    ? "$10.00"
                    : "$0.00"}
                </strong>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "24px",
                  fontWeight: "bold",
                  borderTop: "1px solid #eee",
                  paddingTop: "14px",
                  marginTop: "14px",
                }}
              >
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div
              style={{
                marginTop: "20px",
                padding: "18px",
                borderRadius: "12px",
                background: "#fff5fa",
                color: "#073b5c",
                lineHeight: "1.6",
              }}
            >
              <strong>Payment Notice:</strong>

              {customer.paymentMethod === "Cash Pickup" ? (
                <p style={{ margin: "8px 0 0" }}>
                  Please submit your order, then contact The Tide Chix for
                  pickup instructions. Cash is accepted at pickup only.
                </p>
              ) : (
                <p style={{ margin: "8px 0 0" }}>
                  Payment must be received before your order is shipped or
                  available for pickup. Please include your order number in the
                  Venmo or Zelle payment memo.
                </p>
              )}
            </div>

            <div
              style={{
                marginTop: "35px",
                display: "grid",
                gap: "14px",
              }}
            >
              <h2 style={{ color: "#073b5c", marginBottom: "5px" }}>
                Customer Information
              </h2>

              <input
                placeholder="Name"
                value={customer.name}
                onChange={(e) =>
                  setCustomer({ ...customer, name: e.target.value })
                }
                style={inputStyle}
              />

              <input
                placeholder="Email"
                value={customer.email}
                onChange={(e) =>
                  setCustomer({ ...customer, email: e.target.value })
                }
                style={inputStyle}
              />

              <input
                placeholder="Phone"
                value={customer.phone}
                onChange={(e) =>
                  setCustomer({ ...customer, phone: e.target.value })
                }
                style={inputStyle}
              />

              <h2 style={{ color: "#073b5c", marginTop: "20px" }}>
                Delivery Method
              </h2>

              <select
                value={customer.deliveryMethod}
                onChange={(e) => updateDeliveryMethod(e.target.value)}
                style={inputStyle}
              >
                <option value="Shipping">Shipping - $10 flat rate</option>
                <option value="Local Pickup">Local Pickup - Free</option>
              </select>

              <h2 style={{ color: "#073b5c", marginTop: "20px" }}>
                Payment Method
              </h2>

              <select
                value={customer.paymentMethod}
                onChange={(e) =>
                  setCustomer({ ...customer, paymentMethod: e.target.value })
                }
                style={inputStyle}
              >
                <option value="Venmo">Venmo</option>
                <option value="Zelle">Zelle</option>
                {customer.deliveryMethod === "Local Pickup" && (
                  <option value="Cash Pickup">Cash Pickup</option>
                )}
              </select>

              <h2 style={{ color: "#073b5c", marginTop: "20px" }}>
                Shipping Information
              </h2>

              <p style={{ color: "#64748b", marginTop: "-6px" }}>
                Shipping is $10 flat rate. If choosing local pickup, address is
                not required.
              </p>

              <input
                placeholder="Shipping Address"
                value={customer.address}
                onChange={(e) =>
                  setCustomer({ ...customer, address: e.target.value })
                }
                style={inputStyle}
              />

              <input
                placeholder="City"
                value={customer.city}
                onChange={(e) =>
                  setCustomer({ ...customer, city: e.target.value })
                }
                style={inputStyle}
              />

              <input
                placeholder="State"
                value={customer.state}
                onChange={(e) =>
                  setCustomer({ ...customer, state: e.target.value })
                }
                style={inputStyle}
              />

              <input
                placeholder="ZIP Code"
                value={customer.zip}
                onChange={(e) =>
                  setCustomer({ ...customer, zip: e.target.value })
                }
                style={inputStyle}
              />

              <textarea
                placeholder="Order notes"
                value={customer.notes}
                onChange={(e) =>
                  setCustomer({ ...customer, notes: e.target.value })
                }
                style={{
                  ...inputStyle,
                  minHeight: "90px",
                  resize: "vertical",
                }}
              />
            </div>

            <div
              style={{
                marginTop: "25px",
                padding: "18px",
                borderRadius: "12px",
                background: "#f8fafc",
                color: "#073b5c",
                display: "grid",
                gap: "14px",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              <label style={{ display: "flex", gap: "10px" }}>
                <input
                  type="checkbox"
                  checked={acknowledgedAge}
                  onChange={(e) => setAcknowledgedAge(e.target.checked)}
                />
                <span><span>
  I certify that I am at least 18 years of age and understand that all
  products sold by The Tide Chix are intended for research purposes only.
  I acknowledge that these products are not intended for human or animal
  consumption and are not intended to diagnose, treat, cure, or prevent
  any disease or medical condition. I understand that I am solely
  responsible for determining the appropriate use of any product purchased
  and agree to consult a qualified medical professional regarding any
  health-related questions. By purchasing from The Tide Chix, I assume all
  risks and liabilities associated with the purchase, possession,
  handling, storage, and use of these products, and I agree to indemnify,
  defend, and hold harmless The Tide Chix, its owners, affiliates,
  employees, and representatives from any claims, damages, losses,
  liabilities, costs, or expenses arising from my purchase or use of these
  products.
</span>.</span>
              </label>

              <label style={{ display: "flex", gap: "10px" }}>
                <input
                  type="checkbox"
                  checked={agreedToLiability}
                  onChange={(e) => setAgreedToLiability(e.target.checked)}
                />
                <span>
                  I acknowledge and agree to The Tide Chix{" "}
                  <a href="/terms" style={{ color: "#ec4aa3" }}>
                    Terms & Conditions
                  </a>
                  ,{" "}
                  <a href="/privacy" style={{ color: "#ec4aa3" }}>
                    Privacy Policy
                  </a>
                  ,{" "}
                  <a href="/refund-policy" style={{ color: "#ec4aa3" }}>
                    Refund Policy
                  </a>
                  , and{" "}
                  <a href="/shipping-policy" style={{ color: "#ec4aa3" }}>
                    Shipping Policy
                  </a>
                  , including buyer responsibility, product disclaimer, and
                  limitation of liability.
                </span>
              </label>
            </div>

            <button
              onClick={placeOrder}
              disabled={buttonDisabled}
              style={{
                width: "100%",
                marginTop: "25px",
                padding: "16px",
                background: "#073b5c",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: buttonDisabled ? "not-allowed" : "pointer",
                opacity: buttonDisabled ? 0.6 : 1,
              }}
            >
              {loading ? "Submitting Order..." : "Place Order"}
            </button>
          </>
        )}
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  border: "1px solid #cbd5e1",
  borderRadius: "8px",
  fontSize: "15px",
};