export default function ConfirmationPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-10">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
        Page 6 · Order confirmed
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Order confirmed</h1>
      <p className="mt-1 max-w-md text-zinc-500">
        Confirmation with order summary, drop-off point, and what happens
        next. Email sent immediately; WhatsApp if opted in.
      </p>
    </main>
  );
}