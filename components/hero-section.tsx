"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-muted px-6 py-16 md:px-12">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <motion.div
          className="flex flex-col justify-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fashion for ALL,
            <br />
            Every Day
          </motion.h1>
          <motion.p
            className="max-w-[600px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover your personal style and make a statement with every outfit.
            Shop with us to elevate your wardrobe and bring your fashion game to
            the next level.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg">
              Shop Now
              <span className="sr-only">Shop now</span>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative aspect-video md:aspect-square"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src="/placeholder.svg"
            alt="Fashion models wearing trendy outfits"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
