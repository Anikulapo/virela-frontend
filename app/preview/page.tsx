export default function PreviewPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-10">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
        Page 4 · Preview
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Preview</h1>
      <p className="mt-1 max-w-md text-zinc-500">
        AI-generated image with a nice loading moment, prominent
        &quot;preview may differ&quot; notice, and Approve / Try again (3
        tries) / Edit my answers.
      </p>
    </main>
  );
}