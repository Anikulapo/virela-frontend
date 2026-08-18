export default function OrdersPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-10">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
        Page 7 · My orders
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">My orders</h1>
      <p className="mt-1 max-w-md text-zinc-500">
        List of everything ordered with status and price; order detail with
        &quot;order something similar&quot;; account settings here too.
      </p>
    </main>
  );
}