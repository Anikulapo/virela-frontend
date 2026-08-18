export default function OrderDetailPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-10">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
        Order detail
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Order detail</h1>
      <p className="mt-1 max-w-md text-zinc-500">
        Thumbnail, status timeline (paid → being made → ready for pickup), and
        an &quot;order something similar&quot; shortcut.
      </p>
    </main>
  );
}