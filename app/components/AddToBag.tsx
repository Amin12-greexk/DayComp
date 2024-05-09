"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  // price_id: string; // Not needed for non-Stripe checkout
}

export default function AddToBag({
    currency,
    description,
    image,
    name,
    price,
  }: ProductCart) {
    const { addItem, handleCartClick } = useShoppingCart();
  
    const product = {
      name: name,
      description: description,
      price: price,
      currency: currency,
      image: urlFor(image).url(),
      sku: 'your_sku_here', // Add a SKU property
    };
    return (
      <Button
        onClick={() => {
          addItem(product), handleCartClick();
        }}
      >
        Tambah Ke Keranjang
      </Button>
    );
  }
  