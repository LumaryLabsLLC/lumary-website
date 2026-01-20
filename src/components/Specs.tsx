const videoSpecs = [
  { format: "H.264", description: "Wide compatibility, smaller files" },
  { format: "HEVC", description: "High quality at lower bitrates" },
  { format: "ProRes 422", description: "Professional editing, broadcast" },
  { format: "ProRes 422 HQ", description: "High-quality masters" },
  { format: "ProRes 4444", description: "VFX work, alpha channels" },
];

const audioSpecs = [
  { format: "AAC", description: "Up to 320kbps, efficient compression" },
  { format: "PCM", description: "Uncompressed 16/24-bit audio" },
];

const capabilities = [
  { label: "Max Resolution", value: "Up to 8K" },
  { label: "Frame Rates", value: "24, 25, 30, 50, 60 fps" },
  { label: "Color Depth", value: "8-bit, 10-bit (ProRes)" },
  { label: "Audio Sample Rate", value: "44.1kHz, 48kHz" },
  { label: "Audio Bit Depth", value: "16-bit, 24-bit" },
  { label: "Simultaneous Sources", value: "Unlimited*" },
];

export function Specs() {
  return (
    <section id="specs" className="py-24 lg:py-32 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-400">Technical Specifications</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Formats that work
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Real codecs your editor actually wants. Hardware-accelerated so recording
            doesn't slow your Mac down.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Video Codecs */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5" />
                </svg>
                Video Codecs
              </h3>
              <ul className="mt-4 space-y-3">
                {videoSpecs.map((spec) => (
                  <li key={spec.format} className="flex justify-between items-start">
                    <span className="text-sm font-medium text-white">{spec.format}</span>
                    <span className="text-xs text-zinc-500 text-right ml-2">{spec.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audio Codecs */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
                Audio Codecs
              </h3>
              <ul className="mt-4 space-y-3">
                {audioSpecs.map((spec) => (
                  <li key={spec.format} className="flex justify-between items-start">
                    <span className="text-sm font-medium text-white">{spec.format}</span>
                    <span className="text-xs text-zinc-500 text-right ml-2">{spec.description}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-lg font-semibold text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                Caption Formats
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex justify-between items-start">
                  <span className="text-sm font-medium text-white">SRT</span>
                  <span className="text-xs text-zinc-500 text-right ml-2">Universal subtitle format</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-sm font-medium text-white">VTT</span>
                  <span className="text-xs text-zinc-500 text-right ml-2">Web-optimized captions</span>
                </li>
              </ul>
            </div>

            {/* Capabilities */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Capabilities
              </h3>
              <ul className="mt-4 space-y-3">
                {capabilities.map((cap) => (
                  <li key={cap.label} className="flex justify-between items-start">
                    <span className="text-sm text-zinc-400">{cap.label}</span>
                    <span className="text-sm font-medium text-white text-right ml-2">{cap.value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-zinc-600">* Hardware dependent</p>
            </div>
          </div>

          {/* File Organization - File tree */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-white mb-3">One session, all your files</h3>
              <p className="text-zinc-500 max-w-md mx-auto">
                Every recording creates a folder with separate files for each source.
              </p>
            </div>

            <div className="max-w-lg mx-auto font-mono text-base">
              {/* Output folder */}
              <div className="flex items-center gap-3 text-white">
                <svg className="w-6 h-6 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>
                <span className="font-medium">Recordings</span>
              </div>

              {/* Session folders */}
              <div className="ml-3 mt-2 border-l-2 border-zinc-700 pl-6 space-y-4">
                {/* Session 1 - Expanded */}
                <div>
                  <div className="flex items-center gap-3 text-white">
                    <svg className="w-5 h-5 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                    <span>TK01_2025-01-20_143022</span>
                  </div>
                  <div className="ml-2.5 mt-1 border-l-2 border-zinc-700/50 pl-5 space-y-2">
                    <div className="flex items-center gap-3 text-zinc-500 py-0.5">
                      <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      <span>screen.mov</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-500 py-0.5">
                      <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      <span>camera.mov</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-500 py-0.5">
                      <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                      </svg>
                      <span>microphone.m4a</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-500 py-0.5">
                      <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>
                      <span>captions.srt</span>
                    </div>
                  </div>
                </div>

                {/* Session 2 - Collapsed */}
                <div className="flex items-center gap-3 text-zinc-500">
                  <svg className="w-5 h-5 text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                  <span>TK02_2025-01-20_151247</span>
                </div>

                {/* Session 3 - Collapsed */}
                <div className="flex items-center gap-3 text-zinc-500">
                  <svg className="w-5 h-5 text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                  <span>TK03_2025-01-20_162538</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
