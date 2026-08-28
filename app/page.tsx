import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF2EF] via-[#FFFEE6] to-[#FDF2EF] text-black">
      <header className="mx-auto flex max-w-[1280px] items-center justify-between border-b border-black/15 px-6 py-5 md:px-10">
        <Link href="/" className="font-serif text-[15px] font-bold tracking-wide">
          VIRELA
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] md:flex">
          <Link href="/" className="hover:opacity-70">
            Home
          </Link>
          <Link href="/#story" className="hover:opacity-70">
            Our Story
          </Link>
          <Link href="/#shop" className="hover:opacity-70">
            Shop
          </Link>
          <Link href="/custom" className="hover:opacity-70">
            Custom
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 rounded-md border border-[#16A34A]/30 bg-[#DCFCE7] px-3 py-1.5 text-[11px] font-medium leading-none text-[#16A34A]"
          >
            <span className="inline-flex h-3 w-3 items-center justify-center rounded-full border border-[#16A34A] text-[8px] leading-none">
              ✓
            </span>
            Open - Order Now
          </Link>
          <Link
            href="/checkout"
            aria-label="Cart"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#7B2D4B] text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6h15l-1.5 9h-13z" />
              <path d="M6 6L5 2H2" />
              <circle cx="9" cy="20" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="relative h-[680px] w-full md:h-[680px] lg:h-[720px]">
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <div className="absolute left-[3%] top-[5%] h-[250px] w-[230px] rotate-[-8deg] drop-shadow-[0_14px_18px_rgba(0,0,0,0.18)] lg:left-[5%] lg:h-[285px] lg:w-[265px]">
              <Image src="/browsepage1/Mask group.png" alt="Orange pom pom flower" width={400} height={400} className="h-full w-full object-contain" priority />
              <Image src="/browsepage1/Star 12.png" alt="" width={72} height={72} className="absolute -right-1 -top-1 h-[60px] w-[60px] lg:-right-0 lg:-top-0 lg:h-[72px] lg:w-[72px]" aria-hidden />
            </div>
            <div className="absolute right-[4%] top-[6%] h-[260px] w-[240px] rotate-[6deg] drop-shadow-[0_14px_18px_rgba(0,0,0,0.18)] lg:right-[6%] lg:h-[295px] lg:w-[275px]">
              <Image src="/browsepage1/Mask group (1).png" alt="Pink tassel lamp" width={400} height={400} className="h-full w-full object-contain" priority />
              <Image src="/browsepage1/Star 10.png" alt="" width={60} height={60} className="absolute -left-1 -top-1 h-12 w-12 lg:-left-1 lg:-top-1 lg:h-[54px] lg:w-[54px]" aria-hidden />
            </div>
            <div className="absolute bottom-[8%] left-[3%] h-[240px] w-[225px] rotate-[-3deg] drop-shadow-[0_14px_18px_rgba(0,0,0,0.18)] lg:bottom-[9%] lg:left-[4%] lg:h-[270px] lg:w-[250px]">
              <Image src="/browsepage1/Mask group (2).png" alt="Pink crochet tassels" width={400} height={400} className="h-full w-full object-contain" />
              <Image src="/browsepage1/Star 11.png" alt="" width={60} height={60} className="absolute -left-1 -top-1 h-12 w-12 lg:-left-1 lg:-top-1 lg:h-[54px] lg:w-[54px]" aria-hidden />
            </div>
            <div className="absolute bottom-[9%] right-[4%] h-[240px] w-[225px] rotate-[7deg] drop-shadow-[0_14px_18px_rgba(0,0,0,0.18)] lg:bottom-[10%] lg:right-[5%] lg:h-[270px] lg:w-[250px]">
              <Image src="/browsepage1/Mask group (3).png" alt="Pink pom pom flower" width={400} height={400} className="h-full w-full object-contain" />
              <Image src="/browsepage1/Star 13.png" alt="" width={72} height={72} className="absolute -right-1 -top-1 h-[60px] w-[60px] lg:-right-0 lg:-top-0 lg:h-[66px] lg:w-[66px]" aria-hidden />
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center">
            <h1 className="font-serif text-[30px] font-bold leading-[1.05] md:text-[44px] lg:text-[48px]">
              <span className="block font-serif font-bold text-[#B85C7A]">Wear the softness</span>
              <span className="block text-black">you were never given</span>
              <span className="block text-black">permission to keep</span>
            </h1>
            <p className="mt-4 max-w-[400px] text-[13px] font-medium leading-snug text-[#7B2D4B] md:text-[14px]">
              Every VIRELA piece is a small act of
              <br />
              creativity you get to carry with you
            </p>
            <Link href="/login" className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#7B2D4B] px-8 text-[15px] font-medium italic tracking-wide text-white transition hover:bg-[#6A2440]">
              Start Order
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-center gap-3 pb-8 md:hidden">
          <Image src="/browsepage1/Mask group.png" alt="" width={120} height={120} className="h-28 w-28 object-contain" />
          <Image src="/browsepage1/Mask group (1).png" alt="" width={120} height={120} className="h-28 w-28 object-contain" />
          <Image src="/browsepage1/Mask group (3).png" alt="" width={120} height={120} className="h-28 w-28 object-contain" />
        </div>
      </main>

      <section className="bg-[#FFF5F0] px-6 py-10 md:px-10 md:py-14">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="w-full md:w-[42%]">
            <div className="overflow-hidden rounded-2xl bg-zinc-200">
              <Image src="/placeholders/placeholder-6.svg" alt="Crafting" width={600} height={400} className="h-[240px] w-full object-cover md:h-[280px]" />
            </div>
          </div>
          <div className="w-full md:w-[58%]">
            <h2 className="font-serif text-[20px] font-bold text-[#B85C7A] md:text-[24px]">A little craft , a lot of heart</h2>
            <p className="mt-3 max-w-[560px] text-[13px] leading-relaxed text-zinc-600">
              At VIRELA, every piece is handmade with intention : scrunchies, jewelry, and creative crafts designed to celebrate individuality. We prioritize thoughtful craftsmanship and honest materials, so every customer feels seen in what they wear.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBE9E9] px-3 py-1.5 text-xs font-medium text-[#7B2D4B]">
                <span className="rounded bg-white px-1 py-0.5 text-[10px]">✦</span> Specially Handmade
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBE9E9] px-3 py-1.5 text-xs font-medium text-[#7B2D4B]">
                <span className="rounded bg-white px-1 py-0.5 text-[10px]">✦</span> Aesthetic Packaging
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFBEB] px-6 py-10 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-xs font-bold uppercase tracking-widest text-black">Find your aesthetic</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 1, 1, 1].map((_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <Image src="/browsepage1/Mask group.png" alt="Scrunchie" width={400} height={400} className="h-full w-full object-cover" />
                </div>
                <div className="p-3 text-center">
                  <span className="rounded-full bg-[#E890A8] px-3 py-1 text-xs font-medium text-white">Scrunchie</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FDE8E8] px-6 py-10 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest text-black">Featured pieces</h2>
            <div className="flex gap-2">
              <button className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-sm shadow">‹</button>
              <button className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-sm shadow">›</button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
                <div className="overflow-hidden rounded-xl bg-zinc-100">
                  <Image src="/browsepage1/Mask group (1).png" alt="Featured" width={400} height={400} className="aspect-square w-full object-cover" />
                </div>
                <div className="px-2 pb-2 pt-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">Scrunchie</span>
                    <span className="font-bold">$22</span>
                  </div>
                  <button className="mt-2 w-full rounded-full bg-[#F9A8B8] py-1.5 text-xs font-medium text-white">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8F0] px-6 py-12 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-center text-xs font-bold uppercase tracking-widest text-black">What customers are saying</h2>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { name: "ADEBISI", offset: "" },
              { name: "ADEBISI", offset: "md:mt-8" },
              { name: "ADEBISI", offset: "" },
            ].map((t, i) => (
              <div key={i} className={`rounded-2xl bg-gradient-to-br from-[#C67A8A] to-[#B85C7A] p-6 text-white shadow ${t.offset}`}>
                <p className="text-xs leading-relaxed">“it feels like getting a gift from a friend who really knows me”</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF5F5] px-6 py-10 text-center md:px-10">
        <div className="mx-auto max-w-[600px]">
          <h2 className="text-sm font-bold text-[#B85C7A]">Get first access to new drops</h2>
          <p className="mx-auto mt-2 max-w-[420px] text-xs leading-relaxed text-zinc-600">Join the inner circle for early product drops , restock alerts and the occasional studio story</p>
          <form className="mx-auto mt-4 flex max-w-[380px] items-center gap-0 overflow-hidden rounded-full border border-[#E5A0A8] bg-white p-1">
            <input placeholder="Your email address" className="flex-1 bg-transparent px-4 py-2 text-xs outline-none placeholder:text-zinc-400" />
            <button type="submit" className="rounded-full bg-[#7B2D4B] px-4 py-2 text-xs font-medium text-white">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 md:flex-row md:items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-bold uppercase tracking-widest">Make it yours</h2>
            <p className="mt-2 max-w-[420px] text-xs leading-relaxed text-zinc-600">Pick your palette , add a charm . Custom commissions are hand-finished just for you , the same craftsmanship shaped around your story.</p>
            <div className="mt-4 flex gap-2">
              <span className="h-6 w-6 rounded-full bg-[#D9A8B5] ring-1 ring-black/10" />
              <span className="h-6 w-6 rounded-full bg-[#E8F0E0] ring-1 ring-black/10" />
              <span className="h-6 w-6 rounded-full bg-[#5A2A3A] ring-1 ring-black/10" />
              <span className="h-6 w-6 rounded-full bg-[#C9A86A] ring-1 ring-black/10" />
            </div>
            <Link href="/design" className="mt-4 inline-flex rounded-full bg-[#7B2D4B] px-5 py-2 text-xs font-medium text-white">
              Start a Custom Order
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <div className="h-[220px] overflow-hidden rounded-tl-[40px] rounded-br-[40px] bg-zinc-200 md:h-[260px]">
              <Image src="/placeholders/placeholder-12.svg" alt="Make it yours" width={600} height={400} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#8B3A52] px-6 py-10 text-white md:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-serif text-lg font-bold">Virela</p>
            <p className="mt-2 max-w-[260px] text-xs leading-relaxed text-white/70">Aesthetic accessories and creative handmades for people who love beauty in the details</p>
          </div>
          <div className="flex gap-12 text-xs">
            <div className="flex flex-col gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/#story" className="hover:underline">
                Our Story
              </Link>
              <Link href="/#shop" className="hover:underline">
                Shop
              </Link>
              <Link href="/#contact" className="hover:underline">
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="flex h-6 w-6 items-center justify-center rounded bg-white text-[#8B3A52]">
                𝕏
              </a>
              <a href="#" className="flex h-6 w-6 items-center justify-center rounded bg-white text-[#8B3A52]">
                𝕏
              </a>
              <a href="#" className="flex h-6 w-6 items-center justify-center rounded bg-white text-[#8B3A52]">
                𝕏
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1280px] overflow-hidden">
          <p className="select-none text-center font-serif text-[72px] font-bold leading-none tracking-tighter text-white/90 md:text-[140px]">Virela</p>
        </div>
      </footer>
    </div>
  );
}
