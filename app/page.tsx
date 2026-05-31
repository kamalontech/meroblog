export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
          Nepal's Creator Platform
        </p>

        <h1 className="max-w-5xl text-6xl font-bold tracking-tight md:text-8xl">
          MeroBlog
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-zinc-300 md:text-2xl">
          Write. Share. Inspire Nepal.
        </p>

        <p className="mt-8 max-w-3xl text-zinc-500 text-lg">
          The home of Nepali digital creators. Publish stories, share ideas,
          build your audience, and shape Nepal’s digital future.
        </p>

        <div className="mt-12 flex gap-4">
          <button className="rounded-full bg-white px-8 py-4 text-black font-semibold hover:bg-zinc-200">
            Start Writing
          </button>

          <button className="rounded-full border border-zinc-700 px-8 py-4 hover:border-zinc-500">
            Explore Stories
          </button>
        </div>
      </section>
    </main>
  );
}