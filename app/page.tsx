export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-10">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
        Page 1 · Browse
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Browse</h1>
      <p className="mt-1 max-w-md text-zinc-500">
        Public photo grid grouped by category, one &quot;Start order&quot;
        button, closed banner when ordering is off.
      </p>
    </main>
  );
}