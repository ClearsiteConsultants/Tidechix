"use client";

import { useEffect, useState } from "react";
import { PRODUCTS } from "@/app/lib/products";

type CartItem = {
  id: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

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
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    saveCart(updatedCart);
  };

  const decreaseQuantity = (id: string) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
      .filter((item) => item.quantity > 0);

    saveCart(updatedCart);
  };

  const removeItem = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    saveCart(updatedCart);
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

  const total = cartProducts.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const checkout = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      alert(data.error || "Checkout failed. Please try again.");
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        padding: "40px 20px",
        maxWidth: "950px",
        margin: "0 auto",
      }}
    >
      <section
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
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
          <p>Your cart is empty.</p>
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
                    gap: "16px",
                  }}
                >
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    style={{
                      width: "34px",
                      height: "34px",
                      border: "1px solid #073b5c",
                      background: "white",
                      color: "#073b5c",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    style={{
                      width: "34px",
                      height: "34px",
                      border: "1px solid #073b5c",
                      background: "white",
                      color: "#073b5c",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>

                  <strong style={{ minWidth: "90px", textAlign: "right" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </strong>

                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "#ff4fa3",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div
              style={{
                marginTop: "35px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#073b5c",
              }}
            >
              <h2>Total</h2>
              <h2>${total.toFixed(2)}</h2>
            </div>

            <p style={{ color: "#64748b" }}>Free US Shipping</p>

            <button
              onClick={checkout}
              disabled={loading}
              style={{
                width: "100%",
                marginTop: "25px",
                padding: "16px",
                background: "#073b5c",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Redirecting..." : "Checkout"}
            </button>
          </>
        )}
      </section>
    </main>
  );
}