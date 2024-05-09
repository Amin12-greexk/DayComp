"use client";
import CheckoutNow from "@/app/components/CheckoutNow"
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
  } = useShoppingCart();

  function handleCheckoutClick(event: any) {
    event.preventDefault();

    // Construct the WhatsApp message with product details
    const productDetails = Object.values(cartDetails ?? {})
      .map((entry) => {
        return `${entry.name} - Rp${entry.price} (${entry.quantity} pcs)`;
      })
      .join('\n');

    // Replace this with your WhatsApp number
    const phoneNumber = "6285810425211";
    // Construct the WhatsApp URL with the pre-filled message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(productDetails)}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappURL);
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle> Keranjang </SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">Tidak ada item </h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt="Product image"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">Rp{entry.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">JML: {entry.quantity}</p>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Hapus
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total:</p>
              <p>Rp{totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Pembelian akan dihitung ketika Checkout
            </p>

            <div className="mt-6">
              {/* Pass the function directly to onClick */}
              <Button onClick={handleCheckoutClick} className="w-full">
                Checkout
              </Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                Atau{" "}
                <button
                  onClick={() => handleCartClick()}
                  className=" font-medium text-primary hover:text-primary/80"
                >
                  Lanjutkan Belanja 
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}