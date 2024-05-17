"use client";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";
export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();
  function buyNow() {
    console.log("Inisiasi Checkout produk ", {
      name,
      description,
      price,
      currency,
      image: urlFor(image).url(),
    });
    const productDetails = `Product: ${name}\nDescription:
    ${description}\nPrice: ${price} ${currency}\n "Saya ingin Membeli produk ini"`;
    const phoneNumber = "6285810425211"; 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(productDetails)}`;

    window.open(whatsappURL);
  }
  return (
    <Button
      variant="outline"
      onClick={() => {
        buyNow();
      }}
    >
      Checkout 
    </Button>
  );
}
