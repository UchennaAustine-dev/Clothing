import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-zinc-900 px-8 py-16 text-white md:px-12">
      <div className="relative z-10 max-w-2xl space-y-6">
        <h2 className="text-3xl font-bold text-orange-500">
          GET AHEAD OF THE
          <br />
          FASHION GAME AND BE
          <br />
          THE FIRST TO SHOP OUR
          <br />
          LATEST COLLECTION
        </h2>
        <p className="text-zinc-400">
          Sign up for our news and discover a world of fashion before anyone
          else. Don't miss out on your chance to elevate your wardrobe with our
          exclusive designs
        </p>
        <div className="flex gap-4">
          <Input
            type="email"
            placeholder="Your Email Address"
            className="bg-zinc-800 border-zinc-700"
          />
          <Button>Learn more</Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent" />
      </div>
    </section>
  );
}
