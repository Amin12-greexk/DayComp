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
    // Here, you would initiate the checkout process with Midtrans or your chosen payment gateway
    // For demonstration purposes, let's just log the product details
    console.log("Initiating checkout with product:", {
      name,
      description,
      price,
      currency,
      image: urlFor(image).url(),
    });

    // You can implement the logic to prompt the user to send the payment details via WhatsApp
    const productDetails = `Product: ${name}\nDescription: ${description}\nPrice: ${price} ${currency}\n`;

    const phoneNumber = "6285810425211"; // Replace with your phone number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(productDetails)}`;

    // Open WhatsApp with the pre-filled message
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
