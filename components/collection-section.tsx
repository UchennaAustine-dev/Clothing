"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";

const products: Product[] = [
  {
    id: "1",
    name: "Jacket Black Mamba",
    price: 80.0,
    image: "/placeholder.svg",
    category: "jackets",
  },
  {
    id: "2",
    name: "Veson Outdoor Jacket",
    price: 80.0,
    image: "/placeholder.svg",
    category: "jackets",
  },
  {
    id: "3",
    name: "Space Vision Jacket",
    price: 80.0,
    image: "/placeholder.svg",
    category: "jackets",
  },
  {
    id: "4",
    name: "Retro Vision - Soft",
    price: 80.0,
    image: "/placeholder.svg",
    category: "jackets",
  },
];

export function CollectionSection() {
  return (
    <section className="space-y-8 py-16">
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold">Winter Sale 2023</h2>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/shop">All Collection</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/shop/new-arrivals">New Arrivals</Link>
          </Button>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button variant="outline" asChild>
          <Link href="/shop">See More</Link>
        </Button>
      </motion.div>
    </section>
  );
}
