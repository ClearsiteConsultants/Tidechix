export type ProductCategory = "GLP-1" | "Peptides" | "Supplies";

export type Product = {
  id: string;
  name: string;
  price: number;
  stripePriceId: string;
  category: ProductCategory;
};

export const PRODUCTS: Product[] = [
  // GLP-1 Products
  {
    id: "retatrutide15",
    name: "Retatrutide 15MG",
    price: 100,
    stripePriceId: "price_1TeKG9Kxrgcoq0F7v0XfVOYz",
    category: "GLP-1",
  },
  {
    id: "retatrutide30",
    name: "Retatrutide 30MG",
    price: 135,
    stripePriceId: "price_1TeKGVKxrgcoq0F7kxeFj9BC",
    category: "GLP-1",
  },
  {
    id: "tirzepatide15",
    name: "Tirzepatide 15MG",
    price: 60,
    stripePriceId: "price_1TeKHnKxrgcoq0F7w6WbVSev",
    category: "GLP-1",
  },

  // Muscle Performance, Strength & Recovery
  {
    id: "hulkstack10",
    name: "CJC-1295 + Ipamorelin 10MG (Hulk Stack)",
    price: 75,
    stripePriceId: "price_1TeJgIKxrgcoq0F7QrPP5GYP",
    category: "Peptides",
  },
  {
    id: "sermorelin5",
    name: "Sermorelin 5MG",
    price: 60,
    stripePriceId: "price_1TeJiEKxrgcoq0F7hio77JND",
    category: "Peptides",
  },
  {
    id: "tesamorelin10",
    name: "Tesamorelin 10MG",
    price: 65,
    stripePriceId: "price_1TeJjUKxrgcoq0F7HfM6fZsT",
    category: "Peptides",
  },
  {
    id: "wolverine10",
    name: "Wolverine Stack 10MG (BPC-157 + TB-500)",
    price: 65,
    stripePriceId: "price_1TeJmJKxrgcoq0F7K425VkUZ",
    category: "Peptides",
  },

  // Skin, Hair & Aesthetic Wellness
  {
    id: "ghkcu50",
    name: "GHK-CU 50MG",
    price: 50,
    stripePriceId: "price_1TeJyzKxrgcoq0F75hz3bxeY",
    category: "Peptides",
  },
  {
    id: "melanotan1",
    name: "Melanotan 1 10MG",
    price: 40,
    stripePriceId: "price_1TeK09Kxrgcoq0F7jyw4pMEA",
    category: "Peptides",
  },
  {
    id: "glowstack70",
    name: "Glow Stack 70MG (BPC-154 + TB-500 + GHK-CU)",
    price: 100,
    stripePriceId: "price_1TeK2oKxrgcoq0F7K7ZJTZ2z",
    category: "Peptides",
  },
  {
    id: "klowstack80",
    name: "Klow Stack 80MG (BPC-157 + TB-500 + GHK-CU + KPV)",
    price: 120,
    stripePriceId: "price_1TeK5HKxrgcoq0F7Y2pnxPqQ",
    category: "Peptides",
  },

  // Cognitive Wellness, Mood & Sleep Support
  {
    id: "semax10",
    name: "Semax 10MG",
    price: 50,
    stripePriceId: "price_1TeK6ZKxrgcoq0F7AZtmdxBS",
    category: "Peptides",
  },
  {
    id: "selank10",
    name: "Selank 10MG",
    price: 40,
    stripePriceId: "price_1TeK7OKxrgcoq0F7c4b7ef7F",
    category: "Peptides",
  },
  {
    id: "dsip10",
    name: "DSIP 10MG",
    price: 40,
    stripePriceId: "price_1TeK8GKxrgcoq0F7OpNiG7XR",
    category: "Peptides",
  },
  {
    id: "motsc10",
    name: "MOTS-C 10MG",
    price: 60,
    stripePriceId: "price_1TeK91Kxrgcoq0F779x3Jlug",
    category: "Peptides",
  },
  {
    id: "nad1000",
    name: "NAD+ 1000MG",
    price: 75,
    stripePriceId: "price_1TeK9yKxrgcoq0F7WVGB5SZq",
    category: "Peptides",
  },
  {
    id: "ss31",
    name: "SS-31 (Elamipretide) 10MG",
    price: 50,
    stripePriceId: "price_1TeKBmKxrgcoq0F721DUW71J",
    category: "Peptides",
  },

  // Gut Health & Inflammatory Support
  {
    id: "kpv10",
    name: "KPV 10MG",
    price: 40,
    stripePriceId: "price_1TeKCdKxrgcoq0F7kEfjMd07",
    category: "Peptides",
  },
  {
    id: "glutathione1500",
    name: "Glutathione 1500MG",
    price: 45,
    stripePriceId: "price_1TeKDQKxrgcoq0F7Pf4sX3eQ",
    category: "Peptides",
  },

  // Sexual Wellness & Intimacy Support
  {
    id: "kisspeptin10",
    name: "Kisspeptin-10",
    price: 65,
    stripePriceId: "price_1TeKEeKxrgcoq0F723tKr1ws",
    category: "Peptides",
  },

  // Supplies
  {
    id: "alcoholwipes",
    name: "Alcohol Wipes - Box of 100",
    price: 12,
    stripePriceId: "price_1TeL0VKxrgcoq0F7pbaYVkqo",
    category: "Supplies",
  },
  {
    id: "reconstitutionneedles",
    name: "Reconstitution Needles",
    price: 2,
    stripePriceId: "price_1TeKxDKxrgcoq0F7a81DyOz3",
    category: "Supplies",
  },
  {
    id: "syringes10pack",
    name: "Pack of 10 Insulin Syringes",
    price: 12,
    stripePriceId: "price_1TeKv1Kxrgcoq0F716XtrJcs",
    category: "Supplies",
  },
];