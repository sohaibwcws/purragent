import Logo from "./Logo";

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "The App", href: "/#app" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "iOS App", href: "https://apps.apple.com/app/catpaw-ai-office/id6760197470" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Security", href: "/security" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5">
              <Logo size={34} />
              <span className="text-lg font-bold">
                <span className="text-teal">PURR</span>
                <span className="text-white">AGENT</span>
              </span>
            </a>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Your AI-powered office at your fingertips. Manage your entire
              business through intelligent AI agents.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="mt-3 space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} PurrAgent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
