"use client";

import { useEffect, useState } from "react";
import { PRODUCTS, Product } from "@/app/lib/products";
import Footer from "@/app/components/Footer";

type CartItem = {
  id: string;
  quantity: number;
};

type InventoryItem = {
  id: string;
  name: string;
  stock: number;
  active: boolean;
  threshold: number;
  status: string;
};

type ProductSection = {
  title: string;
  products: Product[];
};

const descriptions: Record<string, string> = {
  tirzepatide15: "Metabolic and weight management support.",
  retatrutide20: "GLP support for weight management goals.",
  retatrutide30: "GLP support for weight management goals.",
  cagrilintide5:
    "Amylin pathway support associated with appetite regulation and weight management goals.",
  aod9604: "Weight management support associated with fat metabolism research.",
  hulkstack10:
    "Growth hormone pathway support for recovery, sleep quality, body composition, and performance.",
  sermorelin5:
    "Supports natural growth hormone signaling, recovery, sleep, and body composition goals.",
  tesamorelin10:
    "Supports natural growth hormone signaling and metabolic support.",
  wolverine10:
    "BPC-157 + TB-500. Comprehensive recovery and soft tissue support.",
  ghkcu50:
    "Supports collagen health, skin texture, wound recovery, and hair wellness.",
  melanotan1: "Associated with skin tanning and pigmentation support.",
  glowstack70:
    "BPC-157 + TB-500 + GHK-CU. Skin, collagen, and tissue wellness support.",
  klowstack80:
    "BPC-157 + TB-500 + GHK-CU + KPV. Combined recovery, gut, inflammatory, and aesthetic support.",
  semax10: "Supports focus, memory, mental clarity, and cognitive performance.",
  selank10: "Associated with calm focus, mood balance, and stress resilience.",
  dsip10: "Supports sleep quality and nervous system recovery.",
  motsc10:
    "Mitochondrial peptide associated with metabolic efficiency and energy production.",
  nad1000:
    "Supports mitochondrial energy production, cognitive performance, and cellular health.",
  ss31:
    "Mitochondrial support compound associated with cellular energy and longevity research.",
  kpv10: "Associated with gastrointestinal inflammatory support.",
  glutathione1500: "Supports detoxification and immune wellness.",
  vip10:
    "Wellness support associated with inflammation, immune, gut, and nervous system balance.",
  kisspeptin10:
    "Supports libido, hormone communication, and reproductive wellness.",
  pt141:
    "Sexual wellness support associated with libido, arousal, and intimacy.",
  bacwater10: "Bacteriostatic water 10ML.",
  alcoholwipes: "Box of 100 alcohol wipes.",
  reconstitutionneedles: "Reconstitution needles. $2.00 per needle.",
  syringes10pack: "10-pack of insulin unit syringes.",
};

function getProduct(id: string) {
  const product = PRODUCTS.find((item) => item.id === id);

  if (!product) {
    throw new Error(`Missing product: ${id}`);
  }

  return product;
}

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

export default function ProductsPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    fetch("/api/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data))
      .catch((error) => console.error("Inventory error:", error));
  }, []);

  function getInventory(productId: string) {
    return inventory.find((item) => item.id === productId);
  }

  function isActive(product: Product) {
    const item = getInventory(product.id);
    return item ? item.active : true;
  }

  const glpProducts: Product[] = [
    getProduct("tirzepatide15"),
    getProduct("retatrutide20"),
    getProduct("retatrutide30"),
  ].filter(isActive);

  const wellnessSections: ProductSection[] = [
    {
      title: "Muscle Performance, Strength & Recovery",
      products: [
        getProduct("hulkstack10"),
        getProduct("sermorelin5"),
        getProduct("tesamorelin10"),
        getProduct("wolverine10"),
      ].filter(isActive),
    },
    {
      title: "Skin, Hair & Aesthetic Wellness",
      products: [
        getProduct("ghkcu50"),
        getProduct("melanotan1"),
        getProduct("glowstack70"),
        getProduct("klowstack80"),
      ].filter(isActive),
    },
    {
      title: "Cognitive Wellness, Mood & Sleep Support",
      products: [
        getProduct("semax10"),
        getProduct("selank10"),
        getProduct("dsip10"),
        getProduct("motsc10"),
        getProduct("nad1000"),
        getProduct("ss31"),
      ].filter(isActive),
    },
    {
      title: "Gut Health & Inflammatory Support",
      products: [
        getProduct("cagrilintide5"),
        getProduct("aod9604"),
        getProduct("vip10"),
        getProduct("glutathione1500"),
        getProduct("kpv10"),
      ].filter(isActive),
    },
    {
      title: "Sexual Wellness & Intimacy Support",
      products: [getProduct("kisspeptin10"), getProduct("pt141")].filter(
        isActive
      ),
    },
  ].filter((section) => section.products.length > 0);

  const supplies: Product[] = [
    getProduct("bacwater10"),
    getProduct("alcoholwipes"),
    getProduct("reconstitutionneedles"),
    getProduct("syringes10pack"),
  ].filter(isActive);

  function saveCart(updatedCart: CartItem[]) {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

function addToCart(product: Product) {
  const stockInfo = getInventory(product.id);

  if (stockInfo?.status === "Out of Stock" || stockInfo?.stock === 0) {
    alert("This product is currently out of stock.");
    return;
  }

  const existingItem = cart.find((item) => item.id === product.id);
  const currentQuantity = existingItem?.quantity || 0;

  if (stockInfo && currentQuantity >= stockInfo.stock) {
    alert(`Only ${stockInfo.stock} available in stock.`);
    return;
  }

  if (existingItem) {
    saveCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    saveCart([...cart, { id: product.id, quantity: 1 }]);
  }

  setTimeout(() => {
    document.getElementById("cart")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}

  function removeFromCart(productId: string) {
    saveCart(cart.filter((item) => item.id !== productId));
  }

  function decreaseQuantity(productId: string) {
    saveCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function increaseQuantity(productId: string) {
    const cartItem = cart.find((item) => item.id === productId);
    const stockInfo = getInventory(productId);

    if (stockInfo && cartItem && cartItem.quantity >= stockInfo.stock) {
      alert(`Only ${stockInfo.stock} available in stock.`);
      return;
    }

    saveCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  const cartProducts = cart
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);

      if (!product) return null;

      return {
        ...product,
        quantity: item.quantity,
      };
    })
    .filter(Boolean) as Array<Product & { quantity: number }>;

  const cartTotal = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <main className="min-h-screen bg-[#fff5fa] text-[#06395c]">
        <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-4 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <img
              src="/peptide-chix-logo.png"
              alt="The Peptide Chix"
              className="h-16 w-auto md:h-20"
            />

            <div>
              <h1 className="text-lg font-bold text-[#06395c] md:text-2xl">
                THE PEPTIDE CHIX
              </h1>
              <p className="text-xs tracking-[0.2em] text-[#ec4aa3]">
                PRODUCTS • PRICING • WELLNESS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden gap-8 text-sm font-medium md:flex">
              <a href="/">Home</a>
              <a href="/products">Products & Pricing</a>
              <a href="/education">Education</a>
              <a href="/#contact">Contact</a>
            </nav>

            <a
              href="#cart"
              className="rounded-md bg-[#ec4aa3] px-4 py-3 text-sm font-semibold text-white"
            >
              Cart ({cartItemCount})
            </a>
          </div>
        </header>

        <section className="relative">
          <div
            className="relative h-[280px] bg-cover bg-center md:h-[420px]"
            style={{ backgroundImage: "url('/peptide.jpeg')" }}
          >
            <div className="absolute inset-0 bg-[#06395c]/30"></div>
            <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#fff5fa] to-transparent"></div>
          </div>

          <div className="mx-auto -mt-28 max-w-5xl rounded-2xl bg-white/95 px-6 py-12 text-center shadow-2xl backdrop-blur-sm md:px-12">
            <a
              href="/"
              className="mb-8 inline-block rounded-md border border-[#06395c] px-6 py-3 text-sm font-semibold text-[#06395c] transition hover:bg-[#06395c] hover:text-white"
            >
              ← Return to Home
            </a>

            <p className="uppercase tracking-[0.3em] text-[#ec4aa3]">
              Product Menu
            </p>

            <h1 className="mt-5 text-4xl font-light md:text-6xl">
              Products & Pricing
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
              Browse the catalog, add products to your cart, and review your
              order before placing your order.
            </p>
          </div>
        </section>

        <section id="cart" className="mx-auto mt-12 max-w-5xl px-6 md:px-10">
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-10">
            <h2 className="text-3xl font-light">Your Cart</h2>

            {cartProducts.length === 0 ? (
              <p className="mt-4 text-gray-600">Your cart is empty.</p>
            ) : (
              <div className="mt-8 space-y-5">
                {cartProducts.map((item) => (
                  <div
                    key={item.id}
                    className="grid gap-4 border-b border-gray-100 pb-5 md:grid-cols-[1fr_auto_auto]"
                  >
                    <div>
                      <p className="font-bold uppercase tracking-[0.08em]">
                        {item.name}
                      </p>

                      <p className="mt-1 text-sm text-gray-600">
                        {formatPrice(item.price)} each
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="rounded-md border px-3 py-1 font-bold"
                      >
                        -
                      </button>

                      <p className="min-w-8 text-center font-semibold">
                        {item.quantity}
                      </p>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="rounded-md border px-3 py-1 font-bold"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold">
                        {formatPrice(item.price * item.quantity)}
                      </p>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2 text-sm text-[#ec4aa3]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between pt-4 text-2xl font-bold">
                  <p>Total</p>
                  <p>{formatPrice(cartTotal)}</p>
                </div>

                <p className="text-center text-sm text-gray-500">
                  Cash is accepted for local pickup only.
                </p>

                <p className="rounded-xl bg-[#fff5fa] p-4 text-sm text-[#06395c]">
                  Payment is due before any orders are shipped, fulfilled, or
                  available for pickup. Please complete your order on the cart
                  page to receive Venmo, Zelle, or cash pickup instructions.
                </p>

                <a
                  href="/cart"
                  className="mt-6 block w-full rounded-md bg-[#06395c] px-8 py-4 text-center font-semibold text-white"
                >
                  Go to Cart
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-10">
            <h2 className="text-3xl font-light md:text-5xl">
              GLP Weight Loss Products
            </h2>

            <div className="mt-10 space-y-7">
              {glpProducts.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  inventory={getInventory(product.id)}
                  onAdd={() => addToCart(product)}
                  pink
                />
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-2xl bg-white p-6 shadow-lg md:p-10">
            <h2 className="text-3xl font-light md:text-5xl">
              Wellness & Performance Peptides
            </h2>

            <div className="mt-10 space-y-12">
              {wellnessSections.map((section) => (
                <div key={section.title}>
                  <h3 className="border border-[#06395c]/30 px-4 py-3 text-xl font-semibold uppercase tracking-[0.12em] md:text-2xl">
                    {section.title}
                  </h3>

                  <div className="mt-8 space-y-7">
                    {section.products.map((product) => (
                      <ProductRow
                        key={product.id}
                        product={product}
                        inventory={getInventory(product.id)}
                        onAdd={() => addToCart(product)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-2xl bg-white p-6 shadow-lg md:p-10">
            <h2 className="text-3xl font-light md:text-5xl">
              Add-On Supplies
            </h2>

            <div className="mt-10 space-y-7">
              {supplies.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  inventory={getInventory(product.id)}
                  onAdd={() => addToCart(product)}
                  pink
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ProductRow({
  product,
  inventory,
  onAdd,
  pink = false,
}: {
  product: Product;
  inventory?: InventoryItem;
  onAdd: () => void;
  pink?: boolean;
}) {
  const isOutOfStock =
    inventory?.status === "Out of Stock" || inventory?.stock === 0;

  return (
    <div className="grid gap-4 border-b border-gray-100 pb-6 md:grid-cols-[1fr_auto]">
      <div>
        <h3 className="text-xl font-bold uppercase tracking-[0.12em]">
          {product.name}
        </h3>

        <p className="mt-2 max-w-3xl text-sm uppercase tracking-[0.08em] text-gray-600">
          {descriptions[product.id]}
        </p>

        {inventory && (
          <p
            className={`mt-2 text-sm font-semibold ${
              inventory.status === "Out of Stock"
                ? "text-red-600"
                : inventory.status === "Low Stock"
                ? "text-orange-500"
                : "text-green-600"
            }`}
          >
            {inventory.status === "Out of Stock" && "Out of Stock"}
            {inventory.status === "Low Stock" &&
              `Low Stock - ${inventory.stock} left`}
            {inventory.status === "In Stock" && `In Stock - ${inventory.stock}`}
          </p>
        )}
      </div>

      <div className="text-left md:text-right">
        <p className="text-2xl font-bold text-[#06395c]">
          {formatPrice(product.price)}
        </p>

        <button
          onClick={onAdd}
          disabled={isOutOfStock}
          className={`mt-3 rounded-md px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 ${
            isOutOfStock
              ? "bg-gray-400"
              : pink
              ? "bg-[#ec4aa3]"
              : "bg-[#06395c]"
          }`}
        >
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}