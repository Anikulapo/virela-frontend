"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  borderRadius: string;
}

const CATEGORIES = [
  {
    id: "s1",
    label: "Scrunchie",
    categoryName: "Scrunchies",
    image: "/browsepage2/scrunchie-aesthetic.png",
    borderRadius: "26% 74% 34% 66% / 36% 26% 74% 64%",
  },
  {
    id: "s2",
    label: "Scrunchie",
    categoryName: "Scrunchies",
    image: "/browsepage2/scrunchie-aesthetic.png",
    borderRadius: "68% 32% 28% 72% / 28% 66% 34% 72%",
  },
  {
    id: "s3",
    label: "Scrunchie",
    categoryName: "Scrunchies",
    image: "/browsepage2/scrunchie-aesthetic.png",
    borderRadius: "32% 68% 72% 28% / 66% 34% 28% 72%",
  },
  {
    id: "s4",
    label: "Scrunchie",
    categoryName: "Scrunchies",
    image: "/browsepage2/scrunchie-aesthetic.png",
    borderRadius: "28% 72% 68% 32% / 36% 72% 28% 64%",
  },
];

const FEATURED_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Scrunchie",
    category: "Scrunchies",
    price: 22,
    image: "/browsepage2/ad 4.png",
    borderRadius: "",
  },
  {
    id: "p2",
    name: "Scrunchie",
    category: "Scrunchies",
    price: 22,
    image: "/browsepage2/ad 4.png",
    borderRadius: "",
  },
  {
    id: "p3",
    name: "Scrunchie",
    category: "Scrunchies",
    price: 22,
    image: "/browsepage2/ad 4.png",
    borderRadius: "",
  },
  {
    id: "p4",
    name: "Scrunchie",
    category: "Scrunchies",
    price: 22,
    image: "/browsepage2/ad 4.png",
    borderRadius: "",
  },
  {
    id: "p5",
    name: "Scrunchie",
    category: "Scrunchies",
    price: 22,
    image: "/browsepage2/ad 4.png",
    borderRadius: "",
  },
  {
    id: "p6",
    name: "Scrunchie",
    category: "Scrunchies",
    price: 22,
    image: "/browsepage2/ad 4.png",
    borderRadius: "",
  },
];

const FAQS = [
  {
    question: "Is every piece really handmade?",
    answer:
      "Yes every scrunchie, charm, and bead is shaped by hand in our studio because of that, small variations in color and texture are part of the piece, not a flaw.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard domestic orders are crafted and shipped within 3–5 business days. You will receive tracking details as soon as your package is dispatched.",
  },
  {
    question: "Do you have a return policy?",
    answer:
      "Because each item is specially handmade, all sales are generally final. However, if your piece arrives damaged or defective, please contact us within 7 days and we will gladly make it right.",
  },
  {
    question: "Can i customize a piece?",
    answer:
      "Yes! We love creating bespoke pieces. You can choose your colors, charms, and styling through our Custom order builder.",
  },
];

const NAV_ITEMS = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "story", label: "Our Story", href: "#story" },
  { id: "shop", label: "Shop", href: "#shop" },
  { id: "faq", label: "FAQ", href: "#faq" },
];

export default function Home() {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["hero", "story", "shop", "faq"];
      const headerOffset = 160;

      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = (productName: string) => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    setCartCount((prev) => prev + 1);
    setAddedItem(productName);
    setTimeout(() => setAddedItem(null), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % Math.max(1, FEATURED_PRODUCTS.length - 3));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? Math.max(0, FEATURED_PRODUCTS.length - 4) : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF4F0] via-[#FFFEE8] to-[#FAF2EE] text-[#241E20] selection:bg-[#F2BAC9] selection:text-[#52172C]">
      {/* Global SVG Clip Paths */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="scrunchie-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.0000,0.2089 C 0.0000,0.1074 0.1251,0.0451 0.2500,0.0451 C 0.3476,0.0451 0.4002,-0.0001 0.5000,0.0000 C 0.5645,0.0000 0.6502,0.0191 0.7023,0.0324 C 0.7330,0.0402 0.7656,0.0421 0.7969,0.0365 C 0.9012,0.0178 1.0000,0.0822 1.0000,0.1690 V 0.2290 C 1.0000,0.2430 0.9980,0.2568 0.9945,0.2705 C 0.9829,0.3152 0.9569,0.4236 0.9569,0.5000 C 0.9569,0.5763 0.9828,0.6846 0.9944,0.7294 C 0.9980,0.7431 1.0000,0.7571 1.0000,0.7712 V 0.8303 C 1.0000,0.9177 0.9009,0.9829 0.7956,0.9648 C 0.7651,0.9595 0.7334,0.9613 0.7034,0.9687 C 0.6514,0.9815 0.5649,1.0000 0.5000,1.0000 C 0.4003,1.0001 0.3497,0.9567 0.2500,0.9567 C 0.1248,0.9567 0.0000,0.8932 0.0000,0.7915 V 0.7656 C 0.0000,0.7552 0.0012,0.7449 0.0034,0.7347 C 0.0123,0.6938 0.0354,0.5795 0.0354,0.5000 C 0.0354,0.4204 0.0122,0.3060 0.0034,0.2651 C 0.0012,0.2550 0.0000,0.2448 0.0000,0.2346 V 0.2089 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Toast Notification */}
      {addedItem && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#7B284A] px-5 py-2.5 text-xs font-medium text-white shadow-xl shadow-[#7B284A]/30 animate-bounce">
          <span>✨ Added {addedItem} to cart!</span>
        </div>
      )}

      {/* Top Header / Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#FAF4F0]/90 backdrop-blur-md border-b border-black/5 transition-all">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3.5 md:px-10 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-[19px] font-bold tracking-[0.16em] text-[#1E1618] hover:opacity-85 transition-opacity"
          >
            VIRELA
          </Link>

          {/* Nav Links with Animated Active Section Highlighting */}
          <nav className="hidden items-center gap-1.5 text-[14px] font-medium text-[#241E20] md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    if (item.href.startsWith("#")) {
                      setActiveSection(item.id);
                    }
                  }}
                  className={`relative px-4 py-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-[#7B284A] font-semibold bg-[#7B284A]/10 shadow-2xs scale-[1.02]"
                      : "text-[#241E20]/80 hover:text-[#B85C7A] hover:bg-black/5"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2.5px] bg-[#7B284A] rounded-full transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Badges */}

          {/* Right Action Badges */}
          <div className="flex items-center gap-3">
            {/* Conditional Auth vs Status Badge */}
            {isLoggedIn ? (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#16A34A]/30 bg-[#DCFCE7]/90 px-3 py-1 text-[11px] font-medium text-[#15803D] shadow-xs">
                <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-[#16A34A] text-[8px] text-white font-bold leading-none">
                  ✓
                </span>
                <span>Open — Order Now</span>
              </div>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full bg-[#7B284A] px-4 py-1.5 text-[12px] font-medium text-white shadow-xs transition hover:bg-[#68203D] hover:scale-[1.02] active:scale-98"
              >
                Sign Up
              </Link>
            )}

            {/* Shopping Cart Button */}
            <Link
              href="/checkout"
              aria-label="View Cart"
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7B284A] text-white shadow-sm transition hover:bg-[#68203D] hover:scale-105 active:scale-95"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6h15l-1.5 9h-13z" />
                <path d="M6 6L5 2H2" />
                <circle cx="9" cy="20" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="18" cy="20" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#E54874] text-[9px] font-bold text-white shadow-xs animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main id="hero" className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="relative h-[620px] w-full md:h-[660px] lg:h-[720px]">
          {/* Floating Craft Cards on Desktop */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {/* Top-Left: Orange Blossom Pom-Pom + Star 12 */}
            <div className="absolute left-[2%] top-[4%] h-[240px] w-[220px] rotate-[-7deg] drop-shadow-[0_18px_24px_rgba(120,40,60,0.18)] lg:left-[5%] lg:h-[280px] lg:w-[260px] animate-float-1">
              <Image
                src="/browsepage1/mask-group.png"
                alt="Orange pom-pom floral craft"
                width={400}
                height={400}
                unoptimized
                className="h-full w-full object-contain"
                priority
              />
              <Image
                src="/browsepage1/star-12.png"
                alt=""
                width={70}
                height={70}
                unoptimized
                className="absolute -right-[12px] top-[14px] h-[58px] w-[58px] lg:-right-[10px] lg:top-[16px] lg:h-[68px] lg:w-[68px] animate-spin-slow drop-shadow-sm"
                aria-hidden
              />
            </div>

            {/* Top-Right: Deep Berry Tassel Lamp + Scalloped Star 10 */}
            <div className="absolute right-[3%] top-[5%] h-[250px] w-[230px] rotate-[6deg] drop-shadow-[0_18px_24px_rgba(120,40,60,0.18)] lg:right-[6%] lg:h-[290px] lg:w-[270px] animate-float-2">
              <Image
                src="/browsepage1/mask-group-1.png"
                alt="Magenta woven lamp creation"
                width={400}
                height={400}
                unoptimized
                className="h-full w-full object-contain"
                priority
              />
              <Image
                src="/browsepage1/star-10.png"
                alt=""
                width={56}
                height={56}
                unoptimized
                className="absolute left-[8px] top-[14px] h-[48px] w-[48px] lg:left-[10px] lg:top-[16px] lg:h-[56px] lg:w-[56px] animate-spin-slow drop-shadow-sm"
                aria-hidden
              />
            </div>

            {/* Bottom-Left: Pink Woven Bag + Sparkle Star 11 */}
            <div className="absolute bottom-[6%] left-[3%] h-[230px] w-[215px] rotate-[-4deg] drop-shadow-[0_18px_24px_rgba(120,40,60,0.18)] lg:bottom-[8%] lg:left-[4%] lg:h-[265px] lg:w-[245px] animate-float-3">
              <Image
                src="/browsepage1/mask-group-2.png"
                alt="Handcrafted woven bag"
                width={400}
                height={400}
                unoptimized
                className="h-full w-full object-contain"
              />
              <Image
                src="/browsepage1/star-11.png"
                alt=""
                width={56}
                height={56}
                unoptimized
                className="absolute -left-2 top-[18px] h-[48px] w-[48px] lg:-left-2 lg:top-[18px] lg:h-[54px] lg:w-[54px] animate-spin-slow drop-shadow-sm"
                aria-hidden
              />
            </div>

            {/* Bottom-Right: Pastel Pom-Pom Scrunchie + Sparkle Star 13 */}
            <div className="absolute bottom-[7%] right-[3%] h-[230px] w-[215px] rotate-[7deg] drop-shadow-[0_18px_24px_rgba(120,40,60,0.18)] lg:bottom-[9%] lg:right-[5%] lg:h-[265px] lg:w-[245px] animate-float-4">
              <Image
                src="/browsepage1/mask-group-3.png"
                alt="Pastel pom pom scrunchie"
                width={400}
                height={400}
                unoptimized
                className="h-full w-full object-contain"
              />
              <Image
                src="/browsepage1/star-13.png"
                alt=""
                width={70}
                height={70}
                unoptimized
                className="absolute right-[16px] -top-1 h-[56px] w-[56px] lg:right-[20px] lg:-top-1 lg:h-[64px] lg:w-[64px] animate-spin-slow drop-shadow-sm"
                aria-hidden
              />
            </div>
          </div>

          {/* Central Hero Typography */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="font-serif text-[34px] font-bold leading-[1.08] tracking-tight sm:text-[44px] md:text-[50px] lg:text-[56px]">
              <span className="block font-serif font-semibold text-[#B85C7A] italic drop-shadow-xs">
                Wear the softness
              </span>
              <span className="block text-[#1E1618] mt-1 font-bold">you were never given</span>
              <span className="block text-[#1E1618] font-bold">permission to keep</span>
            </h1>

            <p className="mt-5 max-w-[440px] font-handwriting text-[18px] sm:text-[20px] md:text-[22px] leading-snug text-[#7B2D4B]">
              Every VIRELA piece is a small act of
              <br />
              creativity you get to carry with you
            </p>

            {/* Clean Start Order Button - Arrow Removed as requested */}
            <Link
              href="/login"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#7D2947] px-10 text-[24px] sm:text-[26px] font-normal tracking-wide text-white shadow-lg shadow-[#7D2947]/25 transition hover:bg-[#68203D] hover:scale-105 active:scale-98 select-none font-handwriting"
            >
              Start Order
            </Link>
          </div>
        </div>

        {/* Mobile floating gallery showcase */}
        <div className="flex w-full justify-center gap-3 pb-8 md:hidden">
          <div className="h-24 w-24 overflow-hidden rounded-2xl bg-white p-1 shadow-sm">
            <Image src="/browsepage1/mask-group.png" alt="" width={120} height={120} unoptimized className="h-full w-full object-contain" />
          </div>
          <div className="h-24 w-24 overflow-hidden rounded-2xl bg-white p-1 shadow-sm">
            <Image src="/browsepage1/mask-group-1.png" alt="" width={120} height={120} unoptimized className="h-full w-full object-contain" />
          </div>
          <div className="h-24 w-24 overflow-hidden rounded-2xl bg-white p-1 shadow-sm">
            <Image src="/browsepage1/mask-group-3.png" alt="" width={120} height={120} unoptimized className="h-full w-full object-contain" />
          </div>
        </div>
      </main>

      {/* Story & Philosophy Section ("A little craft , a lot of heart") & FIND YOUR AESTHETIC */}
      <div id="story" className="relative overflow-hidden bg-gradient-to-b from-[#FAF4F0] via-[#FFF9EA] to-[#FDE8EC] px-6 pt-16 pb-16 md:px-10 md:pt-[120px] md:pb-24">
        {/* Background flowing curves vector overlay matching Figma Vector 1 */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[983px] select-none z-0">
          <Image
            src="/browsepage2/vector-1.png"
            alt=""
            width={1440}
            height={983}
            className="w-full h-full object-contain pointer-events-none"
            priority
            unoptimized
          />
        </div>

        <section className="relative mx-auto max-w-[1280px] z-10">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14 lg:gap-20">
            {/* Story Image Card - Asymmetric Top-Left Arch */}
            <div className="relative w-full max-w-[460px] md:w-[45%] lg:w-[42%] shrink-0">
              <div className="relative overflow-hidden rounded-tl-[84px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] shadow-[0_16px_40px_rgba(120,40,60,0.15)] transition-transform duration-500 hover:scale-[1.01]">
                <Image
                  src="/browsepage2/craft-photo.png"
                  alt="Two artisans joyfully crocheting handmade creations in the studio"
                  width={580}
                  height={440}
                  unoptimized
                  className="h-[270px] sm:h-[310px] md:h-[330px] lg:h-[350px] w-full rounded-tl-[84px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] object-cover"
                />
              </div>

              {/* Sparkle Star on Lower-Left Edge */}
              <div className="absolute -left-5 md:-left-6 top-[68%] -translate-y-1/2 rotate-[-18deg] z-10">
                <Image
                  src="/browsepage1/star-12.png"
                  alt=""
                  width={64}
                  height={64}
                  unoptimized
                  className="h-13 w-13 md:h-16 md:w-16 lg:h-18 lg:w-18 object-contain drop-shadow-[0_4px_10px_rgba(120,40,60,0.25)] animate-spin-slow"
                  aria-hidden
                />
              </div>

              {/* Sparkle Star on Top Edge */}
              <div className="absolute left-[64%] -top-3.5 md:-top-4 -translate-x-1/2 rotate-[14deg] z-10">
                <Image
                  src="/browsepage1/star-12.png"
                  alt=""
                  width={36}
                  height={36}
                  unoptimized
                  className="h-7.5 w-7.5 md:h-8.5 md:w-8.5 object-contain drop-shadow-[0_3px_8px_rgba(120,40,60,0.2)] animate-spin-slow"
                  aria-hidden
                />
              </div>
            </div>

            {/* Story Text & Custom Non-Button Feature Badges */}
            <div className="w-full md:w-[55%] lg:w-[58%]">
              <h2 className="font-fraunces text-[34px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-bold leading-[1.12] text-[#B84A6E] tracking-tight">
                A little craft , a lot of heart
              </h2>

              {/* Story Section Paragraph with exact Figma typography: DM Sans Light 300, 30px, line-height 111% */}
              <p className="mt-5 max-w-[680px] font-dm-sans font-light text-[20px] sm:text-[25px] md:text-[30px] leading-[1.11] tracking-normal text-[#2E1E24]/90">
                At <strong className="font-bold text-[#1E1618]">VIRELA</strong>, every piece begins as an idea at a kitchen table and ends up handmade with intention ; scrunchies, jewelry, and crafts made to celebrate individuality, one at a time.
              </p>

              {/* Feature Badges - Using rectangle-32.png background and handwriting font matching design */}
              <div className="mt-8 flex flex-wrap items-center gap-7 md:gap-10">
                {/* Specially Handmade Badge */}
                <div className="flex items-center gap-3.5 select-none">
                  <div className="relative flex h-[54px] w-[44px] sm:h-[60px] sm:w-[48px] items-center justify-center shrink-0">
                    <Image
                      src="/browsepage2/rectangle-32.png"
                      alt=""
                      fill
                      unoptimized
                      className="object-contain select-none pointer-events-none drop-shadow-xs"
                    />
                    <Image
                      src="/browsepage2/love.png"
                      alt=""
                      width={24}
                      height={24}
                      unoptimized
                      className="relative z-10 h-5 w-5 sm:h-6 sm:w-6 object-contain pointer-events-none"
                    />
                  </div>
                  <span className="font-handwriting text-[22px] sm:text-[25px] md:text-[27px] text-[#7A2846] font-normal tracking-wide select-none">
                    Specially Handmade
                  </span>
                </div>

                {/* Aesthetic Packaging Badge */}
                <div className="flex items-center gap-3.5 select-none">
                  <div className="relative flex h-[54px] w-[44px] sm:h-[60px] sm:w-[48px] items-center justify-center shrink-0">
                    <Image
                      src="/browsepage2/rectangle-32.png"
                      alt=""
                      fill
                      unoptimized
                      className="object-contain select-none pointer-events-none drop-shadow-xs"
                    />
                    <span className="relative z-10 text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 12 20 22 4 22 4 12" />
                        <rect width="20" height="5" x="2" y="7" rx="1" />
                        <line x1="12" x2="12" y1="22" y2="7" />
                        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                      </svg>
                    </span>
                  </div>
                  <span className="font-handwriting text-[22px] sm:text-[25px] md:text-[27px] text-[#7A2846] font-normal tracking-wide select-none">
                    Aesthetic Packaging
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: FIND YOUR AESTHETIC */}
        <section className="relative mx-auto mt-20 max-w-[1280px] md:mt-[220px] lg:mt-[240px] z-10">
          <h2 className="font-fraunces text-[28px] sm:text-[38px] md:text-[52px] font-semibold leading-[1.08] tracking-normal text-[#1E1618]">
            Find Your Aesthetic
          </h2>

          {/* 4 Organic Scalloped Masked Category Cards */}
          <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4 md:gap-7">
            {CATEGORIES.map((cat, idx) => {
              return (
                <div
                  key={cat.id || idx}
                  onClick={() => setActiveCategory(cat.id === activeCategory ? "all" : cat.id)}
                  className="group relative flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
                >
                  {/* Card Container with Rectangle 9 Mask */}
                  <div className="relative w-full aspect-[260/320] drop-shadow-[0_12px_24px_rgba(120,40,60,0.12)] transition-all duration-300 group-hover:drop-shadow-[0_18px_32px_rgba(120,40,60,0.22)]">
                    <div
                      className="relative w-full h-full overflow-hidden bg-white"
                      style={{
                        clipPath: "url(#scrunchie-clip)",
                        WebkitClipPath: "url(#scrunchie-clip)",
                        maskImage: "url('/browsepage2/Rectangle 9.png')",
                        WebkitMaskImage: "url('/browsepage2/Rectangle 9.png')",
                        maskSize: "100% 100%",
                        WebkitMaskSize: "100% 100%",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                      }}
                    >
                      <Image
                        src={cat.image}
                        alt={cat.label}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 260px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </div>

                    {/* Bottom Pill Badge: Rectangle 74 with handwriting typography */}
                    <div className="absolute bottom-[22px] sm:bottom-[28px] left-1/2 -translate-x-1/2 z-20 w-[84%] max-w-[190px] pointer-events-none drop-shadow-xs transition-transform duration-300 group-hover:scale-105">
                      <div className="relative w-full aspect-[223/44] flex items-center justify-center">
                        <Image
                          src="/browsepage2/Rectangle 74.png"
                          alt=""
                          fill
                          unoptimized
                          sizes="190px"
                          className="object-contain select-none"
                          priority
                        />
                        <span className="relative z-10 font-handwriting text-[18px] sm:text-[20px] md:text-[21px] text-white tracking-wide select-none drop-shadow-xs -translate-y-[1px]">
                          {cat.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* FEATURED PIECES & WHAT CUSTOMERS ARE SAYING (Shared background with Figma Vector 1) */}
      <div className="relative overflow-hidden bg-[#FDE8EC]">
        {/* Continuous Flowing Vector 1 Overlay matching Figma (1440x1737) */}
        <div className="pointer-events-none absolute inset-0 w-full h-full select-none z-0">
          <Image
            src="/browsepage2/Vector 1.png"
            alt=""
            fill
            unoptimized
            className="w-full h-full object-fill pointer-events-none"
          />
        </div>

        {/* FEATURED PIECES (Carousel / Product Showcase) */}
        <section id="shop" className="relative z-10 px-6 py-14 md:px-10 md:py-20">
          <div className="relative mx-auto max-w-[1280px]">
            {/* Header & Carousel Buttons */}
            <div className="flex items-center justify-between">
              <h2 className="font-fraunces text-[28px] sm:text-[38px] md:text-[52px] font-semibold leading-[1.08] tracking-normal text-[#1E1618]">
                Featured Pieces
              </h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  aria-label="Previous featured items"
                  className="relative flex h-10 w-8 sm:h-11 sm:w-9 items-center justify-center bg-white text-[#1E1618] drop-shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                  style={{
                    clipPath: "url(#scrunchie-clip)",
                    WebkitClipPath: "url(#scrunchie-clip)",
                    maskImage: "url('/browsepage2/Rectangle 9.png')",
                    WebkitMaskImage: "url('/browsepage2/Rectangle 9.png')",
                    maskSize: "100% 100%",
                    WebkitMaskSize: "100% 100%",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next featured items"
                  className="relative flex h-10 w-8 sm:h-11 sm:w-9 items-center justify-center bg-white text-[#1E1618] drop-shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                  style={{
                    clipPath: "url(#scrunchie-clip)",
                    WebkitClipPath: "url(#scrunchie-clip)",
                    maskImage: "url('/browsepage2/Rectangle 9.png')",
                    WebkitMaskImage: "url('/browsepage2/Rectangle 9.png')",
                    maskSize: "100% 100%",
                    WebkitMaskSize: "100% 100%",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4 md:gap-7">
              {FEATURED_PRODUCTS.slice(carouselIndex, carouselIndex + 4).map((product, idx) => (
                <div
                  key={`${product.id}-${idx}`}
                  className="group relative flex flex-col items-center w-full aspect-[342/493] transition-transform duration-300 hover:-translate-y-1.5"
                >
                  {/* Outer White Background Card (Rectangle 21) */}
                  <Image
                    src="/browsepage2/Rectangle 21.png"
                    alt=""
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 342px"
                    className="object-contain pointer-events-none select-none drop-shadow-[0_12px_24px_rgba(120,40,60,0.12)]"
                    priority
                  />

                  {/* Content inside the White Card */}
                  <div className="relative z-10 flex flex-col items-center justify-between w-full h-full pt-[5%] pb-[4%] px-[5%]">
                    {/* Inner Masked Product Image */}
                    <div className="relative w-[90%] aspect-[260/320] drop-shadow-xs mt-1">
                      <div
                        className="relative w-full h-full overflow-hidden bg-[#2D0A16]"
                        style={{
                          clipPath: "url(#scrunchie-clip)",
                          WebkitClipPath: "url(#scrunchie-clip)",
                          maskImage: "url('/browsepage2/Rectangle 9.png')",
                          WebkitMaskImage: "url('/browsepage2/Rectangle 9.png')",
                          maskSize: "100% 100%",
                          WebkitMaskSize: "100% 100%",
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          unoptimized
                          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 260px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority
                        />
                      </div>
                    </div>

                    {/* Product Title and Price - Explicit handwriting font, crisp sizing */}
                    <div className="w-[88%] flex items-center justify-between px-1 text-[#1E1618] select-none -mt-1">
                      <span className="font-handwriting text-[20px] sm:text-[24px] md:text-[26px] font-normal leading-[1.08] select-none text-[#1E1618]">
                        {product.name}
                      </span>
                      <span className="font-handwriting text-[20px] sm:text-[24px] md:text-[26px] font-normal leading-[1.08] select-none text-[#1E1618]">
                        ${product.price}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(product.name)}
                      className="relative w-[70%] max-w-[155px] aspect-[223/44] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer drop-shadow-xs mb-1"
                    >
                      <Image
                        src="/browsepage2/Rectangle 74.png"
                        alt=""
                        fill
                        unoptimized
                        sizes="155px"
                        className="object-contain select-none pointer-events-none"
                      />
                      <span className="relative z-10 font-handwriting text-[14px] sm:text-[16px] text-white tracking-wide select-none drop-shadow-xs">
                        Add to cart
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT CUSTOMERS ARE SAYING (Testimonials matching LANDING PAGE.png) */}
        <section className="relative z-10 px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="text-center font-fraunces text-[20px] sm:text-[24px] md:text-[26px] font-bold uppercase tracking-[0.2em] text-[#1E1618]">
              WHAT CUSTOMERS ARE SAYING
            </h2>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
              {/* Card 1 - Asymmetric Arch Top-Left */}
              <div className="group relative w-full h-full py-2">
                <div
                  className="relative bg-gradient-to-br from-[#8C8E87] via-[#9E6277] to-[#AC4A69] p-8 sm:p-9 text-center text-white shadow-[0_16px_36px_rgba(135,54,83,0.22)] transition-transform duration-500 ease-out group-hover:-translate-y-2"
                  style={{ borderRadius: "100px 24px 24px 24px" }}
                >
                  {/* Rosette Seal Top Left - positioned on top-left arch curve */}
                  <Image
                    src="/browsepage1/star-10.png"
                    alt=""
                    width={48}
                    height={48}
                    unoptimized
                    className="absolute left-6 -top-2 h-11 w-11 drop-shadow-md animate-spin-slow"
                    aria-hidden
                  />
                  <p className="font-handwriting text-[20px] sm:text-[22px] leading-relaxed text-white font-normal">
                    “it feels like getting a gift from a friend who really knows me”
                  </p>
                  <p className="mt-6 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.25em] text-white">
                    ADEBISI
                  </p>
                </div>
              </div>

              {/* Card 2 - Staggered Lower Down */}
              <div className="group relative w-full h-full py-2 md:translate-y-8">
                <div
                  className="relative bg-gradient-to-b from-[#8A3D58] to-[#AF4E70] p-8 sm:p-9 text-center text-white shadow-[0_18px_40px_rgba(120,40,66,0.28)] transition-transform duration-500 ease-out group-hover:-translate-y-2"
                  style={{ borderRadius: "36px 36px 56px 56px" }}
                >
                  {/* Rosette Seal Top Center */}
                  <Image
                    src="/browsepage1/star-10.png"
                    alt=""
                    width={48}
                    height={48}
                    unoptimized
                    className="absolute left-1/2 -top-4 -translate-x-1/2 h-11 w-11 drop-shadow-md animate-spin-slow"
                    aria-hidden
                  />
                  <p className="font-handwriting text-[20px] sm:text-[22px] leading-relaxed text-white font-normal">
                    “it feels like getting a gift from a friend who really knows me”
                  </p>
                  <p className="mt-6 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.25em] text-white">
                    DANIEL
                  </p>
                </div>
              </div>

              {/* Card 3 - Asymmetric Arch Top-Right */}
              <div className="group relative w-full h-full py-2">
                <div
                  className="relative bg-gradient-to-br from-[#8C8E87] via-[#9E6277] to-[#AC4A69] p-8 sm:p-9 text-center text-white shadow-[0_16px_36px_rgba(135,54,83,0.22)] transition-transform duration-500 ease-out group-hover:-translate-y-2"
                  style={{ borderRadius: "24px 100px 24px 24px" }}
                >
                  {/* Rosette Seal Bottom Right */}
                  <Image
                    src="/browsepage1/star-10.png"
                    alt=""
                    width={48}
                    height={48}
                    unoptimized
                    className="absolute -bottom-3 -right-3 h-11 w-11 drop-shadow-md animate-spin-slow"
                    aria-hidden
                  />
                  <p className="font-handwriting text-[20px] sm:text-[22px] leading-relaxed text-white font-normal">
                    “it feels like getting a gift from a friend who really knows me”
                  </p>
                  <p className="mt-6 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.25em] text-white">
                    FLORENCE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter Signup ("Get first access to new drops") */}
      <section className="px-6 py-14 text-center md:px-10 md:py-20">
        <div className="mx-auto max-w-[640px]">
          <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[34px] font-bold text-[#B84A6E]">
            Get first access to new drops
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-[15px] sm:text-[16px] leading-relaxed text-[#241E20]">
            Join the inner circle for early product drops ,<br className="hidden sm:inline" /> restock alerts and the occasional studio story
          </p>

          {subscribed ? (
            <div className="mx-auto mt-6 max-w-[420px] rounded-full bg-[#DCFCE7] py-3 px-5 text-sm font-semibold text-[#15803D] border border-[#86EFAC]">
              ✨ You&apos;re on the list! Welcome to the inner circle.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mx-auto mt-8 flex max-w-[500px] items-center rounded-full border-[2.5px] border-[#832C4A] bg-white pl-5 pr-1 py-1 shadow-xs transition-shadow focus-within:ring-2 focus-within:ring-[#832C4A]/30"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent pr-3 py-2 text-[14px] sm:text-[15px] text-[#241E20] outline-none placeholder:text-[#7E787A]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#832C4A] px-7 py-2.5 text-[15px] sm:text-[16px] font-medium text-white transition hover:bg-[#6E233C] active:scale-98 cursor-pointer shrink-0 select-none"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section id="faq" className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[880px]">
          <h2 className="text-center font-fraunces text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#B84A6E]">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 border-t border-[#D49BAA]/60">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-[#D49BAA]/60 py-5 sm:py-6">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 text-left cursor-pointer group select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-[18px] sm:text-[21px] md:text-[23px] font-medium text-[#7A2846] group-hover:text-[#9E365C] transition-colors">
                      {faq.question}
                    </span>
                    {/* Rosette Chevron Badge */}
                    <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center transition-transform group-hover:scale-105">
                      <Image
                        src="/browsepage1/star-10.png"
                        alt=""
                        fill
                        unoptimized
                        className={`object-contain select-none transition-all duration-300 ${
                          isOpen ? "brightness-75 contrast-125" : "brightness-105"
                        }`}
                      />
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isOpen ? "#FFFFFF" : "#1E1618"}
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`relative z-10 transition-transform duration-300 ${
                          isOpen ? "" : "rotate-180"
                        }`}
                      >
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-12 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#5A323E]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rich Plum Footer Container */}
      <div className="relative w-full mt-14 z-20">
        {/* Rosette Seal Floating on Top Center Edge (Unclipped over section above and footer) */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <Image
            src="/browsepage1/star-10.png"
            alt=""
            width={84}
            height={84}
            unoptimized
            className="h-20 w-20 sm:h-22 sm:w-22 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)] animate-spin-slow"
          />
        </div>

        <footer
          id="contact"
          className="relative bg-[#9B4461] px-6 pt-16 pb-4 text-white md:px-10 md:pt-20 rounded-t-[48px] md:rounded-t-[64px] overflow-hidden"
        >
          {/* Full-bleed background wavy vector lines (Vector 7, Vector 3, Vector 5, Vector 6) */}
          <div className="pointer-events-none absolute inset-0 w-full h-full opacity-70 select-none z-0 overflow-hidden">
            {/* Main base background curves (Vector 7) */}
            <Image
              src="/footer/Vector 7.png"
              alt=""
              fill
              unoptimized
              className="w-full h-full object-fill pointer-events-none"
            />

            {/* Vector 3 Overlay (Moved to bottom and shifted 70px right) */}
            <div className="absolute bottom-[2%] left-[22%] translate-x-[70px] w-[42%] h-[46%] opacity-85 pointer-events-none">
              <Image
                src="/footer/Vector 3.png"
                alt=""
                fill
                unoptimized
                className="object-contain object-bottom pointer-events-none"
              />
            </div>



            {/* Vector 6 Overlay */}
            <div className="absolute bottom-[0%] left-[8%] w-[48%] h-[75%] opacity-80 pointer-events-none">
              <Image
                src="/footer/Vector 6.png"
                alt=""
                fill
                unoptimized
                className="object-contain object-bottom-left pointer-events-none"
              />
            </div>
          </div>

          {/* Top Row: Brand, Centered Links, Organic Social Badges */}
          <div className="mx-auto flex max-w-[1280px] flex-col gap-10 md:flex-row md:items-start md:justify-between z-10 relative">
            {/* Brand Intro with Figma Proportions */}
            <div className="max-w-[420px]">
              <h3 className="font-serif text-[42px] sm:text-[48px] font-bold tracking-tight text-white leading-none">
                Virela
              </h3>
              <p className="mt-4 font-sans text-[17px] sm:text-[18px] md:text-[19px] leading-[1.48] text-white/95 font-normal">
                Aesthetic accessories and creative handmades for people who love beauty in the details
              </p>
            </div>

            {/* Centered Navigation Links (Home, Our Story, Shop, FAQ) */}
            <div className="flex flex-col gap-3.5 text-[18px] sm:text-[20px] font-medium text-white md:items-center">
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
              <Link href="#story" className="hover:text-white/80 transition-colors">
                Our Story
              </Link>
              <Link href="#shop" className="hover:text-white/80 transition-colors">
                Shop
              </Link>
              <Link href="#faq" className="hover:text-white/80 transition-colors">
                FAQ
              </Link>
            </div>

            {/* 3 Vertically Stacked Organic White Badges for Social Links matching Figma */}
            <div className="flex flex-row md:flex-col gap-3.5 items-start">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center bg-white rounded-[16px] sm:rounded-[18px] shadow-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 text-[#1E1618] font-bold text-[18px] sm:text-[19px]">𝕏</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center bg-white rounded-[16px] sm:rounded-[18px] shadow-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 text-[#1E1618] font-bold text-[18px] sm:text-[19px]">𝕏</span>
              </a>

              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center bg-white rounded-[16px] sm:rounded-[18px] shadow-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 text-[#1E1618] font-bold text-[18px] sm:text-[19px]">𝕏</span>
              </a>
            </div>
          </div>

          {/* Giant Script Wordmark with 5 Overlay Stars & Rosettes matching Figma */}
          <div className="relative mx-auto mt-8 w-full max-w-[1440px] select-none pointer-events-none flex justify-center z-10">
            <Image
              src="/footer/Virela.png"
              alt="Virela"
              width={1379}
              height={377}
              unoptimized
              className="w-full h-auto max-h-[460px] object-contain object-bottom pointer-events-none"
              priority
            />

            {/* Overlay Star 1: Sparkle Star on bottom of 'V' */}
            <Image
              src="/browsepage1/star-12.png"
              alt=""
              width={58}
              height={58}
              unoptimized
              className="absolute left-[10%] bottom-[12%] h-12 w-12 sm:h-15 sm:w-15 object-contain pointer-events-none drop-shadow-md animate-spin-slow"
              aria-hidden
            />

            {/* Overlay Star 2: Pink Rosette Badge on 'i' */}
            <Image
              src="/browsepage1/star-10.png"
              alt=""
              width={52}
              height={52}
              unoptimized
              className="absolute left-[33.5%] top-[12%] h-11 w-11 sm:h-14 sm:w-14 object-contain pointer-events-none drop-shadow-md animate-spin-slow"
              aria-hidden
            />

            {/* Overlay Star 3: Sparkle Star on 'e' */}
            <Image
              src="/browsepage1/star-12.png"
              alt=""
              width={52}
              height={52}
              unoptimized
              className="absolute left-[64%] top-[22%] h-11 w-11 sm:h-14 sm:w-14 object-contain pointer-events-none drop-shadow-md animate-spin-slow"
              aria-hidden
            />

            {/* Overlay Star 4: Pink Rosette Badge on 'l' */}
            <Image
              src="/browsepage1/star-10.png"
              alt=""
              width={48}
              height={48}
              unoptimized
              className="absolute right-[23.5%] bottom-[12%] h-10 w-10 sm:h-13 sm:w-13 object-contain pointer-events-none drop-shadow-md animate-spin-slow"
              aria-hidden
            />

            {/* Overlay Star 5: Sparkle Star on 'a' */}
            <Image
              src="/browsepage1/star-13.png"
              alt=""
              width={48}
              height={48}
              unoptimized
              className="absolute right-[7%] top-[16%] h-10 w-10 sm:h-13 sm:w-13 object-contain pointer-events-none drop-shadow-md animate-spin-slow"
              aria-hidden
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
