export default function AdminPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-10">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
        Page 8 · Admin
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Admin</h1>
      <p className="mt-1 max-w-md text-zinc-500">
        Store open/closed switch with message and reopen date; order list with
        status updates (paid → in production → ready).
      </p>
    </main>
  );
}