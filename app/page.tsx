"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

const COLOR_SWATCHES = [
  { id: "rose", name: "Blush Rose", hex: "#D9A8B5", previewTone: "from-[#FAD0DC]/40 to-[#F2A8BE]/30" },
  { id: "sage", name: "Sage Cream", hex: "#E8F0E0", previewTone: "from-[#E4EFE0]/40 to-[#D0E2C8]/30" },
  { id: "plum", name: "Deep Plum", hex: "#5A2A3A", previewTone: "from-[#8B3A52]/30 to-[#5A2A3A]/40" },
  { id: "ochre", name: "Ochre Sand", hex: "#C9A86A", previewTone: "from-[#F6E3B8]/40 to-[#C9A86A]/30" },
];

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(COLOR_SWATCHES[0]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAddToCart = (productName: string) => {
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
      <header className="sticky top-0 z-40 bg-[#FAF4F0]/85 backdrop-blur-md border-b border-black/5 transition-all">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-[18px] font-bold tracking-[0.15em] text-[#1E1618] hover:opacity-85 transition-opacity"
          >
            VIRELA
          </Link>

          {/* Nav Links */}
          <nav className="hidden items-center gap-8 text-[14px] font-medium text-[#4A3B42] md:flex">
            <Link href="/" className="text-[#B85C7A] font-semibold transition-colors hover:text-[#7B284A]">
              Home
            </Link>
            <Link href="#story" className="transition-colors hover:text-[#B85C7A]">
              Our Story
            </Link>
            <Link href="#shop" className="transition-colors hover:text-[#B85C7A]">
              Shop
            </Link>
            <Link href="#custom" className="transition-colors hover:text-[#B85C7A]">
              Custom
            </Link>
          </nav>

          {/* Right Action Badges */}
          <div className="flex items-center gap-3">
            {/* Store Open Status */}
            <div className="inline-flex items-center gap-1.5 rounded-md border border-[#16A34A]/25 bg-[#DCFCE7]/90 px-2.5 py-1 text-[11px] font-medium text-[#15803D] shadow-xs">
              <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-[#16A34A] text-[8px] text-white font-bold leading-none">
                ✓
              </span>
              <span>Open — Order Now</span>
            </div>

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
      <main className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="relative h-[640px] w-full md:h-[680px] lg:h-[740px]">
          {/* Floating Craft Cards on Desktop */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {/* Top-Left: Orange Blossom Pom-Pom + Star 12 */}
            <div className="absolute left-[2%] top-[4%] h-[240px] w-[220px] rotate-[-7deg] drop-shadow-[0_16px_22px_rgba(120,40,60,0.15)] lg:left-[5%] lg:h-[280px] lg:w-[260px] animate-float-1">
              <Image
                src="/browsepage1/mask-group.png"
                alt="Orange pom-pom floral craft"
                width={400}
                height={400}
                className="h-full w-full object-contain"
                priority
              />
              <Image
                src="/browsepage1/star-12.png"
                alt=""
                width={70}
                height={70}
                className="absolute -right-[12px] top-[14px] h-[58px] w-[58px] lg:-right-[10px] lg:top-[16px] lg:h-[68px] lg:w-[68px] animate-spin-slow drop-shadow-sm"
                aria-hidden
              />
            </div>

            {/* Top-Right: Deep Berry Tassel Lamp + Scalloped Star 10 */}
            <div className="absolute right-[3%] top-[5%] h-[250px] w-[230px] rotate-[6deg] drop-shadow-[0_16px_22px_rgba(120,40,60,0.15)] lg:right-[6%] lg:h-[290px] lg:w-[270px] animate-float-2">
              <Image
                src="/browsepage1/mask-group-1.png"
                alt="Magenta woven lamp creation"
                width={400}
                height={400}
                className="h-full w-full object-contain"
                priority
              />
              <Image
                src="/browsepage1/star-10.png"
                alt=""
                width={56}
                height={56}
                className="absolute left-[8px] top-[14px] h-[48px] w-[48px] lg:left-[10px] lg:top-[16px] lg:h-[56px] lg:w-[56px] animate-spin-slow drop-shadow-sm"
                aria-hidden
              />
            </div>

            {/* Bottom-Left: Pink Woven Bag + Sparkle Star 11 */}
            <div className="absolute bottom-[6%] left-[3%] h-[230px] w-[215px] rotate-[-4deg] drop-shadow-[0_16px_22px_rgba(120,40,60,0.15)] lg:bottom-[8%] lg:left-[4%] lg:h-[265px] lg:w-[245px] animate-float-3">
              <Image
                src="/browsepage1/mask-group-2.png"
                alt="Handcrafted woven bag"
                width={400}
                height={400}
                className="h-full w-full object-contain"
              />
              <Image
                src="/browsepage1/star-11.png"
                alt=""
                width={56}
                height={56}
                className="absolute -left-2 top-[18px] h-[48px] w-[48px] lg:-left-2 lg:top-[18px] lg:h-[54px] lg:w-[54px] animate-spin-slow drop-shadow-sm"
                aria-hidden
              />
            </div>

            {/* Bottom-Right: Pastel Pom-Pom Scrunchie + Sparkle Star 13 */}
            <div className="absolute bottom-[7%] right-[3%] h-[230px] w-[215px] rotate-[7deg] drop-shadow-[0_16px_22px_rgba(120,40,60,0.15)] lg:bottom-[9%] lg:right-[5%] lg:h-[265px] lg:w-[245px] animate-float-4">
              <Image
                src="/browsepage1/mask-group-3.png"
                alt="Pastel pom pom scrunchie"
                width={400}
                height={400}
                className="h-full w-full object-contain"
              />
              <Image
                src="/browsepage1/star-13.png"
                alt=""
                width={70}
                height={70}
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

            <p className="mt-5 max-w-[440px] text-[13.5px] font-medium leading-snug text-[#7B2D4B] md:text-[15px]">
              Every VIRELA piece is a small act of
              <br />
              creativity you get to carry with you
            </p>

            <Link
              href="/login"
              className="group mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#7B284A] px-9 text-[15px] font-medium italic tracking-wide text-white shadow-lg shadow-[#7B284A]/25 transition hover:bg-[#68203D] hover:scale-105 active:scale-98"
            >
              <span>Start Order</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>

        {/* Mobile floating gallery showcase */}
        <div className="flex w-full justify-center gap-3 pb-8 md:hidden">
          <div className="h-24 w-24 overflow-hidden rounded-2xl bg-white p-1 shadow-sm">
            <Image src="/browsepage1/mask-group.png" alt="" width={120} height={120} className="h-full w-full object-contain" />
          </div>
          <div className="h-24 w-24 overflow-hidden rounded-2xl bg-white p-1 shadow-sm">
            <Image src="/browsepage1/mask-group-1.png" alt="" width={120} height={120} className="h-full w-full object-contain" />
          </div>
          <div className="h-24 w-24 overflow-hidden rounded-2xl bg-white p-1 shadow-sm">
            <Image src="/browsepage1/mask-group-3.png" alt="" width={120} height={120} className="h-full w-full object-contain" />
          </div>
        </div>
      </main>

      {/* Story & Philosophy Section ("A little craft , a lot of heart") */}
      <div id="story" className="relative overflow-hidden bg-[#FFFCF8] px-6 pt-20 pb-16 md:px-10 md:pt-[150px] md:pb-24">
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
            {/* Story Image Card - Asymmetric Top-Left Arch, No White Border */}
            <div className="relative w-full max-w-[460px] md:w-[45%] lg:w-[42%] shrink-0">
              <div className="relative overflow-hidden rounded-tl-[84px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] shadow-[0_16px_40px_rgba(120,40,60,0.15)] transition-transform duration-500 hover:scale-[1.01]">
                <Image
                  src="/browsepage2/craft-photo.png"
                  alt="Two artisans joyfully crocheting handmade creations in the studio"
                  width={580}
                  height={440}
                  className="h-[270px] sm:h-[310px] md:h-[330px] lg:h-[350px] w-full rounded-tl-[84px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] object-cover"
                />
              </div>

              {/* Bigger 4-Pointed Sparkle Star on Lower-Left Edge */}
              <div className="absolute -left-5 md:-left-6 top-[68%] -translate-y-1/2 rotate-[-18deg] z-10">
                <Image
                  src="/browsepage1/star-12.png"
                  alt=""
                  width={64}
                  height={64}
                  className="h-13 w-13 md:h-16 md:w-16 lg:h-18 lg:w-18 object-contain drop-shadow-[0_4px_10px_rgba(120,40,60,0.25)]"
                  aria-hidden
                />
              </div>

              {/* Smaller 4-Pointed Sparkle Star on Top Edge (Towards Middle-Right) */}
              <div className="absolute left-[64%] -top-3.5 md:-top-4 -translate-x-1/2 rotate-[14deg] z-10">
                <Image
                  src="/browsepage1/star-12.png"
                  alt=""
                  width={36}
                  height={36}
                  className="h-7.5 w-7.5 md:h-8.5 md:w-8.5 object-contain drop-shadow-[0_3px_8px_rgba(120,40,60,0.2)]"
                  aria-hidden
                />
              </div>
            </div>

            {/* Story Text & Custom Badge Chips */}
            <div className="w-full md:w-[55%] lg:w-[58%]">
              <h2 className="font-serif text-[34px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-bold leading-[1.12] text-[#B84A6E] tracking-tight">
                A little craft , a lot of heart
              </h2>
              <p className="mt-5 max-w-[710px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[1.35] text-[#2E1E24]/90 font-normal">
                At VIRELA, every piece is handmade with intention : scrunchies, jewelry, and creative crafts designed to
                celebrate individuality. We prioritize thoughtful craftsmanship and honest materials, so every customer feels seen in
                what they wear.
              </p>

              {/* Feature Chips Row with Scalloped Containers and Handwriting Typography */}
              <div className="mt-8 flex flex-wrap items-center gap-7 md:gap-10">
                {/* Specially Handmade */}
                <div className="flex items-center gap-3">
                  <div
                    className="relative flex h-11 w-9 items-center justify-center shrink-0 bg-[#7B2D4B] drop-shadow-xs transition-transform hover:scale-105"
                    style={{ borderRadius: "14px 10px 10px 14px / 18px 14px 14px 10px" }}
                  >
                    <span className="relative z-10 text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4.2a2.3 2.3 0 0 0-3.25 0L8 5l-.75-.8A2.3 2.3 0 0 0 4 7.45L8 11.5l4-4.05A2.3 2.3 0 0 0 12 4.2z" fill="none" />
                        <path d="M2 13.5h5a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H3.5" />
                        <path d="M9 15.5l3.8-3.2a2 2 0 0 1 2.8 0v0a2 2 0 0 1 0 2.8L12 18.5H6" />
                      </svg>
                    </span>
                  </div>
                  <span className="font-handwriting text-[17px] sm:text-[18px] md:text-[20px] text-[#742644] tracking-wide">Specially Handmade</span>
                </div>

                {/* Aesthetic Packaging */}
                <div className="flex items-center gap-3">
                  <div
                    className="relative flex h-11 w-9 items-center justify-center shrink-0 bg-[#7B2D4B] drop-shadow-xs transition-transform hover:scale-105"
                    style={{ borderRadius: "10px 14px 14px 10px / 14px 18px 10px 14px" }}
                  >
                    <span className="relative z-10 text-white">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 12 20 22 4 22 4 12" />
                        <rect width="20" height="5" x="2" y="7" rx="1" />
                        <line x1="12" x2="12" y1="22" y2="7" />
                        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                      </svg>
                    </span>
                  </div>
                  <span className="font-handwriting text-[17px] sm:text-[18px] md:text-[20px] text-[#742644] tracking-wide">Aesthetic Packaging</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: FIND YOUR AESTHETIC */}
        <section className="relative mx-auto mt-20 max-w-[1280px] md:mt-[280px] lg:mt-[300px] z-10">
          <h2 className="font-serif text-[18px] sm:text-[20px] md:text-[22px] font-bold uppercase tracking-[0.2em] text-[#1E1618]">
            FIND YOUR AESTHETIC
          </h2>

          {/* 4 Organic Scalloped Masked Category Cards */}
          <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4 md:gap-7">
            {CATEGORIES.map((cat, idx) => {
              const isSelected = activeCategory === cat.id;
              return (
                <div
                  key={cat.id || idx}
                  onClick={() => setActiveCategory(cat.id === activeCategory ? "all" : cat.id)}
                  className="group relative flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
                >
                  {/* Card Container with Rectangle 9 Mask and Soft Shadow */}
                  <div className="relative w-full aspect-[260/320] drop-shadow-[0_12px_24px_rgba(120,40,60,0.12)] transition-all duration-300 group-hover:drop-shadow-[0_18px_32px_rgba(120,40,60,0.22)]">
                    {/* Masked Card Photo with Rectangle 9 */}
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
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 260px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </div>

                    {/* Bottom Pill Badge: Rectangle 74 for the bg of the scrunchie text */}
                    <div className="absolute bottom-[22px] sm:bottom-[28px] left-1/2 -translate-x-1/2 z-20 w-[84%] max-w-[190px] pointer-events-none drop-shadow-xs transition-transform duration-300 group-hover:scale-105">
                      <div className="relative w-full aspect-[223/44] flex items-center justify-center">
                        <Image
                          src="/browsepage2/Rectangle 74.png"
                          alt=""
                          fill
                          sizes="190px"
                          className="object-contain select-none"
                          priority
                        />
                        <span className="relative z-10 font-handwriting text-[17px] sm:text-[18px] md:text-[20px] text-white tracking-wide select-none drop-shadow-xs -translate-y-[1px]">
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

      {/* FEATURED PIECES (Carousel / Product Showcase) */}
      <section id="shop" className="relative overflow-hidden bg-[#FDE8EC] px-6 py-14 md:px-10 md:py-20">
        {/* Background curvy vector */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.3]">
          <Image src="/browsepage2/vector-1.png" alt="" fill sizes="100vw" className="object-cover object-center" />
        </div>

        <div className="relative mx-auto max-w-[1280px]">
          {/* Header & Carousel Buttons */}
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-[18px] sm:text-[20px] md:text-[22px] font-bold uppercase tracking-[0.2em] text-[#1E1618]">
              FEATURED PIECES
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
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 342px"
                  className="object-contain pointer-events-none select-none drop-shadow-[0_12px_24px_rgba(120,40,60,0.12)]"
                  priority
                />

                {/* Content inside the White Card */}
                <div className="relative z-10 flex flex-col items-center justify-between w-full h-full pt-[5%] pb-[4%] px-[5%]">
                  {/* Inner Masked Product Image (Rectangle 9 mask) */}
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
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 260px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </div>
                  </div>

                  {/* Product Title and Price according to Figma format */}
                  <div className="w-[88%] flex items-center justify-between px-1 text-[#1E1618] select-none -mt-1">
                    <span
                      className="font-handwriting text-[18px] sm:text-[22px] md:text-[25px] lg:text-[28px] font-normal leading-[108%] tracking-[0%] select-none"
                      style={{
                        fontFamily: "var(--font-handwriting)",
                        fontWeight: 400,
                        lineHeight: "108%",
                        letterSpacing: "0%",
                      }}
                    >
                      {product.name}
                    </span>
                    <span
                      className="font-handwriting text-[18px] sm:text-[22px] md:text-[25px] lg:text-[28px] font-normal leading-[108%] tracking-[0%] select-none"
                      style={{
                        fontFamily: "var(--font-handwriting)",
                        fontWeight: 400,
                        lineHeight: "108%",
                        letterSpacing: "0%",
                      }}
                    >
                      ${product.price}
                    </span>
                  </div>

                  {/* Add to Cart Button (Rectangle 74 shape) */}
                  <button
                    onClick={() => handleAddToCart(product.name)}
                    className="relative w-[70%] max-w-[155px] aspect-[223/44] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer drop-shadow-xs mb-1"
                  >
                    <Image
                      src="/browsepage2/Rectangle 74.png"
                      alt=""
                      fill
                      sizes="155px"
                      className="object-contain select-none pointer-events-none"
                    />
                    <span className="relative z-10 font-handwriting text-[13px] sm:text-[15px] md:text-[16px] text-white tracking-wide select-none drop-shadow-xs">
                      Add to cart
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CUSTOMERS ARE SAYING (Testimonials) */}
      <section className="bg-gradient-to-b from-[#FFF9F2] to-[#FFF4EA] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-center font-serif text-[14px] font-bold uppercase tracking-[0.2em] text-[#1E1618] md:text-[16px]">
            WHAT CUSTOMERS ARE SAYING
          </h2>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
            {/* Card 1 */}
            <div
              className="relative bg-gradient-to-br from-[#B55B77] to-[#873653] p-7 text-center text-white shadow-[0_12px_28px_rgba(135,54,83,0.25)] transition hover:-translate-y-1"
              style={{ borderRadius: "34% 24% 30% 38% / 32% 34% 28% 36%" }}
            >
              {/* Star Sticker Top Left */}
              <Image
                src="/browsepage1/star-10.png"
                alt=""
                width={36}
                height={36}
                className="absolute -left-3 -top-3 h-9 w-9 drop-shadow-md animate-spin-slow"
                aria-hidden
              />
              <p className="font-serif text-[14px] italic leading-relaxed text-white/95">
                “it feels like getting a gift from a friend who really knows me”
              </p>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">ADEBISI</p>
            </div>

            {/* Card 2 (Lower Staggered Position) */}
            <div
              className="relative bg-gradient-to-br from-[#A84865] to-[#782842] p-7 text-center text-white shadow-[0_14px_32px_rgba(120,40,66,0.3)] transition hover:-translate-y-1 md:translate-y-4"
              style={{ borderRadius: "28% 34% 38% 24% / 36% 30% 30% 34%" }}
            >
              {/* Star Sticker Top Center */}
              <Image
                src="/browsepage1/star-12.png"
                alt=""
                width={36}
                height={36}
                className="absolute left-1/2 -top-4 -translate-x-1/2 h-9 w-9 drop-shadow-md animate-spin-slow"
                aria-hidden
              />
              <p className="font-serif text-[14px] italic leading-relaxed text-white/95">
                “it feels like getting a gift from a friend who really knows me”
              </p>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">ADEBISI</p>
            </div>

            {/* Card 3 */}
            <div
              className="relative bg-gradient-to-br from-[#B55B77] to-[#873653] p-7 text-center text-white shadow-[0_12px_28px_rgba(135,54,83,0.25)] transition hover:-translate-y-1"
              style={{ borderRadius: "38% 28% 24% 34% / 30% 36% 34% 30%" }}
            >
              {/* Star Sticker Bottom Right */}
              <Image
                src="/browsepage1/star-10.png"
                alt=""
                width={36}
                height={36}
                className="absolute -bottom-3 -right-3 h-9 w-9 drop-shadow-md animate-spin-slow"
                aria-hidden
              />
              <p className="font-serif text-[14px] italic leading-relaxed text-white/95">
                “it feels like getting a gift from a friend who really knows me”
              </p>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">ADEBISI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup ("Get first access to new drops") */}
      <section className="bg-[#FFF4F6] px-6 py-14 text-center md:px-10 md:py-18">
        <div className="mx-auto max-w-[620px]">
          <h2 className="font-serif text-[20px] font-bold text-[#B85C7A] md:text-[24px]">
            Get first access to new drops
          </h2>
          <p className="mx-auto mt-2.5 max-w-[440px] text-[13px] leading-relaxed text-[#6A4D57] md:text-[14px]">
            Join the inner circle for early product drops , restock alerts and the occasional studio story
          </p>

          {subscribed ? (
            <div className="mx-auto mt-6 max-w-[380px] rounded-full bg-[#DCFCE7] py-2.5 px-4 text-xs font-semibold text-[#15803D] border border-[#86EFAC]">
              ✨ You&apos;re on the list! Welcome to the inner circle.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mx-auto mt-6 flex max-w-[400px] items-center overflow-hidden rounded-full border border-[#E5A0A8] bg-white p-1 shadow-xs transition-shadow focus-within:ring-2 focus-within:ring-[#B85C7A]/40"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent px-4 py-2 text-xs text-[#241E20] outline-none placeholder:text-zinc-400"
              />
              <button
                type="submit"
                className="rounded-full bg-[#7B284A] px-5 py-2 text-xs font-medium text-white transition hover:bg-[#68203D] cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* MAKE IT YOURS (Custom Commissions Builder) */}
      <section id="custom" className="bg-white px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Left Column: Copy, Swatches & CTA */}
          <div className="w-full md:w-[50%] lg:w-[46%]">
            <h2 className="font-serif text-[15px] font-bold uppercase tracking-[0.2em] text-[#1E1618] md:text-[17px]">
              MAKE IT YOURS
            </h2>
            <p className="mt-3 max-w-[440px] text-[13.5px] leading-relaxed text-[#5A3A45] md:text-[14.5px]">
              Pick your palette , add a charm . Custom commissions are hand-finished just for you , the same
              craftsmanship shaped around your story.
            </p>

            {/* Interactive Color Palette Swatches */}
            <div className="mt-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6D77] mb-2">
                Selected Tone: <span className="text-[#7B284A]">{selectedColor.name}</span>
              </p>
              <div className="flex items-center gap-3">
                {COLOR_SWATCHES.map((swatch) => (
                  <button
                    key={swatch.id}
                    onClick={() => setSelectedColor(swatch)}
                    title={swatch.name}
                    aria-label={`Select ${swatch.name} palette`}
                    className={`h-7 w-7 rounded-full transition-all duration-200 cursor-pointer ${
                      selectedColor.id === swatch.id
                        ? "scale-115 ring-2 ring-[#7B284A] ring-offset-2"
                        : "hover:scale-110 ring-1 ring-black/10"
                    }`}
                    style={{ backgroundColor: swatch.hex }}
                  />
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/design"
              className="mt-6 inline-flex rounded-full bg-[#7B284A] px-7 py-2.5 text-xs font-medium tracking-wide text-white shadow-md shadow-[#7B284A]/20 transition hover:bg-[#68203D] hover:scale-105 active:scale-98"
            >
              Start a Custom Order
            </Link>
          </div>

          {/* Right Column: Custom Commission Arch Preview Card */}
          <div className="w-full md:w-[48%] lg:w-[50%]">
            <div
              className={`relative h-[240px] overflow-hidden bg-gradient-to-br ${selectedColor.previewTone} p-4 shadow-[0_12px_32px_rgba(120,40,60,0.08)] border border-[#7B284A]/10 md:h-[280px] transition-all duration-500`}
              style={{ borderRadius: "88px 24px 24px 20px / 68px 24px 24px 20px" }}
            >
              <div className="relative h-full w-full rounded-[64px_16px_16px_16px] bg-white/70 backdrop-blur-xs flex items-center justify-center overflow-hidden">
                <Image
                  src="/browsepage2/scrunchie-aesthetic.png"
                  alt="Custom commission preview"
                  width={340}
                  height={340}
                  className="h-full w-full object-contain p-4 mix-blend-multiply transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute bottom-3 right-4 rounded-full bg-[#7B284A]/90 backdrop-blur-xs px-3.5 py-1 text-[11px] font-medium text-white shadow-sm">
                  ✨ Custom Made
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Plum Footer */}
      <footer
        id="contact"
        className="relative bg-[#84304E] px-6 pt-14 pb-8 text-white md:px-10 md:pt-18 md:pb-12"
        style={{ borderRadius: "40px 40px 0 0" }}
      >
        {/* Scalloped Star Emblem on Top Edge */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="h-12 w-12 rounded-full bg-[#9E4564] p-1 shadow-lg border-2 border-white/20 flex items-center justify-center">
            <Image
              src="/browsepage1/star-10.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 object-contain animate-spin-slow"
              aria-hidden
            />
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 md:flex-row md:justify-between md:items-start">
          {/* Brand Intro */}
          <div className="max-w-[320px]">
            <p className="font-serif text-2xl font-bold tracking-wide">Virela</p>
            <p className="mt-3 text-[12.5px] leading-relaxed text-white/80">
              Aesthetic accessories and creative handmades for people who love beauty in the details.
            </p>
          </div>

          {/* Links & Socials */}
          <div className="flex gap-16 text-xs">
            {/* Quick Links */}
            <div className="flex flex-col gap-2.5">
              <span className="font-semibold text-white/60 uppercase tracking-widest text-[10px] mb-1">Explore</span>
              <Link href="/" className="text-white/90 hover:text-white hover:underline transition-colors">
                Home
              </Link>
              <Link href="#story" className="text-white/90 hover:text-white hover:underline transition-colors">
                Our Story
              </Link>
              <Link href="#shop" className="text-white/90 hover:text-white hover:underline transition-colors">
                Shop
              </Link>
              <Link href="#contact" className="text-white/90 hover:text-white hover:underline transition-colors">
                Contact
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-2.5">
              <span className="font-semibold text-white/60 uppercase tracking-widest text-[10px] mb-1">Connect</span>
              <div className="flex gap-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-xs font-bold text-[#84304E] shadow-sm transition hover:bg-white/90 hover:scale-105"
                >
                  𝕏
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-xs font-bold text-[#84304E] shadow-sm transition hover:bg-white/90 hover:scale-105"
                >
                  IG
                </a>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-xs font-bold text-[#84304E] shadow-sm transition hover:bg-white/90 hover:scale-105"
                >
                  WA
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large Decorative Wordmark */}
        <div className="relative mx-auto mt-12 max-w-[1280px] overflow-hidden select-none text-center">
          {/* Background Sparkles in Wordmark */}
          <div className="relative inline-block">
            <Image
              src="/browsepage1/star-12.png"
              alt=""
              width={60}
              height={60}
              className="absolute left-[2%] top-[30%] h-10 w-10 md:h-14 md:w-14 animate-spin-slow opacity-80"
              aria-hidden
            />
            <Image
              src="/browsepage1/star-13.png"
              alt=""
              width={60}
              height={60}
              className="absolute left-[38%] top-[10%] h-8 w-8 md:h-12 md:w-12 animate-spin-slow opacity-80"
              aria-hidden
            />
            <Image
              src="/browsepage1/star-11.png"
              alt=""
              width={60}
              height={60}
              className="absolute right-[5%] top-[25%] h-10 w-10 md:h-14 md:w-14 animate-spin-slow opacity-80"
              aria-hidden
            />
            <p className="font-serif text-[84px] font-bold leading-none tracking-tight text-white/95 sm:text-[120px] md:text-[160px] lg:text-[200px] drop-shadow-sm">
              Virela
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mx-auto mt-6 max-w-[1280px] border-t border-white/10 pt-4 text-center text-[11px] text-white/60">
          © {new Date().getFullYear()} VIRELA. All rights reserved. Handcrafted with love.
        </div>
      </footer>
    </div>
  );
}
