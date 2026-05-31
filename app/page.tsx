export default function HomePage() {
  const stories = [
    "How AI Is Reshaping Nepal",
    "Building Startups from Kathmandu",
    "The Rise of Nepali Digital Creators",
  ];

  const features = [
    {
      title: "Publish Beautifully",
      desc: "A distraction-free modern writing experience designed for creators.",
    },
    {
      title: "Grow Your Audience",
      desc: "Reach Nepali readers across the globe and build your community.",
    },
    {
      title: "Own Your Voice",
      desc: "Create your digital identity and publish on your own terms.",
    },
  ];

  const cities = [
    "Kathmandu",
    "Sydney",
    "Melbourne",
    "London",
    "Doha",
    "Toronto",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold">
            Mero<span className="text-red-500">Blog</span>
          </h1>

          <div className="hidden gap-8 text-zinc-400 md:flex">
            <a href="#">Explore</a>
            <a href="#">Writers</a>
            <a href="#">About</a>
          </div>

          <button className="rounded-full border border-zinc-700 px-5 py-2 hover:border-zinc-400">
            Sign In
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

        <div className="relative z-10">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-zinc-400">
            Nepal’s Creator Platform
          </p>

          <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
            Mero<span className="text-red-500">Blog</span>
          </h1>

          <p className="mt-8 text-2xl text-zinc-200 md:text-4xl">
            Where Nepal Writes Its Digital Future.
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            A modern publishing platform for Nepali creators to tell stories,
            build audiences, and shape the future of digital Nepal.
          </p>

          <div className="mt-14 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-10 py-4 text-lg font-semibold text-black hover:scale-105">
              Start Writing
            </button>

            <button className="rounded-full border border-zinc-700 px-10 py-4 text-lg hover:border-zinc-400">
              Explore Stories
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Featured Stories
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story}
              className="rounded-3xl border border-zinc-800 p-8 hover:border-red-500"
            >
              <h3 className="text-2xl font-semibold">{story}</h3>
              <p className="mt-4 text-zinc-400">
                Discover insights shaping Nepal’s digital future.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 text-center text-4xl font-bold">
            Why MeroBlog
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-zinc-800 p-8"
              >
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL CREATORS */}
      <section className="py-24 text-center">
        <h2 className="mb-12 text-4xl font-bold">
          Built for Nepali Creators Everywhere
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {cities.map((city) => (
            <span
              key={city}
              className="rounded-full border border-zinc-700 px-6 py-3 text-zinc-300"
            >
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <h2 className="text-5xl font-bold">
          Start Writing Nepal’s Next Chapter
        </h2>

        <button className="mt-10 rounded-full bg-red-500 px-10 py-4 text-lg font-semibold">
          Join MeroBlog
        </button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-10 text-center text-zinc-500">
        © 2026 MeroBlog — Built in Sydney for Nepali creators worldwide.
      </footer>
    </main>
  );
}