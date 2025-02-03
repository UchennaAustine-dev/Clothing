"use client";

import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./countdown-timer";
import { RegistrationDialog } from "./registration-dialog";
import { motion } from "framer-motion";
import { CalendarDays, Crown } from "lucide-react";
import Image from "next/image";

export function CollaborationSection() {
  const launchDate = new Date("2024-05-01T00:00:00");

  return (
    <section className="relative overflow-hidden bg-stone-50 py-24">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />

      <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2 md:px-8">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1">
              <Crown className="h-4 w-4 text-amber-700" />
              <span className="text-sm font-medium text-amber-700">
                Exclusive Collection
              </span>
            </div>
            <h2 className="font-serif text-4xl font-medium">
              Alessandro Romano
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-stone-600">
              Experience the masterful fusion of Italian craftsmanship and
              modern luxury. Each piece in this exclusive collection reflects
              Romano's signature attention to detail and timeless
              sophistication.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 to-amber-700/80">
                <Image
                  src="/furniture7.jpeg"
                  alt="Living room collection preview"
                  width={400} // Add width
                  height={500} // Add height
                  className="h-full w-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="text-2xl font-medium">Living Room</h3>
                <p className="mt-2 text-sm text-white/80">Launching May 2024</p>
              </div>
            </motion.div>

            <motion.div
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 to-amber-700/80">
                <Image
                  src="/furniture8.jpeg"
                  alt="Dining room collection preview"
                  width={400} // Add width
                  height={500} // Add height
                  className="h-full w-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="text-2xl font-medium">Dining Room</h3>
                <p className="mt-2 text-sm text-white/80">Limited Edition</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-stone-200/50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-medium">
                Priority Access
              </h3>
              <p className="text-3xl font-light">Spring Collection 2024</p>
              <div className="flex items-center space-x-2 text-amber-700">
                <CalendarDays className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Pre-Order Opens Soon
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-600">
                Launch Countdown
              </p>
              <CountdownTimer targetDate={launchDate} />
            </div>

            <div className="space-y-6">
              <div className="rounded-lg bg-stone-50 p-4">
                <ul className="space-y-3 text-sm text-stone-600">
                  <li className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-700" />
                    <span>Early access to entire collection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-700" />
                    <span>Exclusive preview event invitation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-700" />
                    <span>Complimentary design consultation</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4">
                <RegistrationDialog />
                <Button
                  variant="outline"
                  className="border-amber-700 text-amber-700 hover:bg-amber-50"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
