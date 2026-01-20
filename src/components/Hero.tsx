export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full px-4 py-1.5 text-sm font-medium text-zinc-400 ring-1 ring-zinc-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Now available on the Mac App Store
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Professional Screen Recording for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              macOS
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto">
            Capture screen, camera, mic, and system audio at once. Each source gets its own file,
            so you can edit them separately later.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#pricing"
              className="rounded-full bg-white px-6 py-3 text-base font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for Mac
            </a>
            <a
              href="#features"
              className="rounded-full px-6 py-3 text-base font-semibold text-white ring-1 ring-zinc-700 hover:ring-zinc-500 transition-colors"
            >
              See Features
            </a>
          </div>

        </div>

        {/* App Screenshot */}
        <div className="mt-16 relative">
          <div className="relative mx-auto max-w-5xl">
            <div className="shadow-2xl overflow-hidden">
              <img
                src="/images/image1.png"
                alt="Lumary app interface showing screen recording controls, audio settings, and session management"
                className="w-full h-auto"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-to-t from-[#1c1c1e] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
