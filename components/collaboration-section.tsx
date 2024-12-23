import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CollaborationSection() {
  return (
    <section className="grid gap-8 py-16 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Collaboration x</h2>
        <h3 className="text-3xl font-bold text-orange-500">James Visual</h3>
        <p className="text-muted-foreground">
          Elevate your style with our exclusive collaboration with a top
          designer
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-orange-400">
            <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
              Soon!
            </span>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg bg-orange-400">
            <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
              Soon!
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-zinc-900 p-8 text-white">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Get Exclusive on</h3>
          <p className="text-3xl font-bold">Sunday, 12 March 2023</p>
          <div className="space-y-2">
            <p className="text-sm text-zinc-400">Countdown</p>
            <div className="flex gap-4">
              <div className="text-xl font-bold">19 Day</div>
              <div className="text-xl font-bold">21 Hours</div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary">Register</Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
