export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

        <div className="relative z-10">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-zinc-400">
            Nepal’s Creator Platform
          </p>

          <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
            Mero<span className="text-red-500">Blog</span>
          </h1>

          <p className="mt-8 max-w-3xl text-2xl font-light text-zinc-200 md:text-4xl">
            Where Nepal Writes Its Digital Future.
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            A modern publishing platform for Nepali creators to tell stories,
            build audiences, and shape the future of digital Nepal.
          </p>

          <div className="mt-14 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-10 py-4 text-lg font-semibold text-black transition hover:scale-105 hover:bg-zinc-200">
              Start Writing
            </button>

            <button className="rounded-full border border-zinc-700 px-10 py-4 text-lg transition hover:border-zinc-400">
              Explore Stories
            </button>
          </div>

          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8 text-center text-zinc-500">
            <div>
              <p className="text-3xl font-bold text-white">10K+</p>
              <p className="mt-1 text-sm">Future Creators</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">∞</p>
              <p className="mt-1 text-sm">Stories to Share</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">1 Vision</p>
              <p className="mt-1 text-sm">Digital Nepal</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}