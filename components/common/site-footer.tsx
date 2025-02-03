"use client";

import Link from "next/link";
import { memo } from "react";
import { Sofa, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const navigation = {
  collections: [
    { name: "Living Room", href: "/collections/living-room" },
    { name: "Dining Room", href: "/collections/dining-room" },
    { name: "Bedroom", href: "/collections/bedroom" },
    { name: "Lighting", href: "/collections/lighting" },
  ],
  services: [
    { name: "Design Services", href: "/services/design" },
    { name: "Trade Program", href: "/trade" },
    { name: "Financing", href: "/financing" },
    { name: "White Glove Delivery", href: "/delivery" },
  ],
  company: [
    { name: "Our Story", href: "/story" },
    { name: "Showrooms", href: "/showrooms" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export const SiteFooter = memo(() => {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="container py-16 px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Sofa className="h-8 w-8 text-amber-700" />
              <span className="font-serif text-2xl">Redoak</span>
            </Link>
            <p className="text-stone-600 max-w-xs">
              Crafting exceptional living spaces through timeless design and
              unparalleled craftsmanship since 1992.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-stone-400 hover:text-amber-700" />
              <Facebook className="h-5 w-5 text-stone-400 hover:text-amber-700" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-lg">Collections</h3>
            <ul className="space-y-3">
              {navigation.collections.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-stone-600 hover:text-amber-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-lg">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-stone-600 hover:text-amber-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-lg">Contact</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-amber-700" />
                  <span className="text-stone-600">
                    123 Madison Avenue
                    <br />
                    New York, NY 10001
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="tel:+18001234567"
                  className="flex items-center space-x-2 text-stone-600 hover:text-amber-700"
                >
                  <Phone className="h-5 w-5 text-amber-700" />
                  <span>1-800-LUXURY</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@maison.com"
                  className="flex items-center space-x-2 text-stone-600 hover:text-amber-700"
                >
                  <Mail className="h-5 w-5 text-amber-700" />
                  <span>contact@redoak.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center space-y-4 border-t border-stone-200 pt-8 text-sm text-stone-500">
          <div className="flex space-x-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-amber-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p>&copy; {new Date().getFullYear()} Redoak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

SiteFooter.displayName = "SiteFooter";

export default SiteFooter;
