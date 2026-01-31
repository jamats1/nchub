"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Menu, Package, ShoppingBag, Sparkles, User, X } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useCartActions, useTotalItems } from "@/lib/store/cart-store-provider";
import { useChatActions, useIsChatOpen } from "@/lib/store/chat-store-provider";
import { useState } from "react";

export function Header() {
  const router = useRouter();
  const { openCart } = useCartActions();
  const { openChat } = useChatActions();
  const isChatOpen = useIsChatOpen();
  const totalItems = useTotalItems();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    } else {
      router.push("/");
    }
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-white/80 py-3 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80 sm:py-4"
      style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
    >
      <div className="w-full px-4 sm:px-6">
        {/* Top row: logo, search, actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          {/* Logo - touch target */}
          <Link
            href="/"
            className="flex min-h-[44px] min-w-[44px] shrink-0 items-center transition-opacity active:opacity-80"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/svg-logos/logo.png"
              alt="NCHUB"
              width={120}
              height={32}
              priority
              unoptimized
              className="h-8 w-auto sm:h-8"
            />
          </Link>

          {/* Mobile: quick actions (cart, AI, user) + menu toggle */}
          <div className="flex items-center gap-1 md:hidden">
            {!isChatOpen && (
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0"
                onClick={openChat}
                aria-label="Ask AI assistant"
              >
                <Sparkles className="h-5 w-5 text-amber-500" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="relative shrink-0"
              onClick={openCart}
              aria-label={`Open cart (${totalItems} items)`}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Button>
            <SignedIn>
              <UserButton
                afterSwitchSessionUrl="/"
                appearance={{ elements: { avatarBox: "h-9 w-9" } }}
              />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" size="icon" aria-label="Sign in">
                  <User className="h-5 w-5" />
                </Button>
              </SignInButton>
            </SignedOut>
            <button
              type="button"
              className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-accent active:bg-accent md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Search form - desktop only; mobile uses in-drawer search */}
          <div className="hidden w-auto flex-1 px-4 md:block lg:px-8">
            <form onSubmit={handleSearch} className="relative" role="search">
              <input
                type="search"
                name="q"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products"
                className="w-full rounded-md border border-border bg-background px-4 py-2 pr-10 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                aria-label="Search products"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 flex h-full items-center justify-center px-3 text-muted-foreground"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Actions: Orders, Ask AI, Cart, User */}
          <div className="hidden items-center gap-2 md:flex">
            <SignedIn>
              <Button asChild variant="outline" size="sm">
                <Link href="/orders" className="gap-2">
                  <Package className="h-4 w-4" />
                  <span className="hidden sm:inline">My Orders</span>
                </Link>
              </Button>
            </SignedIn>

            {!isChatOpen && (
              <Button
                onClick={openChat}
                size="sm"
                className="gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-200/50 transition-all hover:from-amber-600 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-300/50 dark:shadow-amber-900/30 dark:hover:shadow-amber-800/40"
              >
                <Sparkles className="h-4 w-4" />
                <span className="hidden sm:inline">Ask AI</span>
              </Button>
            )}

            <Button
              variant="default"
              size="sm"
              className="relative gap-2"
              onClick={openCart}
              aria-label={`Open cart (${totalItems} items)`}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-primary">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Button>

            <SignedIn>
              <UserButton
                afterSwitchSessionUrl="/"
                appearance={{
                  elements: { avatarBox: "h-9 w-9" },
                }}
              >
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Orders"
                    labelIcon={<Package className="h-4 w-4" />}
                    href="/orders"
                  />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" size="icon" aria-label="Sign in">
                  <User className="h-5 w-5" />
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="border-t border-border pt-4" aria-label="Mobile menu">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 pr-12 text-base"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 flex h-full min-w-[44px] items-center justify-center"
                    aria-label="Search"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </form>

              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/"
                    className="block min-h-[44px] px-2 py-3 text-base font-medium hover:text-primary active:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?category=tools"
                    className="block min-h-[44px] px-2 py-3 text-base font-medium hover:text-primary active:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?category=hardware"
                    className="block min-h-[44px] px-2 py-3 text-base font-medium hover:text-primary active:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hardware
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?category=electrical"
                    className="block min-h-[44px] px-2 py-3 text-base font-medium hover:text-primary active:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Electrical
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?category=plumbing"
                    className="block min-h-[44px] px-2 py-3 text-base font-medium hover:text-primary active:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Plumbing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#categories"
                    className="block min-h-[44px] px-2 py-3 text-base font-medium hover:text-primary active:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Categories
                  </Link>
                </li>
                <SignedIn>
                  <li>
                    <Link
                      href="/orders"
                      className="block min-h-[44px] px-2 py-3 text-base font-medium hover:text-primary active:bg-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      My Orders
                    </Link>
                  </li>
                </SignedIn>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
