import Link from "next/link";

const navigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Collection", href: "/collection" },
    { name: "Contact", href: "/contact" },
  ],
  collection: [
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Men Collection", href: "/men" },
    { name: "Women Collection", href: "/women" },
  ],
  company: [
    { name: "Store", href: "/store" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl">
              ✱ VESON
            </Link>
            <h3 className="text-lg font-semibold">
              FASHION FOR ALL,
              <br />
              EVERY DAY
            </h3>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Collection</h3>
            <ul className="mt-4 space-y-2">
              {navigation.collection.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:veson@info.com"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  veson@info.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+62 800 3320 0900"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  +62 800 3320 0900
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Veson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
