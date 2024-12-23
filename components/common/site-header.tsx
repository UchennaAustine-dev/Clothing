"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CategoryNav } from "@/components/category-nav";
import { MobileNav } from "@/components/mobile-nav";
import { SearchDialog } from "@/components/search-dialog";
import { Cart } from "@/components/cart";

const mainNav = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Categories", href: "/categories" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const SiteHeader = React.memo(() => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <MobileNav />
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">✱ VESON</span>
        </Link>
        <div className="hidden md:flex md:space-x-6 lg:space-x-8">
          {mainNav.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <SearchDialog />
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/auth">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <Cart />
          </nav>
        </div>
      </div>
      <div className="container">
        <CategoryNav />
      </div>
    </header>
  );
});

SiteHeader.displayName = "SiteHeader";

export default SiteHeader;
