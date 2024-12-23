import { Star } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import type { Product } from "@/types";

const bestSellers: Product[] = [
  {
    id: "1",
    name: "Veson Series V11 - Unisex",
    price: 85.0,
    image: "/placeholder.svg",
    category: "unisex",
    rating: 4.8,
    reviews: 215,
  },
  {
    id: "2",
    name: "Panorama Shirt - Unisex",
    price: 56.0,
    image: "/placeholder.svg",
    category: "shirts",
    rating: 4.5,
    reviews: 89,
  },
  {
    id: "3",
    name: "Veson White Shirt - Unisex",
    price: 55.0,
    image: "/placeholder.svg",
    category: "shirts",
    rating: 4.7,
    reviews: 90,
  },
  {
    id: "4",
    name: "Veson Black Shirt - Unisex",
    price: 55.0,
    image: "/placeholder.svg",
    category: "shirts",
    rating: 4.6,
    reviews: 77,
  },
];

export function BestSellers() {
  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">BEST SELLER OUR VESON</h2>
        <span className="text-sm text-muted-foreground">/22</span>
      </div>
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
        {" "}
        {/* Increased gap between grid items */}
        {bestSellers.map((product) => (
          <div key={product.id} className="group space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="space-y-1 text-white">
                  <div className="text-sm">Available</div>
                  <div className="font-semibold">{product.name}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating!)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm">({product.reviews})</span>
                  </div>
                  <div className="font-semibold">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        {" "}
        {/* Added more space above the "See More" button */}
        <Button variant="outline">See More</Button>
      </div>
    </section>
  );
}
