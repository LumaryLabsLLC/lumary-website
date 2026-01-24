const features = [
  "Multi-source recording (screen, camera, mic, system audio)",
  "Professional codecs (H.264, HEVC, ProRes)",
  "Auto-transcription with SRT/VTT export",
  "Crash recovery and session checkpointing",
  "Production tools (slate, markers, projects)",
  "Composite mode with picture-in-picture",
  "Global hotkeys and URL scheme",
  "Preflight checks",
  "Free updates",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-400">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One-time purchase, no subscriptions
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Pay once, own it forever. Free updates for the current major version.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-lg">
          <div className="rounded-3xl border border-zinc-700 bg-zinc-900/50 p-8 lg:p-10 ring-1 ring-amber-500/20">
            {/* Price badge */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Lumary</h3>
                <p className="text-sm text-zinc-400">Professional Screen Recorder</p>
              </div>
              <div className="rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-400">
                macOS
              </div>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight text-white">$29</span>
              <span className="text-lg text-zinc-500">USD</span>
            </div>
            <p className="mt-1 text-sm text-zinc-500">One-time purchase</p>

            {/* CTA */}
            <div
              className="mt-8 block w-full rounded-full bg-zinc-700 py-3 text-center text-base font-semibold text-zinc-300 cursor-default"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Coming Soon
              </span>
            </div>

            {/* Features */}
            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-amber-400 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-500">
              Requires macOS 14.0 (Sonoma) or later.
              <br />
              Optimized for Apple Silicon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
