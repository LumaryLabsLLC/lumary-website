import { Header, Footer } from "@/components";
import Link from "next/link";

const featureCategories = [
  {
    title: "Multi-Source Capture",
    description: "Record everything at once, each to its own file",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>
    ),
    features: [
      {
        name: "Screen Recording",
        description: "Full display, single window, or specific applications. Multi-display support included."
      },
      {
        name: "Camera Capture",
        description: "Built-in or external cameras with horizontal/vertical flip options and real-time preview."
      },
      {
        name: "Microphone Recording",
        description: "Multi-channel support up to 32 channels. Select specific channels, mix to mono, or stereo."
      },
      {
        name: "System Audio",
        description: "Capture application audio and system sounds separately from your microphone."
      },
      {
        name: "Per-Source Files",
        description: "Each source saves to its own file. Edit screen, camera, and audio separately in post."
      },
    ]
  },
  {
    title: "Professional Codecs",
    description: "From web delivery to broadcast masters",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    features: [
      {
        name: "H.264",
        description: "High profile encoding for general purpose use and streaming. Maximum compatibility."
      },
      {
        name: "HEVC (H.265)",
        description: "40% better compression than H.264. Ideal for 4K content with smaller file sizes."
      },
      {
        name: "ProRes 422",
        description: "Professional editing codec. Variants from Proxy to HQ for any workflow."
      },
      {
        name: "ProRes 4444",
        description: "VFX-ready with alpha channel support. XQ variant for master file quality."
      },
      {
        name: "Professional Audio",
        description: "AAC up to 320kbps or uncompressed PCM at 24-bit/192kHz for broadcast."
      },
    ]
  },
  {
    title: "Production Tools",
    description: "Built for professional workflows",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
      </svg>
    ),
    features: [
      {
        name: "Slate System",
        description: "Scene, shot, and take tracking with auto-increment. Metadata embedded in every session."
      },
      {
        name: "Markers",
        description: "Drop markers during recording with custom notes. Mark good takes, bad takes, or review points."
      },
      {
        name: "Projects",
        description: "Save and recall complete recording setups. Source configs, encoding presets, slate defaults."
      },
      {
        name: "Composition Guides",
        description: "Safe area overlays, rule of thirds, center crosshair, and aspect ratio guides."
      },
      {
        name: "Audio Metering",
        description: "Per-source level monitoring with peak indicators and clipping detection."
      },
    ]
  },
  {
    title: "Composite Recording & Scenes",
    description: "Picture-in-picture with instant scene switching",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
    features: [
      {
        name: "Picture-in-Picture",
        description: "Screen and camera combined in one file with mixed audio. Optional isolated files too."
      },
      {
        name: "Scene Presets",
        description: "Save camera layouts as scenes. Switch instantly with number keys, hotkeys, or Stream Deck."
      },
      {
        name: "Overlay Customization",
        description: "Circle, rounded, or sharp corners. Adjustable size, position, margins, and borders."
      },
      {
        name: "Flexible Positioning",
        description: "Drag to position or snap to corners. Full screen, picture-in-picture, or camera off."
      },
      {
        name: "Live Switching",
        description: "Change scenes during recording. Perfect for tutorials, presentations, and live demos."
      },
    ]
  },
  {
    title: "Transcription",
    description: "On-device speech recognition",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
    features: [
      {
        name: "On-Device Processing",
        description: "Speech recognition runs locally on your Mac. No cloud, no uploads, no waiting."
      },
      {
        name: "50+ Languages",
        description: "Optional network recognition for additional language support when needed."
      },
      {
        name: "Auto-Transcribe",
        description: "Automatically transcribe when recording ends. Or process manually, one or batch."
      },
      {
        name: "Searchable Transcripts",
        description: "Find any word across all your recordings. Jump to the exact moment."
      },
      {
        name: "Caption Export",
        description: "Export to SRT or VTT format with accurate timing synced to your audio."
      },
    ]
  },
  {
    title: "Reliability",
    description: "Built to never lose a recording",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    features: [
      {
        name: "Crash Recovery",
        description: "Fragmented MP4 format protects your recordings. Auto-detect and repair interrupted sessions."
      },
      {
        name: "Session Checkpoints",
        description: "Periodic state snapshots every 30 seconds. Optional continuous marker backup."
      },
      {
        name: "Preflight Checks",
        description: "Permissions, devices, storage, and codec compatibility verified before you hit record."
      },
      {
        name: "Storage Monitoring",
        description: "Real-time space tracking with low-space warnings. File size estimates per codec."
      },
      {
        name: "Error Handling",
        description: "Per-source error tracking with partial failure support. Nothing silently fails."
      },
    ]
  },
  {
    title: "Automation",
    description: "Control Lumary from anywhere",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    features: [
      {
        name: "Global Hotkeys",
        description: "Record, pause, resume, and add markers from any app. Customizable key bindings."
      },
      {
        name: "URL Scheme",
        description: "Control Lumary via URLs. Start, stop, pause, markers, scene/shot navigation, and more."
      },
      {
        name: "Stream Deck",
        description: "Physical buttons for recording controls, markers, scene navigation, and source toggles."
      },
      {
        name: "Shortcuts App",
        description: "Build custom workflows with macOS Shortcuts using URL scheme actions."
      },
      {
        name: "AppleScript",
        description: "Script complex recording workflows or integrate with other automation tools."
      },
    ]
  },
  {
    title: "Privacy First",
    description: "Your recordings stay yours",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    features: [
      {
        name: "No Cloud",
        description: "Everything happens on your Mac. No accounts, no uploads, no third-party services."
      },
      {
        name: "No Analytics",
        description: "We don't track what you record, how often, or anything else. Zero telemetry."
      },
      {
        name: "Local Storage",
        description: "Recordings save to your chosen folder. You control where your files live."
      },
      {
        name: "On-Device AI",
        description: "Transcription uses Apple's on-device speech recognition. Your audio never leaves."
      },
      {
        name: "App Sandbox",
        description: "Hardened runtime with minimal permissions. Only what's needed, nothing more."
      },
    ]
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] noise-bg relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="gradient-orb glow-animate w-[600px] h-[600px] -top-48 -left-48 bg-amber-500/10"
          style={{ position: 'absolute' }}
        />
        <div
          className="gradient-orb drift-animate w-[500px] h-[500px] top-1/4 -right-32 bg-orange-500/5"
          style={{ position: 'absolute' }}
        />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-30" />

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-20">
          {/* Hero */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Every feature you need,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                  nothing you don't
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto">
                Professional screen recording with multi-source capture, ProRes encoding,
                local transcription, and complete privacy. No subscriptions, no cloud dependencies.
              </p>
              <div className="mt-10">
                <Link
                  href="/#pricing"
                  className="rounded-full bg-white px-6 py-3 text-base font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download for Mac
                </Link>
              </div>
            </div>
          </div>

          {/* Feature Categories */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-24">
              {featureCategories.map((category, categoryIndex) => (
                <section key={category.title} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                      <p className="text-zinc-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {category.features.map((feature) => (
                      <div
                        key={feature.name}
                        className="rounded-xl bg-zinc-900/50 border border-zinc-800/50 p-6 hover:border-zinc-700/50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Technical Specs Summary */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
            <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800/50 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-white mb-8">Technical Specifications</h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h3 className="text-sm font-medium text-amber-400 mb-3">System Requirements</h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>macOS 14.0 (Sonoma) or later</li>
                    <li>Apple Silicon or Intel Mac</li>
                    <li>8GB RAM minimum</li>
                    <li>16GB RAM recommended</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-amber-400 mb-3">Video Formats</h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>H.264 (AVC)</li>
                    <li>HEVC (H.265)</li>
                    <li>ProRes 422 (all variants)</li>
                    <li>ProRes 4444 / 4444 XQ</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-amber-400 mb-3">Audio Formats</h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>AAC (96-320 kbps)</li>
                    <li>PCM (16/24/32-bit)</li>
                    <li>Up to 192kHz sample rate</li>
                    <li>Up to 32 channels</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-amber-400 mb-3">Performance</h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>Recording start: &lt;200ms</li>
                    <li>Recording stop: &lt;100ms</li>
                    <li>60fps composite rendering</li>
                    <li>Hardware acceleration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to record?</h2>
              <p className="text-zinc-400 mb-8">One-time purchase. No subscription. Free updates.</p>
              <Link
                href="/#pricing"
                className="rounded-full bg-white px-8 py-4 text-base font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors inline-flex items-center gap-2"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
