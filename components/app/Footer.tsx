import Link from "next/link";
import { SvgIcon } from "@/components/ui/SvgIcon";
import {
  PaymentIconsWithFallbacks,
  PARTNER_ICONS,
  InlineSocialIcons,
} from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-accent py-6 sm:py-8" style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}>
      <div className="w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* About section */}
          <div className="min-w-0">
            <h3 className="mb-2 text-sm font-medium">About NCHUB</h3>
            <p className="mb-3 text-xs leading-snug text-muted-foreground">
              Your trusted source for quality products. Shop anything with
              intelligent search, real-time stock, and AI-powered shopping
              assistance.
            </p>

            {/* Payment methods */}
            <div className="mt-4">
              <p className="mb-1.5 text-xs font-medium">Payment Methods</p>
              <div className="flex flex-wrap items-center gap-1">
                {Object.entries(PaymentIconsWithFallbacks).map(([key, icon]) => (
                  <SvgIcon
                    key={key}
                    src={icon.src}
                    fallbackSrc={icon.fallbackSrc}
                    alt={icon.alt}
                    width={28}
                    height={18}
                    className="rounded border border-zinc-200 bg-white p-0.5 dark:border-zinc-700"
                  />
                ))}
              </div>
            </div>

            {/* Partner logos */}
            <div className="mt-4">
              <p className="mb-1.5 text-xs font-medium">Our Partners</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <SvgIcon
                  src={PARTNER_ICONS.partner1}
                  fallbackSrc={PARTNER_ICONS.partner1Fallback}
                  alt="Partner 1"
                  height={22}
                  className="max-w-[52px] opacity-70 transition-opacity hover:opacity-100"
                />
                <SvgIcon
                  src={PARTNER_ICONS.partner2}
                  fallbackSrc={PARTNER_ICONS.partner2Fallback}
                  alt="Partner 2"
                  height={22}
                  className="max-w-[52px] opacity-70 transition-opacity hover:opacity-100"
                />
                <SvgIcon
                  src={PARTNER_ICONS.dewalt}
                  fallbackSrc={PARTNER_ICONS.dewaltFallback}
                  alt="Dewalt"
                  height={22}
                  className="max-w-[52px] opacity-70 transition-opacity hover:opacity-100"
                />
                <SvgIcon
                  src={PARTNER_ICONS.amazon}
                  fallbackSrc={PARTNER_ICONS.amazonFallback}
                  alt="Amazon"
                  height={18}
                  className="max-w-[44px] opacity-70 transition-opacity hover:opacity-100"
                />
                <SvgIcon
                  src={PARTNER_ICONS.coastline}
                  fallbackSrc={PARTNER_ICONS.coastlineFallback}
                  alt="Coastline"
                  height={22}
                  className="max-w-[52px] opacity-70 transition-opacity hover:opacity-100"
                />
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground">
                Trusted by leading companies worldwide
              </p>
            </div>
          </div>

          {/* Shop links */}
          <div className="min-w-0">
            <h3 className="mb-2 text-sm font-medium">Shop</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=tools"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=hardware"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Hardware
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=electrical"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Electrical
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=plumbing"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Plumbing
                </Link>
              </li>
              <li>
                <Link
                  href="/#categories"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  All Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service links */}
          <div className="min-w-0">
            <h3 className="mb-2 text-sm font-medium">Customer Service</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="min-w-0">
            <h3 className="mb-2 text-sm font-medium">Newsletter</h3>
            <p className="mb-3 text-xs text-muted-foreground">
              Subscribe for updates, news, and exclusive offers.
            </p>

            <form
              action="/newsletter/subscribe"
              method="post"
              className="space-y-2"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full rounded border border-border bg-background px-3 py-2 text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="w-full min-h-[36px] rounded bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 active:bg-primary/95"
              >
                Subscribe
              </button>
            </form>

            {/* Social links */}
            <div className="mt-4">
              <p className="mb-1.5 text-xs font-medium">Follow Us</p>
              <div className="flex gap-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[32px] min-w-[32px] items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary active:bg-muted"
                  aria-label="Facebook"
                >
                  <SvgIcon
                    icon={<InlineSocialIcons.Facebook />}
                    className="h-4 w-4"
                    title="Facebook"
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[32px] min-w-[32px] items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary active:bg-muted"
                  aria-label="Instagram"
                >
                  <SvgIcon
                    icon={<InlineSocialIcons.Instagram />}
                    className="h-4 w-4"
                    title="Instagram"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[32px] min-w-[32px] items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary active:bg-muted"
                  aria-label="Twitter"
                >
                  <SvgIcon
                    icon={<InlineSocialIcons.Twitter />}
                    className="h-4 w-4"
                    title="Twitter"
                  />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[32px] min-w-[32px] items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary active:bg-muted"
                  aria-label="YouTube"
                >
                  <SvgIcon
                    icon={<InlineSocialIcons.YouTube />}
                    className="h-4 w-4"
                    title="YouTube"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-8 border-t border-border pt-6">
          <div className="flex flex-col items-center space-y-3 md:flex-row md:justify-between md:space-y-0">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} NCHUB. All rights reserved.
            </p>

            <ul className="flex space-x-4 text-xs">
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional partners */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[10px] text-muted-foreground">
              In partnership with:
            </span>
            <SvgIcon
              src={PARTNER_ICONS.tsmc}
              fallbackSrc={PARTNER_ICONS.tsmcFallback}
              alt="TSMC"
              height={16}
              className="max-w-[44px] opacity-70 transition-opacity hover:opacity-100"
            />
            <SvgIcon
              src={PARTNER_ICONS.formedFiber}
              fallbackSrc={PARTNER_ICONS.formedFiberFallback}
              alt="Formed Fiber"
              height={16}
              className="max-w-[44px] opacity-70 transition-opacity hover:opacity-100"
            />
            <SvgIcon
              src={PARTNER_ICONS.eiffage}
              fallbackSrc={PARTNER_ICONS.eiffageFallback}
              alt="Eiffage"
              height={16}
              className="max-w-[44px] opacity-70 transition-opacity hover:opacity-100"
            />
            <SvgIcon
              src={PARTNER_ICONS.construtora}
              fallbackSrc={PARTNER_ICONS.construtoraFallback}
              alt="Construtora"
              height={16}
              className="max-w-[44px] opacity-70 transition-opacity hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
