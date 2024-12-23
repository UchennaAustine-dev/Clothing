"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categories = [
  { title: "All", href: "/shop" },
  { title: "New Arrivals", href: "/shop/new-arrivals" },
  { title: "Best Sellers", href: "/shop/best-sellers" },
  { title: "Clothing", href: "/shop/clothing" },
  { title: "Shoes", href: "/shop/shoes" },
  { title: "Accessories", href: "/shop/accessories" },
  { title: "Sale", href: "/shop/sale" },
];

export function CategoryNav() {
  const pathname = usePathname();

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-lg">
      <div className="flex w-max space-x-4 p-4">
        {categories.map((category) => (
          <motion.div
            key={category.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={category.href}
              className={cn(
                "inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                pathname === category.href
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-primary"
              )}
            >
              {category.title}
            </Link>
          </motion.div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}
